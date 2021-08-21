import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; //Ctrl + .
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { YummyModule } from './yummy/yummy.module';

// 내공(e.g. 단축키😎) + 외공 = 고수

@Module({
  imports: [
    YummyModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'harmony-hongdae.c4t3ttnhumm9.ap-northeast-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: '7cBNTUpvuEEe',
      database: 'HONGDAE', // 접속하고 싶은 DB 이름
      entities: [User], 
      synchronize: true, // Django의 migration과 같은 개념이다.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
