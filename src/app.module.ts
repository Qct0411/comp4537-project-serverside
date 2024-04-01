import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './libs/database.module';
import { AiPromptController } from './ai_prompt/ai_prompt.controller';
import { AiPromptService } from './ai_prompt/ai_prompt.service';
import { AiPromptModule } from './ai_prompt/ai_prompt.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule available globally
    }), // Import ConfigModule
    DatabaseModule,
    UserModule,
    AiPromptModule,
  ],
  controllers: [AppController, AiPromptController],
  providers: [AppService, AiPromptService],
})
export class AppModule {}
