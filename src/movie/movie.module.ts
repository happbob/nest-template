import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import {RavenModule,RavenInterceptor} from 'nest-raven';
import {APP_INTERCEPTOR} from '@nestjs/core';
@Module({
    controllers:[MovieController],
    providers:[MovieService,
        {
            provide:APP_INTERCEPTOR,
            useValue: new RavenInterceptor()
          }
        ]
})
export class MovieModule {}
