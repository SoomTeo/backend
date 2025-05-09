import { Module } from '@nestjs/common';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { PrismaModule } from '@src/shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
