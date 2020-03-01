import {Component, OnInit} from '@angular/core';

import {Region} from '@/model/region.model';
import {Product} from '@/model/catalog.model';
import {CatalogService} from '@/services/catalog.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  addToCart$: Subject<Product> = new Subject<Product>();
  changeRegion$: Subject<Region> = new Subject<Region>();

  selectedRegion: Region;
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
    this.changeRegion$.subscribe(res => {
      this.selectedRegion = res;
      this.updateDiscount();
    });
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
