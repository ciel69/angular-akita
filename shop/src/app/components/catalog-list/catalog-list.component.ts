import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {Product} from '@/model/catalog.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogListComponent implements OnInit {

  @Input()
  products: Product[] = [];

  constructor() {
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.products);
  }

}
