import { Module } from '@nestjs/common';
import { MissionController } from './mission.controller';
import { MissionService } from './mission.service';
import { PrismaModule } from '@src/shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MissionController],
  providers: [MissionService],
})
export class MissionModule {}
