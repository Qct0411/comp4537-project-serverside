import { Injectable } from '@nestjs/common';
import { GenerateStoryDto } from './dto/generateStory.dto';
import { HttpService } from '@nestjs/axios';
import { first, firstValueFrom, lastValueFrom, map } from 'rxjs';

@Injectable()
export class AiPromptService {
  constructor(private readonly httpService: HttpService) {}
  async getPrompt(data: GenerateStoryDto) {
    const axiousConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJSUzI1NiIsImtpZCI6IjJDRDdCMUEwQTlBRTE1Q0VBRDBFNDJGNTFDQUU1Mzk5RjRBRTY5MjAiLCJ0eXAiOiJKV1QifQ.eyJjYW5SZWZyZXNoIjoiRmFsc2UiLCJ3b3Jrc3BhY2VJZCI6ImIxNmU5OGE2LTQ3Y2EtNDJiZS04MzJlLTM3ZTAzZDJlNjFkYiIsInRpZCI6IjgzMjJjZWZkLTBhNGMtNGUyYy1iZGU1LWIxNzkzM2U3YjAwZiIsIm9pZCI6ImExODQxMGIxLTI5MmQtNDE4MC04MDYzLTZjYjgxMTA4NjMzZCIsImFjdGlvbnMiOiJbXCJNaWNyb3NvZnQuTWFjaGluZUxlYXJuaW5nU2VydmljZXMvd29ya3NwYWNlcy9vbmxpbmVFbmRwb2ludHMvc2NvcmUvYWN0aW9uXCJdIiwiZW5kcG9pbnROYW1lIjoidGVybS1wcm9qZWN0LXdpamRkIiwic2VydmljZUlkIjoidGVybS1wcm9qZWN0LXdpamRkIiwiZXhwIjoxNzEyMDMxNjI4LCJpc3MiOiJhenVyZW1sIiwiYXVkIjoiYXp1cmVtbCJ9.b3_4BFDsiQBoR5saztEfSJswqC5esbIpNcTCx0IEX7BaAapO4ypHZ00-caYBwdAGV8PwbbSsYwR9h5MHfchiZS7hyKqKJUlorl1Imi9S_pw_1Xv0BOMEvQ2kJqNdRzmEiVxE-JtplHivsSoAF92ay5qw25338bq8WAq55tr_l9xWhBJhXB82aiVw3KENFQBYrZja309zAk-mUvPCIt2dFxNBznjEowpcwMz3gawlDpV13E7pvpzZwWPSt7MMr3w1hEFxFxNV01ZIeyEoj4KmHZWAmMcUbOuRLaqUd8H6txVJLNgDnobVabTFNlGNnH6IfRIyWkAB1ez5jYCqr8NpEw',
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
