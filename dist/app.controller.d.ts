import { AppService } from './app.service';
import { Order } from './entities/food.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createOrder(data: any): Promise<{
        email: any;
        item: any;
    } & Order>;
    getAllOrders(data: any): void;
    getOneOrder(data: any): Promise<Order[]>;
    deleteOrder(data: any): Promise<import("typeorm").DeleteResult>;
}
