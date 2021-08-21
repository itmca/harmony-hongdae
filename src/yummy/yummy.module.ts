import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { BasicController } from './basic/basic.controller';
import { BasicService } from './basic/basic.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [BasicController],
  providers: [BasicService]
})
export class YummyModule {}
