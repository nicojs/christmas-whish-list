import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from 'ngx-typesafe-forms';
import { Observable } from 'rxjs';
import { Currency, Price, Product } from '../models';

export interface ProductPlacement {
  place: number;
  product: Product;
}

@Component({
  selector: 'cwl-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  @Output()
  public readonly add = new EventEmitter<ProductPlacement>();

  public get titleValue$(): Observable<string | null> {
    return this.titleInput.value$;
  }

  public readonly currencies: Readonly<Record<Currency, string>> =
    Object.freeze({
      Euro: '€',
      Dollar: '$',
    });

  private readonly titleInput = new FormControl<string>(
    '',
    Validators.required
  );

  public readonly form = new FormGroup<
    Omit<Product, 'display'> & { place: number }
  >({
    price: new FormGroup<Price>({
      amount: new FormControl<number>(undefined, [
        Validators.required,
        Validators.min(0),
      ]),
      currency: new FormControl<Currency>(undefined, Validators.required),
    }),
    title: this.titleInput,
    place: new FormControl<number>(undefined, [
      Validators.required,
      Validators.min(1),
    ]),
  });

  public addWish() {
    if (this.form.valid) {
      const { title, place, price } = this.form.value;
      this.add.emit({ place, product: new Product(title, price) });
      this.reset();
    }
  }

  public reset() {
    this.form.reset();
  }
}
