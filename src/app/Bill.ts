import { Client } from "./Client";
import { Product } from "./Product";
import { User } from "./User";

export interface Bill {

    idBill: number;
    declarationDate: Date;
    produts: Product[];
    quantity:number;
    user: User;
    client: Client;
}