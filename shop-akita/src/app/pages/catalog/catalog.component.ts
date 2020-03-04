import {Component, OnDestroy, OnInit} from '@angular/core';

import {ProductsService} from '@/store/products';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.productsService.loadProducts().subscribe();
  }

  ngOnDestroy(): void {
    this.productsService.clearStore();
  }
}
