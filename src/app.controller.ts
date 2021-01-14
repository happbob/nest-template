import { Controller, Get } from '@nestjs/common';

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
