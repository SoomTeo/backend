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
}
