import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
const port = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Logger.log(`start in ${port}`);
  await app.listen(port);
}
bootstrap();
