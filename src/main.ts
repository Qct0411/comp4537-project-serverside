import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors(); // Enable CORS for all routes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  ); // Enable global pipes for all routes
  await app.listen(8000);
}
bootstrap();
