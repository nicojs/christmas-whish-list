import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { auditTime, filter, switchMap, tap } from 'rxjs';
import { createSupplier, Product } from './models';
import {
  ProductFormComponent,
  ProductPlacement,
} from './product-form/product-form.component';
import { ProductService } from './services/product.service';
import { WishList } from './wish-list';

function notEmpty<T>(val: T | undefined | null ): val is T {
  return val !== null && val !== undefined;
}

@Component({
  selector: 'cwl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'christmas-wish-list';

  christmasList = new WishList('Christmas 🎅');

  scopedProducts?: Product[];

  products?: Product[];
  ngOnInit() {
    this.productService.search('trui').subscribe((products) => {
      console.log(
        'products',
        products.map((p) => p.display())
      );
      this.products = products;
    });
  }

  @ViewChild(ProductFormComponent)
  private productFormComponent?: ProductFormComponent;

  constructor(private productService: ProductService) {
    const brio = createSupplier({ id: 1, name: 'BRIO' });

    this.christmasList.setWish(
      1,
      new Product('Toy train', { amount: 35.58, currency: 'Euro' }, brio)
    );

    // Changed my mind, want these first!
    this.christmasList.setWish(
      1,
      new Product('Yellow power ranger', { amount: 9.99, currency: 'Dollar' })
    );
    this.christmasList.setWish(
      2,
      new Product('Christmas carols CD', { amount: 24.99, currency: 'Dollar' })
    );
  }

  ngAfterViewInit(): void {
    this.productFormComponent!.titleValue$.pipe(
      auditTime(500),
      tap(() => (this.scopedProducts = undefined)),
      filter(notEmpty),
      filter((value) => value.length > 1),
      switchMap((value) => this.productService.search(value))
    ).subscribe((products) => (this.scopedProducts = products));
  }

  selectProduct(product: Product) {
    this.addWish({ place: 1, product });
    this.productFormComponent?.reset();
    this.scopedProducts = undefined;
  }

  addWish({ place, product }: ProductPlacement) {
    this.christmasList.setWish(place, product);
  }
}
