import {Injectable} from '@angular/core';
import {RegionsStore} from './regions.store';
import {mapTo, tap} from 'rxjs/operators';
import {Observable, timer} from 'rxjs';

import {testData} from '@/testDataRegion';
import {Region} from '@/store/regions/region.model';

@Injectable({providedIn: 'root'})
export class RegionsService {

  constructor(
    private regionsStore: RegionsStore
  ) {
  }

  fakeHttp(): Observable<Region[]> {
    return timer(200).pipe(mapTo(testData));
  }

  loadRegion() {
    return this.fakeHttp().pipe(tap(entities => this.regionsStore.set(entities)));
  }

  changeRegion(data: Region): void {
    this.regionsStore.update({
      currentRegion: data
    });
  }
}
