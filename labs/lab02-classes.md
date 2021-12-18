# Lab 2: Classes

_🎄 Christmas edition_

In this lab you will be creating and using some classes.

## Exercise 1: The `Product` class

Let's change `Product` from a `interface` to be a proper class. The `display` function should now be a proper method of the class.

Be sure the `title`, `price` and an optional `supplier` can be provided in the constructor.

Change the code for the `christmasCarols` from previous lab. It should now be an instance of the new class.

```ts
const christmasCarols = new Product('Christmas carols CD', 24.99);
```

## Exercise 2: The `WhishList` class

Create and implement the `WishList` class. This class is responsible for keeping track of our whish list. Use this skeleton class:

```ts
export class WhishList {
  private list: Product[];
  public readonly title: string;

  constructor(title: string) {
    // TODO
  }

  get totalPrice() {
    // TODO: calculate total price
  }

  public setWish(place: number, product: Product) {
    // TODO
    // Set the wish in the correct place in the list.
    // Note: the `place` is 1-based, while the index in the array is 0-based
    // Note: if the place is already taken by another product, this product should take its place and bump the list.
  }

  get products() {
    // TODO: return a _copy_ of this.list
  }

  printList() {
    // TODO, print the whish list.
    // Example:
    // My {title} whishes
    //  1. {product1 title} €{price}
    //  2. {product2 title} €{price}
    // Total: €{total price}
  }

  static formatPrice(price: number): string {
    // TODO: return `€12.34`
    // Use 2 digits after the after the decimal point.
  }
}
```

After you're done implementing, this should work:

```ts
const christmasList = new WhishList('Christmas 🎅');
const brio: Supplier = { id: 1, name: 'BRIO' };

christmasList.setWish(1, new Product('Toy train', 35.58, brio));

// Changed my mind, want these first!
christmasList.setWish(1, new Product('Yellow power ranger', 9.99));
christmasList.setWish(2, new Product('Christmas carols CD', 24.99));

christmasList.printList();
```

It should print:

```
My Christmas 🎅 whishes
 1. Yellow power ranger (€9.99)
 2. Christmas carols CD (€24.99)
 3. Toy train from BRIO (€35.58)
Total: €70.56
```

_Note: the static `formatPrice` can now be used from the `Product` class to display the price_
