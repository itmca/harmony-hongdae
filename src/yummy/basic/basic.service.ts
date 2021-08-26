import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Yum } from 'src/entities/yum.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BasicService {
    constructor(
        @InjectRepository(Yum)
        private yummyRepository: Repository<Yum>,
      ) {}

    
    findAll(): Promise<Yum[]> {
        return this.yummyRepository.find();
    }

    // 디저트
    findDessert(): Promise<Yum[]> {
        return this.yummyRepository.find({
            where: {
                category: "디저트"
            }
        });
    }

    // 양식
    findWest(): Promise<Yum[]> {
        return this.yummyRepository.find({
            where: {
                category: "양식"
            }
        });
    }

    // 동남아
    findSouthEastAsia(): Promise<Yum[]> {
        return this.yummyRepository.find({
            where: {
                category: "동남아"
            }
        });
    }

    // 일식
    findJapanese(): Promise<Yum[]> {
        return this.yummyRepository.find({
            where: {
                category: "일식"
            }
        });
    }


    //멕시칸
    findMaxican(): Promise<Yum[]> {
        return this.yummyRepository.find({
            where: {
                category: "멕시칸"
            }
        });
    }

    // 디저트
    findChinese(): Promise<Yum[]> {
        return this.yummyRepository.find({
            where: {
                category: "중식"
            }
        });
    }

}
