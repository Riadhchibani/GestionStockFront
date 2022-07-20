import { Product } from "./Product";
import { User } from "./User";

export interface Bill {

    idBill: number;

    declarationDate: string;

    produts: Product[];

    user: User;
}