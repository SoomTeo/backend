import {
  IsOptional,
  IsArray,
  ValidateNested,
  IsNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

class GpsPoint {
  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;
}

export class CompleteMissionDto {
  @IsOptional() // RECEIPT: 이미지 파일
  receiptImage?: any;

  @IsOptional() // GPS: 위치/시간 정보
  startTime?: string;
  endTime?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GpsPoint)
  path?: GpsPoint[];

  @IsOptional() // VOICE: 음성 인식 관련
  @IsString()
  targetText?: string;

  @IsOptional()
  @IsString()
  recognizedText?: string;

  @IsOptional() // DIARY: 일기 텍스트
  diaryText?: string;
}
