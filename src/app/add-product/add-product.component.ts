import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  prodExper : any = "";
  constructor(private router: Router, private userService: UserService) { }

  addProduct(code: string, reference: string, Nomdeproduit: string, shortLabel: string, expirationDate: string, creationDate: string, unitPrice: string, quantity: string, category: string, description: string) {
    const product = {} as Product;
    product.code = +code;
    product.reference = reference;
    product.productName = Nomdeproduit;
    product.shortLabel = shortLabel;
    product.expirationDate = expirationDate;
    product.productionDate = creationDate;
    product.unitPrice = +unitPrice;
    product.quantity = +quantity;
    product.category = category;
    product.description = description;
    let varia = null;
    if (localStorage.getItem("product") || "") {
      varia = JSON.parse(localStorage.getItem("product") || "");
    }
    console.log("1 =>", varia);
    if (varia != null && varia.idProduct != "") {
      console.log("2 =>", varia);
      product.idProduct = varia.idProduct;
      localStorage.removeItem('product');
      product.code == 0 ? product.code = varia.idProduct : +code;
      product.reference == "" ? product.reference = varia.reference : reference;
      product.productName == "" ? product.productName = varia.productName : Nomdeproduit;
      product.shortLabel == "" ? product.shortLabel = varia.shortLabel : shortLabel;
      product.expirationDate == "" ? product.expirationDate = varia.expirationDate : expirationDate;
      product.productionDate == "" ? product.productionDate = varia.productionDate : creationDate;
      product.unitPrice == 0 ? product.unitPrice = varia.unitPrice : unitPrice;
      product.quantity == 0 ? product.quantity = varia.quantity : quantity;
      product.category == "" ? product.category = varia.category : category;
      product.description == "" ? product.description = varia.description : description;
    }
    this.userService.addProduct(product).subscribe(
      data => {
        console.log(data);
      }
    )

  }
  goToAppProduct() {
    this.router.navigate(['manageProduct/addProduct']);
  }
  ngOnInit(): void {
    this.userService.findExprProducts().subscribe(
      data => {
        this.prodExper = data.length;
      }
    )
  }

}
