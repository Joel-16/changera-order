import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/food.entity';


@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Order)
      private readonly order: Repository<Order>,
  ){}

  async createOrder(data) {
    let order = await this.order.save({
      email : data.email,
      item : data.item
    })
    return order
  }

  async getAllOrders(email) {
    return await this.order.find({where : {email}})
  }

 async getOneOrder(id:number) {
   return await this.order.findOne({where : {id}})
 }

 async deleteOrder(id:number) {
  return await this.order.delete({id})
}
}
