import { Injectable } from '@angular/core';
import { ProductsStore } from './products.store';
import {map, mapTo, tap} from 'rxjs/operators';
import {Observable, timer} from 'rxjs';

import {testData} from '@/testDataProduct';
import {Product} from '@/store/products/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(
    private productsStore: ProductsStore
  ) {
  }

  fakeHttp(): Observable<Product[]> {
    return timer(200).pipe(mapTo(testData));
  }

  loadProducts() {
    return this.fakeHttp().pipe(tap(entities => this.productsStore.set(entities)));
  }

  loadRecommendedProducts(): Observable<Product[]> {
    return this.fakeHttp().pipe(
      map(res => res.slice(0 , 3)),
      tap(entities => this.productsStore.set(entities))
    );
  }

  clearStore(): void {
    this.productsStore.remove();
  }
}
