import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Basket } from './basket.model';

export interface BasketState extends EntityState<Basket> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'basket'
})
export class BasketStore extends EntityStore<BasketState> {

  constructor() {
    super();
  }

}
