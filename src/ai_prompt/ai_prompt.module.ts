import { Module } from '@nestjs/common';
import { AiPromptController } from './ai_prompt.controller';
import { AiPromptService } from './ai_prompt.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AiPromptController],
  providers: [AiPromptService],
})
export class AiPromptModule {}
