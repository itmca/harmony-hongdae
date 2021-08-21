import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port); // listen - 모니터링해서 받아오기
  console.log(`This server is listen to port ${port}`); // localhost를 부르는 port가 몇번인지 빠르게 알기 위한 용도

}
bootstrap();
