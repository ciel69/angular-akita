import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Catalog, CatalogsQuery} from '@/store/catalogs';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogListComponent implements OnInit {

  products$: Observable<Catalog[]>;

  constructor(
    private catalogsQuery: CatalogsQuery
  ) {
  }

  ngOnInit(): void {
    this.products$ = this.catalogsQuery.selectAll();
  }
}
