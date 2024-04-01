import { Injectable } from '@nestjs/common';
import { GenerateStoryDto } from './dto/generateStory.dto';

@Injectable()
export class AiPromptService {
  async getPrompt(data: GenerateStoryDto) {
    return `This is a story generated from the prompt: ${data.prompt}`;
  }
}
