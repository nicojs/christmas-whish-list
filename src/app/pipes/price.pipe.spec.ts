import { CurrencyPipe } from '@angular/common';
import { createPrice } from '../models';
import { PricePipe } from './price.pipe';

describe('PricePipe', () => {
  let sut: PricePipe;
  let currencyPipeMock: jasmine.SpyObj<CurrencyPipe>;

  beforeEach(() => {
    currencyPipeMock = jasmine.createSpyObj<CurrencyPipe>('DecimalPipe', [
      'transform',
    ]);
    sut = new PricePipe(currencyPipeMock);
  });

  it('should use the currency pipe to display a euro currency', () => {
    // Arrange
    const expected = 'EUR 42.00';
    currencyPipeMock.transform.and.returnValue(expected);

    // Act
    const output = sut.transform(
      createPrice({ amount: 42, currency: 'Euro' })
    );

    // Assert
    expect(output).toBe(expected);
    expect(currencyPipeMock.transform).toHaveBeenCalledOnceWith(42, 'EUR');
  });

  it('should use the currency pipe to display a dollar currency', () => {
    // Arrange
    const expected = '$ 42.00';
    currencyPipeMock.transform.and.returnValue(expected);

    // Act
    const output = sut.transform(
      createPrice({ amount: 42, currency: 'Dollar' })
    );

    // Assert
    expect(output).toBe(expected);
    expect(currencyPipeMock.transform).toHaveBeenCalledOnceWith(42, 'USD');
  });

});
