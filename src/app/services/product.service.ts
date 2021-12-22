import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  search(contains: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(`http://localhost:3000/products?q=${contains}&_page=0&_expand=supplier`)
      .pipe(
        map((products) =>
          products.map(
            (product) =>
              new Product(
                product.title,
                product.price,
                product.supplier,
                product.href,
                product.imgUrl
              )
          )
        )
      );
  }
}
