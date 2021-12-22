import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Product } from '../models';

@Component({
  selector: 'cwl-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent {

  @Output()
  add = new EventEmitter<Product>();

  @Input()
  products?: Product[];
}
