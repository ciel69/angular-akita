import {Component, OnDestroy, OnInit} from '@angular/core';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {Subject} from 'rxjs';

import {Region} from '@/model/region.model';
import {Product} from '@/model/catalog.model';
import {CatalogService} from '@/services/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

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
    this.catalogService.loadRecommendedProducts()
      .subscribe(products => {
        this.products = products;
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

  updateDiscount(): void {
    this.productsDiscount = this.products.map((product) => ({
      ...product,
      price: (product.price * (100 - this.selectedRegion.discount)) / 100
    }));
  }

  handleAddToCart(product: Product): void {
    this.addToCart$.next(product);
  }
}
