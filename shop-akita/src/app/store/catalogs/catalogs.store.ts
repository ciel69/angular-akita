import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Catalog } from './catalog.model';

export interface CatalogsState extends EntityState<Catalog> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'catalogs'
})
export class CatalogsStore extends EntityStore<CatalogsState> {

  constructor() {
    super();
  }

}
