import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    // 이상한거 방지
    forbidNonWhitelisted:true,
    // 우리가 원하는 실제 데이터 타입으로 변환
    transform:true
  }));
  await app.listen(3000);
}
bootstrap();
