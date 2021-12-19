import { WishList } from '../wish-list';
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
    } (${WishList.formatPrice(this.price)})`;
  }
}
