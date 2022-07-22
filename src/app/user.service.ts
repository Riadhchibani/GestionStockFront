import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bill } from './Bill';
import { Product } from './Product';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;
  optionsRegister = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apibaseUrl;
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/ManageUser/login`, { "username": username, "password": password }, this.optionsRegister);
  }

  public addProduct(product: Product): Observable<Product> {
    const body = JSON.stringify(product);
    return this.http.post<Product>(`${this.apiUrl}/manageProduct/addProduct`, body, this.optionsRegister);
  }

  public findProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/manageProduct/getAllProduct`, this.optionsRegister);
  }

  public addBill(bill: Bill): Observable<Bill> {
    const body = JSON.stringify(bill);
    console.log(body);
    return this.http.post<Bill>(`${this.apiUrl}/manageBill/addBill`, body, this.optionsRegister);
  }

  public deleteProduct(element: any): Observable<Bill> {
    return this.http.delete<Bill>(`${this.apiUrl}/manageProduct/deleteProduct/` + element.idProduct, this.optionsRegister);
  }

  public addUser(user: User): Observable<User> {
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post<User>(`${this.apiUrl}/ManageUser/addUser`, body, this.optionsRegister);
  }

  public findExprProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/manageProduct/findExpirationProducts`, this.optionsRegister);
  }
}
