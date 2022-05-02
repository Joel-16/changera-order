import { BaseEntity } from "typeorm";
export declare class Order extends BaseEntity {
    id: number;
    email: string;
    item: any;
    createdAt: Date;
    updatedAt: Date;
    addDate(): void;
    upDate(): void;
}
