import { Controller, Get } from '@nestjs/common';
import { BasicService } from './basic.service';

@Controller('basic')
export class BasicController {
    constructor(private readonly basicService: BasicService){}; // constructor 작동방법 알아보기

    @Get('/')
    getAllList(){
        return 'hello?';
        // return this.basicService.findAll();
    }

    @Get('main2/') // localhost:port/basic/main
    goodnight2(){
        return this.basicService.findAll();
        // return 'This is main2 !';
    }


    @Get('main/') // localhost:port/basic/main
    goodnight(){
        return this.basicService.getGoodnight();
    }

}
