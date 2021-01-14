import { Controller, Get, Req, Res,UseInterceptors } from '@nestjs/common';
import { SentryInterceptor } from '../config/sentry.interceptor';
@UseInterceptors(SentryInterceptor)
@Controller('')
export class AppController {
    @Get()
    home(){
        
        return 'Welcome!!';
    }

    
    @Get('/error')
    getError():void{
        // sentry로 에러 반환해줌
        throw new Error('Hi Sentry!');
    }
}
