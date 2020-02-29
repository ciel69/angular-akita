import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {CatalogService} from '@/services/catalog.service';
import {Product} from '@/model/catalog.model';
import {Subject} from 'rxjs';
import {Region} from '@/model/region.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnChanges {

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    this.catalogService.loadProducts()
      .subscribe((res) => {
        this.products = res;
        this.updateDiscount();
      });
    this.changeRegion$.subscribe(res => {
      this.selectedRegion = res;
      this.updateDiscount();
    });
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
