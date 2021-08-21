import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BasicService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

        
    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }


    getGoodnight(): string{
        return 'Good night';
    }
}
