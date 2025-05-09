import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '@src/modules/auth/jwt-auth.guard';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  async getProfile(@Req() req) {
    return this.userService.getProfile(req.user.userId);
  }

  @Get('progress')
  async getProgress(@Req() req) {
    return this.userService.getProgress(req.user.userId);
  }
}
