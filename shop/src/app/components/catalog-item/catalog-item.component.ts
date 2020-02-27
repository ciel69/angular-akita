import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
