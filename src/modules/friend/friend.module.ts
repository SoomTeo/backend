import { Module } from '@nestjs/common';
import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';
import { PrismaModule } from '@src/shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FriendController],
  providers: [FriendService],
})
export class FriendModule {}
