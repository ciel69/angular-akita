import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {RegionsStore, RegionsState} from './regions.store';
import {Region} from './region.model';

@Injectable({providedIn: 'root'})
export class RegionsQuery extends QueryEntity<RegionsState> {

  currentRegion$: Observable<Region> = this.select(entity => entity.currentRegion);

  constructor(protected store: RegionsStore) {
    super(store);
  }

  getPriceDiscount(price): Observable<number> {
    return this.currentRegion$
      .pipe(map(region => (price * (100 - region.discount)) / 100));
  }

}
