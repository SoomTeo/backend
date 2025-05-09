import { Injectable } from '@nestjs/common';
import { PrismaService } from '@src/shared/prisma/prisma.service';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(
    email: string,
    nickname: string,
    password: string
  ): Promise<User> {
    return this.prisma.user.create({
      data: { email, nickname, password },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getProfile(userId: number): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { surveyResults: true },
    });
    return {
      userId: user.id,
      email: user.email,
      nickname: user.nickname,
      level: user.surveyResults ? user.surveyResults.level : null,
    };
  }

  async getProgress(userId: number) {
    // 1. 오늘 날짜
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 오늘 점수/목표점수
    const todayProgress = await this.prisma.dailyWeeklyProgress.findFirst({
      where: {
        userId,
        type: 'daily',
        date: { gte: today },
      },
      orderBy: { date: 'desc' },
    });

    // 2. 최근 9일간 일간 추세
    const nineDaysAgo = new Date();
    nineDaysAgo.setDate(nineDaysAgo.getDate() - 8);
    nineDaysAgo.setHours(0, 0, 0, 0);

    const dailyTrends = await this.prisma.dailyWeeklyProgress.findMany({
      where: {
        userId,
        type: 'daily',
        date: { gte: nineDaysAgo },
      },
      orderBy: { date: 'asc' },
      select: { date: true, progress: true },
    });

    // 최근 3일 평균
    const last3 = dailyTrends.slice(-3);
    const dailyLast3Avg = last3.length
      ? last3.reduce((sum, d) => sum + d.progress, 0) / last3.length
      : 0;

    // 3. 최근 9주간 주간 추세
    const now = new Date();
    const dayOfWeek = now.getDay();
    const monday = new Date(now);
    monday.setDate(now.getDate() - dayOfWeek - 7 * 8); // 8주 전 월요일

    const weeklyProgress = await this.prisma.dailyWeeklyProgress.findMany({
      where: {
        userId,
        type: 'daily',
        date: { gte: monday },
      },
      orderBy: { date: 'asc' },
      select: { date: true, progress: true },
    });

    // 주차별로 그룹핑
    const weekMap: { [week: string]: number } = {};
    weeklyProgress.forEach(d => {
      const week = getYearWeek(d.date);
      weekMap[week] = (weekMap[week] || 0) + d.progress;
    });
    const weeklyTrends = Object.entries(weekMap)
      .map(([week, progress]) => ({ week, progress }))
      .slice(-9);

    // 최근 3주 평균
    const last3Weeks = weeklyTrends.slice(-3);
    const weeklyLast3Avg = last3Weeks.length
      ? last3Weeks.reduce((sum, d) => sum + d.progress, 0) / last3Weeks.length
      : 0;

    // 응답 반환
    return {
      today: {
        progress: todayProgress?.progress ?? 0,
        targetPoints: todayProgress?.targetPoints ?? 0,
      },
      dailyTrends: dailyTrends.map(d => ({
        date: d.date,
        progress: d.progress,
      })),
      dailyLast3Avg: parseInt(dailyLast3Avg.toFixed(0)),
      weeklyTrends,
      weeklyLast3Avg: parseInt(weeklyLast3Avg.toFixed(0)),
    };
  }
}

// 주차 계산 함수
function getYearWeek(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const yearStart = new Date(d.getFullYear(), 0, 1);
  const weekNo = Math.ceil(((+d - +yearStart) / 86400000 + 1) / 7);
  return `${d.getFullYear()}-W${weekNo}`;
}
