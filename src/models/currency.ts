export type Currency = 'Euro' | 'Dollar';

type ExchangeRate = {
  readonly [Cur in Currency]: number;
};

// Alternative: ExchangeRate = Record<Currency, number>;

export const exchangeRateToEuro: ExchangeRate = Object.freeze({
  Dollar: 1.1237,
  Euro: 1,
});
