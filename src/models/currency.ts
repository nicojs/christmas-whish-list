export type Currency = 'Euro' | 'Dollar';

export const exchangeRateToEuro: Record<Currency, number> = {
  ['Dollar']: 1.1237,
  ['Euro']: 1,
};
