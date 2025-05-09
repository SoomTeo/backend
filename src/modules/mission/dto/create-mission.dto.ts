import { IsString, IsOptional } from 'class-validator';

export class CreateMissionDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  type: string;

  @IsString()
  verificationType: string;

  @IsOptional()
  verificationData?: any;
}
