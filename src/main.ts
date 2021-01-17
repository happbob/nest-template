import { ValidationPipe } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  Sentry.init({
    dsn:'https://edad56d57fd645b595e00168e6febca1@o504759.ingest.sentry.io/5592048',
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    // 이상한거 방지
    forbidNonWhitelisted:true,
    // controller에서 우리가 원하는 실제 데이터 타입으로 변환
    transform:true
  }));
  const port=3000;
  await app.listen(port);
  console.log(`Application is running on : localhost:${port}`);
  

  // const app = await NestFactory.create<NestFastifyApplication>(
  //   AppModule,
  //   new FastifyAdapter({logger:false})
  //   );
  // Sentry.init({
  //   dsn:'https://edad56d57fd645b595e00168e6febca1@o504759.ingest.sentry.io/5592048',
  // });
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist:true,
  //   // 이상한거 방지
  //   forbidNonWhitelisted:true,
  //   // controller에서 우리가 원하는 실제 데이터 타입으로 변환
  //   transform:true
  // }));
  // await app.listen(3000);
  
}
bootstrap();
