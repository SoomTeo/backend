import { Module } from '@nestjs/common';
import { MissionController } from './mission.controller';
import { MissionService } from './mission.service';
import { PrismaService } from '@src/shared/prisma/prisma.service';
import { PointsService } from './services/points.service';

@Module({
  controllers: [MissionController],
  providers: [MissionService, PrismaService, PointsService],
  exports: [MissionService],
})
export class MissionModule {}
