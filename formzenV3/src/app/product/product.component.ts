import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/modele/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() data: Product;

  @Output() addToBasket = new EventEmitter<Product>();

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
  }

  addToBasketClick() {
    this.addToBasket.emit(this.data);
  }

  isTheLast() {
    return this.productService.isTheLast(this.data);
  }

}
