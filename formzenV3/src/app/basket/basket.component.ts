import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modele/product';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Product[] = [];

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit() {
    this.basket = this.customerService.products;
  }

}
