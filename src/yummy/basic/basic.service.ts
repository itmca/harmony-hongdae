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

    findDessert(): Promise<Yum[]> {
        return this.yummyRepository.find();
    }

    getGoodnight(): string{
        return 'Good night';
    }
}
