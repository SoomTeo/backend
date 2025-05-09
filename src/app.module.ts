import { Module } from '@nestjs/common';
import { AuthModule } from '@src/modules/auth/auth.module';
import { UserModule } from '@src/modules/user/user.module';
import { SurveyModule } from '@src/modules/survey/survey.module';

@Module({
  imports: [AuthModule, UserModule, SurveyModule],
})
export class AppModule {}
