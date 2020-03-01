import {Injectable} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {mapTo, map} from 'rxjs/operators';

import {testData} from '@/testDataProduct';
import {Product} from '@/model/catalog.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() {
  }

  fakeHttp(): Observable<Product[]> {
    return timer(200).pipe(mapTo(testData));
  }

  loadProducts(): Observable<Product[]> {
    return this.fakeHttp();
  }

  loadRecommendedProducts(): Observable<Product[]> {
    return this.fakeHttp().pipe(
      map(res => {
        return res.slice(0 , 3);
      })
    );
  }
}
