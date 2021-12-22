import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models';

@Pipe({
  name: 'displayProduct'
})
export class DisplayProductPipe implements PipeTransform {

  transform(value: Product): string {
    return value.display();
  }

}
