import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
const conn = process.env.CLOUDAMQP_URL || 'amqp://localhost:5672'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [conn],
      queue: 'order',
      queueOptions: {
        durable: false
      },
    }
  })
  await app.startAllMicroservices()
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
