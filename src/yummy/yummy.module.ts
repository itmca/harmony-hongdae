import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Yum } from 'src/entities/yum.entity';
import { BasicController } from './basic/basic.controller';
import { BasicService } from './basic/basic.service';

@Module({
  imports: [TypeOrmModule.forFeature([Yum])],
  controllers: [BasicController],
  providers: [BasicService]
})
export class YummyModule {}
