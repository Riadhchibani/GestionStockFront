import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  displayedColumns: string[] = ['code', 'reference', 'productName', 'shortLabel', 'expirationDate', 'productionDate', 'unitPrice', 'quantity', 'totalPrice', 'category', 'description', 'action'];

  productEx: Product[] = [
    { 'idProduct': 1, 'code': 2, 'reference': 'ref', 'productName': "productName", 'shortLabel': "shortLabel", 'expirationDate': "20/02/1999", 'productionDate': "20/02/1999", 'unitPrice': 225, 'quantity': 255, 'totalPrice': 552, 'category': 'category', 'description': 'sdqsd' }
  ]
  dataPurchase: any = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dataPurchase = this.productEx;
  }
  goToAppProduct() {
    this.router.navigate(['manageProduct/addProduct']);  // define your component where you want to go
  }

  test() {
    console.log("test")
  }

}
