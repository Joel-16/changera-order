import { Repository } from 'typeorm';
import { Order } from './entities/food.entity';
export declare class AppService {
    private readonly order;
    constructor(order: Repository<Order>);
    createOrder(data: any): Promise<{
        email: any;
        item: any;
    } & Order>;
    getAllOrders(email: any): Promise<Order[]>;
    getOneOrder(id: number): Promise<Order>;
    deleteOrder(id: number): Promise<import("typeorm").DeleteResult>;
}
