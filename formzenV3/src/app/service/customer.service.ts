import { Injectable } from '@angular/core';
import { Product } from 'src/app/modele/product';

import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  total = 0;

  products: Product[] = [];

  customerForm: FormGroup;

  constructor() { }

  addProduct(product) {
    this.products.push(product);
  }

  getTotal() {
    // La méthode reduce() applique une fonction qui est un « accumulateur »
    // et qui traite chaque valeur d'une liste (de la gauche vers la droite)
    // afin de la réduire à une seule valeur.
    // Ex :
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // array1.reduce(reducer);
    return this.products.reduce((previous, next) => previous + next.price, 0);
  }

}
