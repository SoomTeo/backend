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
    });
    return {
      requestId: result.id,
      fromUserId: result.fromUserId,
      toUserId: result.toUserId,
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

  // 4. 친구의 메인페이지
  async getFriendMainPage(friendId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: friendId },
      select: { nickname: true, age: true, gender: true },
    });
    const recentMissions = await this.prisma.missionCompletion.findMany({
      where: { userId: friendId, status: 'VERIFIED' },
      orderBy: { completedAt: 'desc' },
      take: 5,
      include: { mission: true },
    });
    const surveyResult = await this.prisma.surveyResult.findUnique({
      where: { userId: friendId },
    });
    return { user, recentMissions, surveyResult };
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
}
