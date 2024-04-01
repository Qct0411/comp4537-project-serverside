import { Test, TestingModule } from '@nestjs/testing';
import { AiPromptService } from './ai_prompt.service';

describe('AiPromptService', () => {
  let service: AiPromptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiPromptService],
    }).compile();

    service = module.get<AiPromptService>(AiPromptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
