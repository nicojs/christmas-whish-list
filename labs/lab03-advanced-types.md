# Lab 3: Advanced types

_🎄 Christmas edition_

In this lab, you will make the whish list support multiple currencies (both dollars and euros).

## Exercise 1: Add `Currency`

1. Add a `Currency` union type. We support 2 values `'Euro'` and `'Dollar'`.
1. Create a `Price` interface:

   ```ts
   export interface Price {
     amount: number;
     currency: Currency;
   }
   ```

1. Change the `Product` class, so it supports prices in this format (change the type of `price` from `number` to the new `Price`).
1. Fix all compiler errors. Be sure to print the correct currency sign: `€` and `$` for `'Euro'` and `'Dollar' respectively.

## Exercise 2: Play around with other advanced concepts

Play around with other advanced concepts. Some creative idea's:

1. Create a custom type guard for `Price`.

   ```ts
   function isPrice(maybePrice: unknown) /* TODO: return type*/ {
     // TODO
   }

   function displayPrice(maybePrice: unknown) {
     if (isPrice(maybePrice)) {
       WhishList.formatPrice(maybePrice);
     }
   }
   ```

1. Rewrite previous exercise with an assertion function instead of a type guard.
1. Test out some type queries (using `typeof` in typescript).

