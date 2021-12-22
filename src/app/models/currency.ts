export type Currency = 'Euro' | 'Dollar';

type ExchangeRate = {
  readonly [Cur in Currency]: number;
};

// Alternative: ExchangeRate = Readonly<Record<Currency, number>>;

export const exchangeRateToEuro: ExchangeRate = Object.freeze({
  Dollar: 0.88509614,
  Euro: 1,
});
