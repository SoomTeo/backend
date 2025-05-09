import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { MissionService } from './mission.service';
import { CreateMissionByTypeDto } from './dto/create-mission-by-type.dto';
import { JwtAuthGuard } from '@src/modules/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { CompleteMissionDto } from './dto/complete-mission.dto';

@Controller('mission')
@UseGuards(JwtAuthGuard)
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Get()
  async getAllMissions(@Req() req) {
    return this.missionService.getAllMissions(req.user.userId);
  }

  @Get(':id')
  async getMissionById(@Req() req, @Param('id') id: number) {
    return this.missionService.getMissionById(req.user.userId, Number(id));
  }

  @Post()
  async createMissionByType(@Req() req, @Body() dto: CreateMissionByTypeDto) {
    return this.missionService.createMissionByType(req.user.userId, dto);
  }

  @Delete(':id')
  async deleteMission(@Req() req, @Param('id') id: number) {
    return this.missionService.deleteMission(req.user.userId, Number(id));
  }

  @Post(':id/complete')
  @UseInterceptors(FileInterceptor('receiptImage')) // RECEIPT 타입일 때만
  async completeMission(
    @Req() req,
    @Param('id') id: number,
    @Body() dto: CompleteMissionDto,
    @UploadedFile() file?: Express.Multer.File
  ) {
    return this.missionService.completeMission(
      req.user.userId,
      Number(id),
      dto,
      file
    );
  }
}
