import { Currency } from './currency';

export interface Price {
  amount: number;
  currency: Currency;
}

const defaultPrice: Price = { amount: 0, currency: 'Euro' };
export function createPrice(overrides?: Partial<Price>): Price {
  return {
      ...defaultPrice,
      ...overrides,
  };
}
