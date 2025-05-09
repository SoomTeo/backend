import { Module } from '@nestjs/common';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { PrismaModule } from '@src/shared/prisma/prisma.module';
import { MissionModule } from '@src/modules/mission/mission.module';
@Module({
  imports: [PrismaModule, MissionModule],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
