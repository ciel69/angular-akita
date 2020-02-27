import { Injectable } from '@angular/core';
import {Observable, timer} from 'rxjs';
import {mapTo} from 'rxjs/operators';

import {testData} from '@/testData';
import {Product} from '@/model/catalog.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  fakeHttp(): Observable<Product[]> {
    return timer(200).pipe(mapTo(testData));
  }

  loadProducts(): Observable<Product[]> {
    return this.fakeHttp();
  }
}
