import { Module } from '@nestjs/common';
import { AuthModule } from '@src/modules/auth/auth.module';
import { UserModule } from '@src/modules/user/user.module';
import { SurveyModule } from '@src/modules/survey/survey.module';
import { MissionModule } from '@src/modules/mission/mission.module';

@Module({
  imports: [AuthModule, UserModule, SurveyModule, MissionModule],
})
export class AppModule {}
