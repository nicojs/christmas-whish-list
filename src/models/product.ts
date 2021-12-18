import { WhishList } from '../whish-list';
import { Price } from './price';
import { Supplier } from './supplier';

export class Product {
  constructor(
    public title: string,
    public price: Price,
    public supplier?: Supplier
  ) {}
  
  display(): string {
    return `${this.title}${
      this.supplier ? ` from ${this.supplier.name}` : ''
    } (${WhishList.formatPrice(this.price)})`;
  }
}
