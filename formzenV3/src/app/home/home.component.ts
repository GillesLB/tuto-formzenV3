import { Component, OnInit, Inject } from '@angular/core';

import { ProductService } from 'src/app/service/product.service';
import { CustomerService } from 'src/app/service/customer.service';
import { Product } from 'src/app/modele/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    // injection du message d"accueil
    @Inject('welcomeMsg') public title: string
  ) { this.products = productService.getProduct(); }

  updatePrice(event) {
    this.productService.decreaseStock(event);
    this.customerService.addProduct(event);
  }

  isAvaible(product) {
    return this.productService.isAvaible(product);
  }

  getTotal() {
    return this.customerService.getTotal();
  }

}
