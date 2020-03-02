import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';

import {BasketStore} from './basket.store';
import {Basket} from './basket.model';

@Injectable({providedIn: 'root'})
export class BasketService {

  constructor(
    private basketStore: BasketStore
  ) {
  }

  addBasket(data: Basket): void {
    this.basketStore.upsert(data.id, state => ({
        ...data,
        count: (state.count || 0) + data.count
    }));
  }

  changeCount(data: Basket): void {
    this.basketStore.upsert(data.id, data);
  }

  deleteProduct(id: ID): void {
    this.basketStore.remove(id);
  }
}
