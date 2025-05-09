import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from '@src/modules/auth/dto/signup.dto';
import { LoginDto } from '@src/modules/auth/dto/login.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from '@src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signup(signupDto: SignupDto) {
    const { email, nickname, password } = signupDto;
    const exist = await this.userService.findByEmail(email);
    if (exist) {
      throw new UnauthorizedException('이미 가입된 이메일입니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userService.createUser(
      email,
      nickname,
      hashedPassword
    );
    return {
      message: '회원가입 성공',
      email: user.email,
      nickname: user.nickname,
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userService.findByEmail(email);
    if (!user)
      throw new UnauthorizedException(
        '이메일 또는 비밀번호가 올바르지 않습니다.'
      );
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      throw new UnauthorizedException(
        '이메일 또는 비밀번호가 올바르지 않습니다.'
      );
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
