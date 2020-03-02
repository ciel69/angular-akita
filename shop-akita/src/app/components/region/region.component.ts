import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

import {Region, RegionsQuery, RegionsService} from '@/store/regions';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit {

  @Input()
  regions = [];

  @Input()
  selectedRegion;

  @Output()
  changeRegion: EventEmitter<Region> = new EventEmitter<Region>();

  regions$: Observable<Region[]>;

  constructor(
    private regionsService: RegionsService,
    private regionsQuery: RegionsQuery,
  ) {
  }

  ngOnInit(): void {
    this.regions$ = this.regionsQuery.selectAll();
  }

  handleChangeRegion(event: any): void {
    this.regionsService.changeRegion(event.value);
  }
}
