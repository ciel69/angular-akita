import {Injectable} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {mapTo} from 'rxjs/operators';

import {testData} from '@/testDataRegion';
import {Region} from '@/model/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor() {
  }

  fakeHttp(): Observable<Region[]> {
    return timer(200).pipe(mapTo(testData));
  }

  loadRegion(): Observable<Region[]> {
    return this.fakeHttp();
  }
}
