import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '@src/modules/auth/auth.service';
import { SignupDto } from '@src/modules/auth/dto/signup.dto';
import { LoginDto } from '@src/modules/auth/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
