import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
const conn = process.env.CLOUDAMQP_URL || 'amqp://localhost:5672'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [conn],
      queue: 'food',
      queueOptions: {
        durable: false
      },
    }
  });
  await app.listen();
}
bootstrap();
