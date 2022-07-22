import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { Bill } from '../Bill';
import { UserService } from '../user.service';
import { Client } from '../Client';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  prodExper : any = "";

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  displayedColumns: string[] = ['code', 'reference', 'productName', 'shortLabel', 'expirationDate', 'productionDate', 'unitPrice', 'quantity', 'totalPrice', 'category', 'description', 'action'];

  productEx: Product[] = [
    { 'idProduct': 1, 'code': 2, 'reference': 'ref', 'productName': "productName", 'shortLabel': "shortLabel", 'expirationDate': "20/02/1999", 'productionDate': "20/02/1999", 'unitPrice': 225, 'quantity': 255, 'totalPrice': 552, 'category': 'category', 'description': 'sdqsd' }
  ]
  dataPurchase: any = [];
  constructor(private router: Router, public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findExprProducts().subscribe(
      data => {
        this.prodExper = data.length;
      }
    )
    this.userService.findProducts().subscribe(
      data => {
        this.dataPurchase = data;
      }
    )
  }
  goToAppProduct() {
    this.router.navigate(['manageProduct/addProduct']);  // define your component where you want to go
  }

  editProduct(element:any){
    localStorage.setItem("product", JSON.stringify(element));
    this.router.navigate(['manageProduct/addProduct']);
  }

  test() {
    console.log("test")
  }


  deleteProduct(element: any) {
    this.userService.deleteProduct(element).subscribe();
    window.location.reload();
  }

  addBill(element: any) {
    console.log("test")
    this.dialog.open(PopupMessage, {
      width: '500px',
      data: { element: element }
    });
  }

}



@Component({
  template: `
  <h2>Ajouter Facture</h2><br>
  <form>
      <div class="form-row">
          <div class="form-group">
              <label for="inputPassword4">Nom de Client</label>
              <input type="text" #clientName class="form-control" id="inputPassword4" placeholder="Nom de client">
          </div>
      </div>
      <div class="form-row">
          <div class="form-group">
          <label for="inputPassword4">tel</label>
          <input type="number" #tel class="form-control" id="inputPassword4" placeholder="tel">
          </div>
      </div>
      <div class="form-row">
          <div class="form-group">
              <label for="birthDate">Email</label>
              <input type="email" #clientMail class="form-control" id="inputAddress2">
          </div>
      </div>
      <div class="form-row">
          <div class="form-group">
              <label for="birthDate">quantity</label>
              <input type="number" #quantity class="form-control" id="inputAddress2">
          </div>
      </div>
      <input type="button" (click)="addBill(clientName.value, tel.value, clientMail.value, quantity.value)" class="btn btn-primary" value="Ajouter Facture">
  </form>`
})
export class PopupMessage implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: Dialog, private userService: UserService) {}

  addBill(clientName: string, tel: string, clientMail: string, quantity: string) {
    const bill = {} as Bill;
    const client = {} as Client;
    client.fulNameClient = clientName;
    client.tel = +tel;
    client.email = clientMail;
    bill.client = client;
    bill.declarationDate = new Date();
    bill.quantity = +quantity;
    bill.produts = [this.data.element];
    bill.user = JSON.parse(localStorage.getItem("user") || "");
    this.userService.addBill(bill).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
    console.log(this.data.element);
    throw new Error('Method not implemented.');
  }
}

interface Dialog {
  element: any;
}