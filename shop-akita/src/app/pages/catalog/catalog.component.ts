import {Component, OnDestroy, OnInit} from '@angular/core';

import {CatalogsService} from '@/store/catalogs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  constructor(
    private catalogService: CatalogsService
  ) {
  }

  ngOnInit(): void {
    this.catalogService.loadProducts().subscribe();
  }

  ngOnDestroy(): void {
    this.catalogService.clearStore();
  }
}
