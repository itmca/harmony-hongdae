import { Controller, Get } from '@nestjs/common';
import { BasicService } from './basic.service';

@Controller('basic')
export class BasicController {
    constructor(private readonly basicService: BasicService){}; // constructor 작동방법 알아보기

    @Get('/')
    getAllList(){
        // return 'hello?';
        return this.basicService.findAll();
    }

    @Get('dessert')
    findDessert(){
        return this.basicService.findDessert();
    }

    @Get('west')
    findWest(){
        return this.basicService.findWest();
    }

    @Get('southEastAsia')
    findSouthEastAsia(){
        return this.basicService.findSouthEastAsia();
    }

    @Get('japanese')
    findJapanese(){
        return this.basicService.findJapanese();
    }

    @Get('maxican')
    findMaxican(){
        return this.basicService.findMaxican();
    }

    @Get('chinese')
    findChinese(){
        return this.basicService.findChinese();
    }

}

