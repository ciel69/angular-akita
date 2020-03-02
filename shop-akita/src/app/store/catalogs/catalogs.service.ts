import {Injectable} from '@angular/core';
import {mapTo, tap, map} from 'rxjs/operators';
import {Observable, timer} from 'rxjs';

import {testData} from '@/testDataProduct';
import {CatalogsStore} from './catalogs.store';
import {Catalog} from './catalog.model';

@Injectable({providedIn: 'root'})
export class CatalogsService {

  constructor(
    private catalogsStore: CatalogsStore
  ) {
  }

  fakeHttp(): Observable<Catalog[]> {
    return timer(200).pipe(mapTo(testData));
  }

  loadProducts() {
    return this.fakeHttp().pipe(tap(entities => this.catalogsStore.set(entities)));
  }

  loadRecommendedProducts(): Observable<Catalog[]> {
    return this.fakeHttp().pipe(
      map(res => res.slice(0 , 3)),
      tap(entities => this.catalogsStore.set(entities))
    );
  }

  clearStore(): void {
    this.catalogsStore.remove();
  }
}
