import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';

import {Region} from './region.model';
import {testData} from '@/testDataRegion';

export interface RegionsState extends EntityState<Region> {
  currentRegion: Region;
}

const initialState = {
  currentRegion: testData[0]
};

@Injectable({providedIn: 'root'})
@StoreConfig({
  name: 'regions'
})
export class RegionsStore extends EntityStore<RegionsState> {

  constructor() {
    super(initialState);
  }

}
