# Lab 1: Interfaces

_🎄 Christmas edition_

In this lab you will be creating and using some interfaces.

## Exercise 1: Create a `Supplier` interface

Create a `Supplier` interface. Has 3 fields:

1. `id` of type `number`.
1. `name` of type `string.
1. `website` of type `string`.

Make sure the website is optional.

This should compile:

```ts
const brio: Supplier = { id: 1, name: 'BRIO' };
const princess: Supplier = {
  id: 2,
  name: 'Princess',
  website: 'www.princess.com',
};
```

## Exercise 2: The `Product` interface

Create a `Product` interface. A product has an optional supplier, an `id` (number), `title` (`string`) and a `price` (`number`). It also has a `display` method that returns a string (without parameters). The display method should print the product like this "{title} from {supplier} (€{price})".

Now create a product with title "Christmas carols" and supplier "The King's Singers" of with a price of 11.49 and call the `display()` method, it should print "Christmas carols from The King's Singers (€24.99)".

```ts
const christmasCarols: Product = {
  // TODO
};
console.log(christmasCarols.display()); 
// Christmas carols from The King's Singers (€24.99)
```
