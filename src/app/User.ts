import { Bill } from "./Bill";

export interface User {

    idUser: number,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    phoneNumber: number,
    birthDate:string,
    bill:Bill[]
}