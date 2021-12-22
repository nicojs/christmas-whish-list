import { createSupplier, Product } from '../models';
import { DisplayProductPipe } from './display-product.pipe';

describe('DisplayProductPipe', () => {
  let sut: DisplayProductPipe;

  beforeEach(() => {
    sut = new DisplayProductPipe();
  });

  it('should display a product without supplier', () => {
    const output = sut.transform(
      new Product('Toy train', { amount: 25, currency: 'Euro' })
    );
    expect(output).toBe('Toy train (€25.00)');
  });

  it('should display a product with a supplier', () => {
    const output = sut.transform(
      new Product(
        'Toy train',
        { amount: 25, currency: 'Euro' },
        createSupplier({ name: 'Train of Troy' })
      )
    );
    expect(output).toBe('Toy train from Train of Troy (€25.00)');
  });
});
