import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FriendService } from './friend.service';
import { JwtAuthGuard } from '@src/modules/auth/jwt-auth.guard';

@Controller('friend')
@UseGuards(JwtAuthGuard)
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Get('random')
  async getRandomUsers(@Req() req) {
    return this.friendService.getRandomUsers(req.user.userId);
  }

  @Post('request')
  async requestFriend(@Req() req, @Body() body: { toUserId: number }) {
    return this.friendService.requestFriend(req.user.userId, body.toUserId);
  }

  @Post('respond')
  async respondFriendRequest(
    @Body() body: { requestId: number; accept: boolean }
  ) {
    return this.friendService.respondFriendRequest(body.requestId, body.accept);
  }

  @Get(':id/main')
  async getFriendMainPage(@Param('id') id: number) {
    return this.friendService.getFriendMainPage(Number(id));
  }

  @Get()
  async getMyFriends(@Req() req) {
    return this.friendService.getMyFriends(req.user.userId);
  }
}
