# Lab 3: Advanced use cases

_🎄 Christmas edition_

In this lab, we'll be using exhaustiveness checking in the `formatPrice` method.

## Exercise 1 - Exhaustiveness checking for languages

1. Use exhaustiveness checking in the `formatPrice` method. Use either the `--strictNullChecks` method or the `never` method.
1. Verify that your exhaustiveness check works. Add a currency to the `Currency` union, for example `'Yuan'`. It should result in a compile error.
1. Have some time left? Why not test out the other variant of the exhaustiveness check.