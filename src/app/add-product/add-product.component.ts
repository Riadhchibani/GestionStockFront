import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  addProduct(code: string, reference: string, Nomdeproduit: string, shortLabel: string, expirationDate: string, creationDate: string, unitPrice: string, quantity: string, category: string, description: string) {

  }

  ngOnInit(): void {
  }

}
