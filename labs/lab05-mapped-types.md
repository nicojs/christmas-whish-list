# Lab 5: Mapped types

_🎄 Christmas edition_

In this lab, we'll be using a mapped type to keep exchange rates.

## Exercise 1: Exchange rates.

The `totalPrice` property is no longer calculating the total price correctly, since it is simply adding dollars and euros together without taking exchange rates into account. Let's fix that now.

1. Create a constant called `exchangeRateToEuro`. Keys in this objects should be of type `Currency`, while the values should be of type `number`. You can use a mapped type for this.

   ```ts
   type ExchangeRate = // TODO;

   export const exchangeRateToEuro: ExchangeRate = {
     Dollar: 1.1237,
     Euro: 1,
   };
   ```

1. If you did it correctly, these all should error:

   ```ts
   const missingEuro: ExchangeRate = {
     Dollar: 1.1237,
     // 💥
   };

   const excessCurrencies: ExchangeRate = {
     Dollar: 1.1237,
     Euro: 1,
     Gulden: 2.2, //  💥
   };
   ```

   Also adding back the `'Yuan'` in the `Currency` union type should cause an error if you don't also expand the `exchangeRateToEuro` value.

1. Make the object readonly. This should cause an error: `exchangeRateToEuro.Euro = 10;`

1. Use this `exchangeRateToEuro` variable in the `totalPrice` property to always calculate the total price in the `'Euro'` currency.

## ...if time permits

Create the `createPrice` and `createSupplier` factory methods. These are functions that create a `Price` and `Supplier` respectively. You can supply some (or all, or none) of the properties. Any properties you don't provide should be filled in with default values.

_Hint: you should be able to use the `Partial` mapped type here._

Use this as a start:

```ts
const defaultPrice: Price = { amount: 0, currency: 'Euro' };
const defaultSupplier: Supplier = { id: -1, name: 'Unknown' };

export function createPrice(/* TODO */): Price {
  // TODO
}
export function createSupplier(/* TODO */): Supplier {
  // TODO
}
```

These should all work:

```ts
createPrice(); // Result: { amount: 0, currency: 'Euro' },
createSupplier(); // Result: { id: -1, name: 'Unknown' },
createPrice({ amount: 20 }); // Result: { amount: 20, currency: 'Euro' },
createPrice({ currency: 'Dollar' }); // Result: { amount: 0, currency: 'Dollar' },
createSupplier({ id: 1, name: 'Priceless' }); // Result: { id: 1, name: 'Priceless' },
```

...while these should all result in a compile errors:

```ts
createPrice({ amount: 20, currency: 'Gulden' }); // 💥 currency "Gulden" does not exist
createSupplier({ sku: 1 }); // 💥 the "sku" property isn't a known property
```
