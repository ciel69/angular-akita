import {Component, OnDestroy, OnInit} from '@angular/core';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {Subject} from 'rxjs';

import {CatalogService} from '@/services/catalog.service';
import {Product} from '@/model/catalog.model';
import {Region} from '@/model/region.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  addToCart$: Subject<Product> = new Subject<Product>();
  changeRegion$: Subject<Region> = new Subject<Region>();

  selectedRegion: Region = null;
  products: Product[] = [];
  productsDiscount: Product[] = [];
  basket: Product[] = [];

  constructor(
    private catalogService: CatalogService
  ) {
  }

  ngOnInit(): void {
    this.catalogService.loadProducts()
      .subscribe((res) => {
        this.products = res;
        this.updateDiscount();
      });
    this.changeRegion$
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.selectedRegion = res;
        this.updateDiscount();
      });
  }

  ngOnDestroy(): void {
  }

  handleAddToCart(product: Product): void {
    this.addToCart$.next(product);
  }

  updateDiscount(): void {
    this.productsDiscount = this.products.map((product) => ({
      ...product,
      price: (product.price * (100 - this.selectedRegion.discount)) / 100
    }));
  }
}
