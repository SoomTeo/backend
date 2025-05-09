import { IsEnum } from 'class-validator';
import { MissionType } from '@prisma/client';

export class CreateMissionByTypeDto {
  @IsEnum(MissionType)
  type: MissionType;
}
