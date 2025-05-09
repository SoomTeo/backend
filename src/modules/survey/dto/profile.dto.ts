import { IsInt, IsString, Min, Max } from 'class-validator';

export class ProfileDto {
  @IsInt()
  @Min(10)
  @Max(120)
  age: number;

  @IsString()
  gender: string;
}
