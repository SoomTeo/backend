import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '@src/shared/prisma/prisma.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { CompleteMissionDto } from './dto/complete-mission.dto';
import { CreateMissionByTypeDto } from './dto/create-mission-by-type.dto';
import { makeMissionPrompt } from './prompt.util';
import { createChatCompletion } from '@src/common/utils/openai'; // GPT 유틸
import { MissionType } from '@prisma/client';

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

  async createMission(dto: CreateMissionDto) {
    return this.prisma.mission.create({
      data: {
        title: dto.title,
        description: dto.description,
        type: dto.type as any,
        verificationType: dto.verificationType,
        verificationData: dto.verificationData,
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
    verificationData: any
  ) {
    // 이미 완료한 미션인지 확인
    const exist = await this.prisma.missionCompletion.findFirst({
      where: { userId, missionId },
    });
    if (exist) throw new Error('이미 완료한 미션입니다.');
    return this.prisma.missionCompletion.create({
      data: {
        userId,
        missionId,
        verificationData,
        status: 'PENDING',
      },
    });
  }
}
