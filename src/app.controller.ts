import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Order } from './entities/food.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create-order')
  async createOrder(data){
    let order = await this.appService.createOrder(data);
    return order
  }

  @EventPattern('get-all-orders')
  getAllOrders(data){
    let order = this.appService.getAllOrders(data);
  }

  @EventPattern('get-one-order')
  getOneOrder(data){
    return this.appService.getAllOrders(data);
  }

  @EventPattern('delete-order')
  deleteOrder(data){
    return this.appService.deleteOrder(data);
  }
}
