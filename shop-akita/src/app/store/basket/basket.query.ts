import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {map, reduce, tap} from 'rxjs/operators';
import {combineLatest, Observable, of} from 'rxjs';

import {BasketStore, BasketState} from './basket.store';
import {RegionsQuery} from '@/store/regions';

@Injectable({providedIn: 'root'})
export class BasketQuery extends QueryEntity<BasketState> {

  countsProduct$: Observable<number> = this.selectAll()
    .pipe(
      map(value => {
        return value.reduce((acc, product) => {
          return acc + Number(product.count);
        }, 0);
      })
    );

  sumProduct$: Observable<number> = combineLatest([this.selectAll(), this.regionsQuery.currentRegion$])
    .pipe(
      map(([basket, region]) => {
        return basket.reduce((acc, product) => {
          return acc + (product.price * product.count * (100 - region.discount)) / 100;
        }, 0);
      })
    );

  constructor(
    protected store: BasketStore,
    protected regionsQuery: RegionsQuery
  ) {
    super(store);
  }

}
