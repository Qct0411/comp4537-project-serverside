import { Test, TestingModule } from '@nestjs/testing';
import { AiPromptController } from './ai_prompt.controller';

describe('AiPromptController', () => {
  let controller: AiPromptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiPromptController],
    }).compile();

    controller = module.get<AiPromptController>(AiPromptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
