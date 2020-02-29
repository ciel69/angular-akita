import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Region} from '@/model/region.model';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  handleChangeRegion(event: any): void {
    this.changeRegion.emit(event.value);
  }
}
