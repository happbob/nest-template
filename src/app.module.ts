import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { AppController } from './app.controller';
import {RavenModule,RavenInterceptor} from 'nest-raven';
import {APP_INTERCEPTOR} from '@nestjs/core';


@Module({
  imports: [
    MovieModule,
    RavenModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide:APP_INTERCEPTOR,
      useValue: new RavenInterceptor()
    }
  ],
})
export class AppModule {}
