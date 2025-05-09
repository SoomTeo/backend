import { IsOptional } from 'class-validator';

export class CompleteMissionDto {
  @IsOptional()
  verificationData?: any;

  @IsOptional()
  feedback?: string;
}
