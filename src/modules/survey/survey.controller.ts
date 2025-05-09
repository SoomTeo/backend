import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { ProfileDto } from './dto/profile.dto';
import { SubmitSurveyDto } from './dto/submit.dto';
import { JwtAuthGuard } from '@src/modules/auth/jwt-auth.guard';

@Controller('survey')
@UseGuards(JwtAuthGuard)
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post('profile')
  async saveProfile(@Req() req, @Body() dto: ProfileDto) {
    return this.surveyService.saveProfile(req.user.userId, dto.age, dto.gender);
  }

  @Get('questions')
  async getQuestions() {
    return this.surveyService.getQuestions();
  }

  @Post('submit')
  async submitAnswers(@Req() req, @Body() dto: SubmitSurveyDto) {
    return this.surveyService.submitAnswers(req.user.userId, dto);
  }
}
