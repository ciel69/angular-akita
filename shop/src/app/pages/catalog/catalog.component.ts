import {Component, OnInit} from '@angular/core';

import {CatalogService} from '@/services/catalog.service';
import {Product} from '@/model/catalog.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private catalogService: CatalogService
  ) {
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.catalogService.loadProducts().subscribe((res) => {
      console.log('loadProducts', res);
      this.products = res;
    });
  }

}
