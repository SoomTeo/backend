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

// 하버사인 거리 계산 함수
function haversine(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const toRad = (x: number) => (x * Math.PI) / 180;
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

// 경로의 총 거리 계산
function calcTotalDistance(path: { lat: number; lng: number }[]): number {
  let dist = 0;
  for (let i = 1; i < path.length; i++) {
    dist += haversine(
      path[i - 1].lat,
      path[i - 1].lng,
      path[i].lat,
      path[i].lng
    );
  }
  return dist;
}

@Injectable()
export class MissionService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllMissions(userId: number) {
    // 사용자가 완료한 미션 정보도 함께 반환
    return this.prisma.mission.findMany({
      where: { userId },
      include: { completions: true },
    });
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
      missionData = JSON.parse(gptResult.content);
    } catch {
      throw new Error('GPT 응답 파싱 실패');
    }

    // 4. DB 저장
    return this.prisma.mission.create({
      data: {
        ...missionData,
        type: dto.type as MissionType,
        userId,
        verificationType: dto.type,
        verificationData: missionData.verificationData ?? {},
      },
    });
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
        // 1. OCR (GPT API 또는 외부 OCR API)
        const ocrText = await callOcrApi(file); // 이미지에서 텍스트 추출 (상호명, 날짜)
        feedback = `영수증에서 '${ocrText}'를 확인했습니다. (상호명을 확인하고) 갔다오셨군요!`;
        verificationData = { ocrText };
        break;
      case 'GPS':
        // 2. 경로 기반 거리/시간 계산
        const { startTime, endTime, path } = dto;
        const distance = calcTotalDistance(path); // km
        const duration =
          (new Date(endTime).getTime() - new Date(startTime).getTime()) /
          1000 /
          60; // 분

        // 예시: 30분에 2km 이상 이동해야 성공
        const minDistance = 2; // km
        const minDuration = 30; // 분

        if (distance < minDistance || duration < minDuration) {
          throw new ForbiddenException('이동 거리/시간이 부족합니다.');
        }

        feedback = `총 ${distance.toFixed(2)}km, ${duration.toFixed(0)}분 산책 성공!`;
        verificationData = { path, distance, duration };
        break;
      case 'BUTTON':
        feedback = '좋은 글귀를 잘 읽으셨군요!';
        break;
      case 'DIARY':
        // 3. GPT로 일기 피드백
        feedback = await callGptDiaryFeedback(dto.diaryText);
        verificationData = { diaryText: dto.diaryText };
        break;
      default:
        throw new BadRequestException('지원하지 않는 미션 타입');
    }

    return this.prisma.missionCompletion.create({
      data: {
        userId,
        missionId,
        verificationData,
        status: 'VERIFIED',
        feedback,
      },
    });
  }
}
