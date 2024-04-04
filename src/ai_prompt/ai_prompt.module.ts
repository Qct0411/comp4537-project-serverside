import { Module } from '@nestjs/common';
import { AiPromptController } from './ai_prompt.controller';
import { AiPromptService } from './ai_prompt.service';
import { UserModule } from 'src/user/user.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, HttpModule, ConfigModule],
  controllers: [AiPromptController],
  providers: [AiPromptService],
})
export class AiPromptModule {}
