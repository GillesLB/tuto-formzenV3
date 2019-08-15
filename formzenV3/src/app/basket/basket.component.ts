import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modele/product';
import { CustomerService } from 'src/app/service/customer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/modele/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Product[] = [];

  customerForm: FormGroup;

  constructor(
    private customerService: CustomerService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.basket = this.customerService.products;
    this.customerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      creditCard: new FormControl('', Validators.required),
    });
  }


  checkout() {
    // alert('Commande validée !');
    const name = this.customerForm.get('name').value;
    const address = this.customerForm.get('address').value;
    const creditCard = this.customerForm.get('creditCard').value;
    const customerForm = new Customer(name, address, creditCard);
    console.log('cf : ', customerForm);
    this.router.navigate(['/home']);
  }

}
