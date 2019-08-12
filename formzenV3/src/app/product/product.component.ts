import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/modele/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() data: Product;

  @Output() addToBasket = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  addToBasketClick() {
    this.addToBasket.emit(this.data);
  }

}
