export interface Wish {
  title: string;
  place: number;
  priceAmount: number;
  priceCurrency: string;
}

export function createWish(overrides?: Partial<Wish>): Wish {
  return {
    title: 'Christmas tree',
    place: 1,
    priceAmount: 25.99,
    priceCurrency: 'Euro',
    ...overrides
  }
}
