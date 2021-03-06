import { Injectable } from '@angular/core';

import { Product } from 'src/app/modele/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    // tslint:disable-next-line: max-line-length
    {title: 'Sweat homme', description: '<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME', photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png', price: 39, stock: 10},
    // tslint:disable-next-line: max-line-length
    {title: 'Tee-Shirt homme', description: 'TEE-SHIRT BIO À COL ROND - HOMME', photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png', price: 19, stock: 7},
    // tslint:disable-next-line: max-line-length
    {title: 'A Tee-Shirt femme', description: 'TEE-SHIRT BIO À COL ROND - FEMME', photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png', price: 22, stock: 3},
    // tslint:disable-next-line: max-line-length
    {title: 'Tote bag', description: '<C0D1NG_TH3_W0RLD>, TOTE BAG BIO.', photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png', price: 12.5, stock: 5}
  ];

  constructor() { }

  getProduct() {
    return this.products;
  }

  isTheLast(product) {
    if (product.stock === 1) {
      return true;
    }
  }

  isAvaible(product) {
    if (product.stock > 0) {
      return true;
    }
  }

  decreaseStock(product) {
    product.stock -= 1;
  }

}
