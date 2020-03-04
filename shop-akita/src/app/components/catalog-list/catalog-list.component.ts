import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Product, ProductsQuery} from '@/store/products';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private productsQuery: ProductsQuery
  ) {
  }

  ngOnInit(): void {
    this.products$ = this.productsQuery.selectAll();
  }
}
