import { Module } from '@nestjs/common';
import { AiPromptController } from './ai_prompt.controller';
import { AiPromptService } from './ai_prompt.service';

@Module({
  imports: [],
  controllers: [AiPromptController],
  providers: [AiPromptService],
})
export class AiPromptModule {}
