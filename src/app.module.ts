import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './libs/database.module';
import { AiPromptController } from './ai_prompt/ai_prompt.controller';
import { AiPromptService } from './ai_prompt/ai_prompt.service';
import { AiPromptModule } from './ai_prompt/ai_prompt.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule available globally
    }), // Import ConfigModule
    DatabaseModule,
    UserModule,
    AiPromptModule,
    AuthModule,
    JwtModule,
    HttpModule,
  ],
  controllers: [AppController, AiPromptController],
  providers: [AppService, AiPromptService, AuthService],
})
export class AppModule {}
