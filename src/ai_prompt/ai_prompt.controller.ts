import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AiPromptService } from './ai_prompt.service';
import { GenerateStoryDto } from './dto/generateStory.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RequestWithUser } from 'src/auth/interface/requestWithUser.interface';
import { UserService } from 'src/user/user.service';

@Controller('ai-prompt')
export class AiPromptController {
  constructor(
    private readonly aiPromptService: AiPromptService,
    private readonly userService: UserService,
  ) {}

  @Post('story')
  @UseGuards(JwtAuthGuard)
  async generateStory(
    @Req() req: RequestWithUser,
    @Body() prompt: GenerateStoryDto,
  ) {
    const user = req.user;
    await this.userService.updateUserApiCalls(user.id, user.api_calls + 1);
    return await this.aiPromptService.getPrompt(prompt);
  }
}
