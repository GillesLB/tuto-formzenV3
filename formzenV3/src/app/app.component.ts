import { Component, Inject } from '@angular/core';
import { Product } from 'src/app/modele/product';
import { ProductService } from 'src/app/service/product.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

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
