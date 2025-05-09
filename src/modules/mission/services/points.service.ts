import { Injectable } from '@nestjs/common';
import { PrismaService } from '@src/shared/prisma/prisma.service';
import {
  MISSION_POINTS,
  INITIAL_TARGET_POINTS,
  POINTS_INCREMENT,
} from '../constants/mission.constants';
import { MissionType } from '@prisma/client';

@Injectable()
export class PointsService {
  constructor(private readonly prisma: PrismaService) {}

  // 사용자의 현재 목표 점수 조회
  async getCurrentTargetPoints(userId: number): Promise<number> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { surveyResults: true },
    });

    if (!user?.surveyResults) {
      throw new Error('사용자 정보 또는 설문 결과가 없습니다.');
    }

    // 이전 목표 점수 조회
    const lastTarget = await this.prisma.dailyWeeklyProgress.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!lastTarget) {
      // 첫 목표 점수 설정
      const initialPoints =
        INITIAL_TARGET_POINTS[
          user.surveyResults[0].level as keyof typeof INITIAL_TARGET_POINTS
        ];
      await this.prisma.dailyWeeklyProgress.create({
        data: {
          userId,
          type: 'daily',
          progress: 0,
          targetPoints: initialPoints,
        },
      });
      return initialPoints;
    }

    return lastTarget.targetPoints;
  }

  // 미션 완료 시 점수 추가 및 목표 달성 체크
  async addPointsAndCheckAchievement(
    userId: number,
    missionType: MissionType,
    points: number
  ): Promise<{
    isAchieved: boolean;
    newTargetPoints: number;
    remainingPoints: number;
  }> {
    // 현재 목표 점수 조회
    const currentTarget = await this.getCurrentTargetPoints(userId);

    // 현재 진행 상황 조회
    const currentProgress = await this.prisma.dailyWeeklyProgress.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!currentProgress) {
      throw new Error('진행 상황을 찾을 수 없습니다.');
    }

    // 새로운 진행 점수 계산
    const newProgress = currentProgress.progress + points;
    const remainingPoints = Math.max(0, currentTarget - newProgress);

    // 목표 달성 여부 확인
    const isAchieved = newProgress >= currentTarget;

    // 진행 상황 업데이트
    await this.prisma.dailyWeeklyProgress.update({
      where: { id: currentProgress.id },
      data: { progress: newProgress },
    });

    let newTargetPoints = currentTarget;

    // 목표 달성 시 새로운 목표 설정
    if (isAchieved) {
      newTargetPoints = currentTarget + POINTS_INCREMENT;

      // 새로운 목표 생성
      await this.prisma.dailyWeeklyProgress.create({
        data: {
          userId,
          type: 'daily',
          progress: 0,
          targetPoints: newTargetPoints,
        },
      });

      // 뱃지 발급
      await this.prisma.badge.create({
        data: {
          name: `목표 달성 #${currentTarget}점`,
          userId,
        },
      });
    }

    return {
      isAchieved,
      newTargetPoints,
      remainingPoints,
    };
  }

  // 미션 타입에 따른 점수 반환
  getMissionPoints(missionType: MissionType): number {
    return MISSION_POINTS[missionType] || 0;
  }
}
