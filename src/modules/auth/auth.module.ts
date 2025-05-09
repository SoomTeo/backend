import { Module } from '@nestjs/common';
import { AuthService } from '@src/modules/auth/auth.service';
import { AuthController } from '@src/modules/auth/auth.controller';
import { UserModule } from '@src/modules/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@src/modules/auth/jwt.strategy';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
