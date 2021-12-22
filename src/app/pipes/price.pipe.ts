import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Currency, Price } from '../models';

const currencyCodes: Readonly<Record<Currency, string>> = Object.freeze({
  Dollar: 'USD',
  Euro: 'EUR',
});

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {}

  transform(value: Price): string | null {
    return this.currencyPipe.transform(
      value.amount,
      currencyCodes[value.currency]
    );
  }
}
