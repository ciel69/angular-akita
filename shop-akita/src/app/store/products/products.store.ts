import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from './product.model';

export interface ProductsState extends EntityState<Product> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'products'
})
export class ProductsStore extends EntityStore<ProductsState> {

  constructor() {
    super();
  }

}
