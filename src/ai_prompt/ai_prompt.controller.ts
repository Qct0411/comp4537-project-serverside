import { Body, Controller, Post } from '@nestjs/common';
import { AiPromptService } from './ai_prompt.service';
import { GenerateStoryDto } from './dto/generateStory.dto';

@Controller('ai-prompt')
export class AiPromptController {
  constructor(private readonly aiPromptService: AiPromptService) {}

  @Post('story')
  async generateStory(@Body() prompt: GenerateStoryDto) {
    return await this.aiPromptService.getPrompt(prompt);
  }
}
