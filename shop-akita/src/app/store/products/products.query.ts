import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {ProductsStore, ProductsState} from './products.store';
import {RegionsQuery} from '@/store/regions';

@Injectable({providedIn: 'root'})
export class ProductsQuery extends QueryEntity<ProductsState> {

  constructor(
    protected store: ProductsStore,
    protected regionsQuery: RegionsQuery
  ) {
    super(store);
  }

  getPriceDiscount(price): Observable<number> {
    return this.regionsQuery.currentRegion$
      .pipe(map(region => (price * (100 - region.discount)) / 100));
  }

}
