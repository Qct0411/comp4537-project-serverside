import { IsString } from 'class-validator';

export class GenerateStoryDto {
  @IsString()
  inputs: string;
}
