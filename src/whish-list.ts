import { Currency, exchangeRateToEuro } from './models/currency';
import { Price } from './models/price';
import { Product } from './models/product';

export class WhishList {
  private list: Product[] = [];

  constructor(public readonly title: string) {}

  get totalPrice() {
    return this.list.reduce(
      (acc, product) =>
        acc + product.price.amount * exchangeRateToEuro[product.price.currency],
      0
    );
  }

  public setWish(place: number, product: Product) {
    const newIndex = place - 1; // offset 1
    if (this.list.length >= place) {
      this.list = [
        ...this.list.slice(0, newIndex),
        product,
        ...this.list.slice(newIndex),
      ];
    } else {
      this.list.push(product);
    }
  }

  get whishes() {
    return [...this.list];
  }

  printList() {
    console.log(`My ${this.title} whishes`);
    for (let i = 0; i < this.list.length; i++) {
      const product = this.list[i];
      console.log(
        ` ${i + 1}. ${product.display()}`
      );
    }
    console.log(`Total: €${this.totalPrice.toFixed(2)}`);
  }

  static formatPrice(price: Price): string {
    const amount = price.amount.toFixed(2);
    switch (price.currency) {
      case 'Dollar':
        return `$${amount}`;
      case 'Euro':
        return `€${amount}`;
    }
  }
}
