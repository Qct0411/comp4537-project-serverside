import { Injectable } from '@nestjs/common';
import { GenerateStoryDto } from './dto/generateStory.dto';
import { HttpService } from '@nestjs/axios';
import { first, firstValueFrom, lastValueFrom, map } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AiPromptService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async getPrompt(data: GenerateStoryDto) {
    const axiousConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer ' + this.configService.get<string>('AZURE_ML_API_KEY'),
        'azureml-model-deployment': 'pranavpsv-gpt2-genre-story-ge-3',
      },
    };
    const response = await lastValueFrom(
      this.httpService
        .post(
          'https://term-project-wijdd.eastus2.inference.ml.azure.com/score',
          data,
          axiousConfig,
        )
        .pipe(
          map((response) => {
            return response.data;
          }),
        ),
    );
    return response;
  }
}
