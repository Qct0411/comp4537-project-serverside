import { IsString } from 'class-validator';

export class GenerateStoryDto {
  @IsString()
  prompt: string;
}
