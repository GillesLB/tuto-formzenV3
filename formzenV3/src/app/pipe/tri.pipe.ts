import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/modele/product';

@Pipe({
  name: 'tri'
})
export class TriPipe implements PipeTransform {

  // tri du tableau, selon la colonne 'titre'
  transform(value: Product[], column: keyof Product = 'title'): Product[] {
    return [...value].sort((p1, p2) => {
      if (p1[column] > p2[column]) {
        return 1;
      }
      if (p1[column] < p2[column]) {
        return -1;
      }
      return 0;
    });
  }

}
