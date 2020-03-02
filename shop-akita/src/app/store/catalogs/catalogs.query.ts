import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CatalogsStore, CatalogsState } from './catalogs.store';

@Injectable({ providedIn: 'root' })
export class CatalogsQuery extends QueryEntity<CatalogsState> {

  constructor(protected store: CatalogsStore) {
    super(store);
  }

}
