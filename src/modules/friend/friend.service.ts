import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '@src/shared/prisma/prisma.service';

@Injectable()
export class FriendService {
  constructor(private readonly prisma: PrismaService) {}

  // 1. 랜덤 유저 5명
  async getRandomUsers(userId: number) {
    const friends = await this.prisma.friend.findMany({ where: { userId } });
    const requested = await this.prisma.friendRequest.findMany({
      where: { fromUserId: userId },
    });
    const excludeIds = [
      userId,
      ...friends.map(f => f.friendId),
      ...requested.map(r => r.toUserId),
    ];
    return this.prisma.user.findMany({
      where: { id: { notIn: excludeIds } },
      select: { id: true, nickname: true },
      orderBy: { id: 'asc' },
      take: 5,
    });
  }

  // 2. 친구 요청 보내기
  async requestFriend(fromUserId: number, toUserId: number) {
    if (fromUserId === toUserId)
      throw new ForbiddenException('자기 자신에게 요청 불가');

    const result = await this.prisma.friendRequest.create({
      data: { fromUserId, toUserId, status: 'REQUESTED' },
      include: {
        fromUser: true,
        toUser: true,
      },
    });
    return {
      requestId: result.id,
      fromUserId: result.fromUserId,
      fromUserNickname: result.fromUser.nickname,
      toUserId: result.toUserId,
      toUserNickname: result.toUser.nickname,
      status: result.status,
      createdAt: result.createdAt,
    };
  }

  // 3. 친구 요청 수락/거절
  async respondFriendRequest(requestId: number, accept: boolean) {
    const req = await this.prisma.friendRequest.findUnique({
      where: { id: requestId },
    });
    if (!req) throw new NotFoundException();
    if (accept) {
      await this.prisma.friend.createMany({
        data: [
          { userId: req.fromUserId, friendId: req.toUserId },
          { userId: req.toUserId, friendId: req.fromUserId },
        ],
      });
      await this.prisma.friendRequest.update({
        where: { id: requestId },
        data: { status: 'ACCEPTED' },
      });
      return {
        message: '친구 요청 수락',
      };
    } else {
      await this.prisma.friendRequest.update({
        where: { id: requestId },
        data: { status: 'REJECTED' },
      });
      return {
        message: '친구 요청 거절',
      };
    }
  }

  async getFriendMainPage(friendId: number) {
    // 1. 유저 기본 정보
    const user = await this.prisma.user.findUnique({
      where: { id: friendId },
      select: { nickname: true, age: true, gender: true },
    });

    // 2. 오늘 점수/목표점수
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayProgress = await this.prisma.dailyWeeklyProgress.findFirst({
      where: {
        userId: friendId,
        type: 'daily',
        date: { gte: today },
      },
      orderBy: { date: 'desc' },
    });

    // 3. 최근 9일간 일간 추세
    const nineDaysAgo = new Date();
    nineDaysAgo.setDate(nineDaysAgo.getDate() - 8);
    nineDaysAgo.setHours(0, 0, 0, 0);
    const dailyTrends = await this.prisma.dailyWeeklyProgress.findMany({
      where: {
        userId: friendId,
        type: 'daily',
        date: { gte: nineDaysAgo },
      },
      orderBy: { date: 'asc' },
      select: { date: true, progress: true },
    });
    const last3 = dailyTrends.slice(-3);
    const dailyLast3Avg = last3.length
      ? last3.reduce((sum, d) => sum + d.progress, 0) / last3.length
      : 0;

    // 4. 최근 9주간 주간 추세
    const now = new Date();
    const dayOfWeek = now.getDay();
    const monday = new Date(now);
    monday.setDate(now.getDate() - dayOfWeek - 7 * 8); // 8주 전 월요일
    const weeklyProgress = await this.prisma.dailyWeeklyProgress.findMany({
      where: {
        userId: friendId,
        type: 'daily',
        date: { gte: monday },
      },
      orderBy: { date: 'asc' },
      select: { date: true, progress: true },
    });
    const weekMap: { [week: string]: number } = {};
    weeklyProgress.forEach(d => {
      const week = getYearWeek(d.date);
      weekMap[week] = (weekMap[week] || 0) + d.progress;
    });
    const weeklyTrends = Object.entries(weekMap)
      .map(([week, progress]) => ({ week, progress }))
      .slice(-9);
    const last3Weeks = weeklyTrends.slice(-3);
    const weeklyLast3Avg = last3Weeks.length
      ? last3Weeks.reduce((sum, d) => sum + d.progress, 0) / last3Weeks.length
      : 0;

    // 7. 응답
    return {
      user,
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

  // 5. 내 친구 목록
  async getMyFriends(userId: number) {
    const friends = await this.prisma.friend.findMany({
      where: { userId },
    });
    return this.prisma.user.findMany({
      where: { id: { in: friends.map(f => f.friendId) } },
      select: { id: true, nickname: true },
    });
  }

  // 나에게 친구 요청한 사람들의 목록
  async getFriendRequests(userId: number) {
    const requests = await this.prisma.friendRequest.findMany({
      where: { toUserId: userId, status: 'REQUESTED' },
      include: { fromUser: true },
    });
    return requests.map(r => ({
      id: r.id,
      fromUserId: r.fromUserId,
      fromUserNickname: r.fromUser.nickname,
      toUserId: r.toUserId,
      status: r.status,
    }));
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
