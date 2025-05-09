import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '@src/shared/prisma/prisma.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { CreateMissionByTypeDto } from './dto/create-mission-by-type.dto';
import { makeMissionPrompt } from './prompt.util';
import { createChatCompletion } from '@src/common/utils/openai'; // GPT 유틸
import { MissionType } from '@prisma/client';
import { CompleteMissionDto } from './dto/complete-mission.dto';
import { callOcrApi, callGptDiaryFeedback } from './utils/mission.utils';
import { PointsService } from './services/points.service';

@Injectable()
export class MissionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pointsService: PointsService
  ) {}

  async getAllMissions(userId: number) {
    // 사용자가 완료한 미션 정보도 함께 반환
    return this.prisma.mission.findMany({
      where: { userId },
      include: { completions: true },
    });
  }

  // 미션이 0개면 타입별로 하나씩 자동 생성
  public async ensureUserHasMissions(userId: number) {
    // 미완료 미션만 카운트
    const remaining = await this.prisma.mission.count({
      where: {
        userId,
        completions: { none: { userId } }, // 이 유저가 완료하지 않은 미션만 카운트
      },
    });
    if (remaining === 0) {
      const ALL_MISSION_TYPES: MissionType[] = [
        'RECEIPT',
        'GPS',
        'VOICE',
        'BUTTON',
        'DIARY',
      ];
      for (const type of ALL_MISSION_TYPES) {
        await this.createMissionByType(userId, { type } as any);
      }
    }
  }

  async getMissionById(userId: number, id: number) {
    const mission = await this.prisma.mission.findUnique({
      where: { id },
      include: { completions: true },
    });
    if (!mission || mission.userId !== userId)
      throw new NotFoundException('미션을 찾을 수 없습니다.');
    return mission;
  }

  async createMission(userId: number, dto: CreateMissionDto) {
    return this.prisma.mission.create({
      data: {
        title: dto.title,
        description: dto.description,
        type: dto.type as any,
        verificationType: dto.verificationType,
        verificationData: dto.verificationData,
        userId,
      },
    });
  }

  async createMissionByType(userId: number, dto: CreateMissionByTypeDto) {
    // 1. 사용자 정보 조회
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    const surveyResult = await this.prisma.surveyResult.findUnique({
      where: { userId },
    });
    if (!user || !surveyResult)
      throw new ForbiddenException('유저 정보 또는 설문 결과가 없습니다.');

    // 2. 프롬프트 생성
    const prompt = makeMissionPrompt({
      age: user.age,
      gender: user.gender,
      level: surveyResult.level,
      score: surveyResult.totalScore,
      type: dto.type,
    });

    // 3. GPT 호출
    const gptResult = await createChatCompletion([
      { role: 'user', content: prompt },
    ]);
    let missionData;
    try {
      const content = gptResult.content
        .replace(/```json|```/g, '')
        .replace(/\/\/.*$/gm, '')
        .trim();

      missionData = JSON.parse(content);
    } catch {
      console.error('GPT 응답 파싱 실패:', gptResult.content);
      throw new Error('GPT 응답 파싱 실패');
    }

    // GPS 미션일 경우 verificationData에 기준값 저장
    let verificationData = missionData.verificationData ?? {};
    if (dto.type === 'GPS') {
      verificationData = {
        ...verificationData,
        minDuration: missionData.minDuration,
        minDistance: missionData.minDistance,
      };
    }

    // 4. DB 저장
    const created = await this.prisma.mission.create({
      data: {
        title: missionData.title,
        description: missionData.description,
        type: dto.type as MissionType,
        userId,
        verificationType: dto.type,
        verificationData,
      },
    });

    // GPS 미션일 경우 minDuration, minDistance를 리턴값에 포함
    if (dto.type === 'GPS') {
      return {
        ...created,
        minDuration: verificationData.minDuration,
        minDistance: verificationData.minDistance,
      };
    }
    return created;
  }

  async deleteMission(userId: number, id: number) {
    const mission = await this.prisma.mission.findUnique({ where: { id } });
    if (!mission || mission.userId !== userId)
      throw new NotFoundException('미션을 찾을 수 없습니다.');
    return this.prisma.mission.delete({ where: { id } });
  }

  async completeMission(
    userId: number,
    missionId: number,
    dto: CompleteMissionDto,
    file?: Express.Multer.File
  ) {
    const mission = await this.prisma.mission.findUnique({
      where: { id: missionId },
    });
    if (!mission) throw new NotFoundException('미션 없음');
    // 이미 완료했는지 체크
    const exist = await this.prisma.missionCompletion.findFirst({
      where: { userId, missionId },
    });
    if (exist) throw new Error('이미 완료한 미션입니다.');

    let feedback = '';
    let verificationData: any = {};

    switch (mission.type) {
      case 'RECEIPT':
        const ocrText = await callOcrApi(file);
        feedback = `영수증에서 '${ocrText}'를 확인했습니다!`;
        verificationData = { ocrText };
        break;
      case 'GPS':
        if (!dto.isSuccess) {
          throw new ForbiddenException('미션 조건을 충족하지 못했습니다.');
        }
        feedback = `산책 미션 성공!`;
        verificationData = {};
        break;
      case 'VOICE':
        if (!dto.isSuccess) {
          throw new ForbiddenException(
            '발음이 정확하지 않습니다. 다시 시도해주세요.'
          );
        }
        feedback = '발음을 정확하게 따라하셨네요!';
        break;
      case 'BUTTON':
        if (!dto.isSuccess) {
          throw new ForbiddenException('글귀를 끝까지 읽어주세요!');
        }
        feedback = '좋은 글귀를 잘 읽으셨군요!';
        break;
      case 'DIARY':
        feedback = await callGptDiaryFeedback(dto.diaryText);
        verificationData = { diaryText: dto.diaryText };
        break;
      default:
        throw new BadRequestException('지원하지 않는 미션 타입');
    }

    // 미션 완료 기록 생성
    const completion = await this.prisma.missionCompletion.create({
      data: {
        userId,
        missionId,
        verificationData,
        status: 'VERIFIED',
        feedback,
      },
    });

    // 점수 추가 및 목표 달성 체크
    const points = this.pointsService.getMissionPoints(
      mission.type as MissionType
    );
    const achievementResult =
      await this.pointsService.addPointsAndCheckAchievement(
        userId,
        mission.type as MissionType,
        points
      );

    // 미션 완료 후 남은 미션 개수 체크 → 0개면 자동 생성
    const remaining = await this.prisma.mission.count({
      where: {
        userId,
        completions: { none: { userId } }, // 이 유저가 완료하지 않은 미션만 카운트
      },
    });
    if (remaining === 0) {
      // 지금 막 완료한 미션이 포함되어 있으므로 1개면 0개가 됨
      await this.ensureUserHasMissions(userId);
    }

    return {
      ...completion,
      points,
      achievementResult,
    };
  }
}
