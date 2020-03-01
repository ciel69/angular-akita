import {Component, OnDestroy, OnInit} from '@angular/core';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {Subject} from 'rxjs';

import {Product} from '@/model/catalog.model';
import {Region} from '@/model/region.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {

  changeCount$: Subject<Product> = new Subject<Product>();
  deleteProduct$: Subject<Product> = new Subject<Product>();
  changeRegion$: Subject<Region> = new Subject<Region>();

  selectedRegion: Region = null;
  basket: Product[] = [];
  basketDiscount: Product[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.changeRegion$
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.selectedRegion = res;
        this.updateDiscount();
      });
    this.basketDiscount = this.basket;
  }

  ngOnDestroy(): void {
  }

  handleChangeCount(product: Product): void {
    this.changeCount$.next(product);
  }

  handleDelete(product: Product): void {
    this.deleteProduct$.next(product);
  }

  updateDiscount(): void {
    this.basketDiscount = this.basket.map((product) => ({
      ...product,
      price: (product.price * (100 - this.selectedRegion.discount)) / 100
    }));
  }

}
