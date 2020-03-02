import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {Observable} from 'rxjs';

import {RegionsStore, RegionsState} from './regions.store';
import {Region} from './region.model';

@Injectable({providedIn: 'root'})
export class RegionsQuery extends QueryEntity<RegionsState> {

  currentRegion$: Observable<Region> = this.select(entity => entity.currentRegion);

  constructor(protected store: RegionsStore) {
    super(store);
  }

}
