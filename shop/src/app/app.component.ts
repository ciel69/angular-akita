import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng';
import {Subject} from 'rxjs';

import {Product} from '@/model/catalog.model';
import {RegionService} from '@/services/region.service';
import {Region} from '@/model/region.model';
import {testData} from '@/testDataRegion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  constructor(
    private regionService: RegionService
  ) {
  }

  subscribeAddToCart: Subject<Product>;
  subscribeChangeCount: Subject<Product>;
  subscribeDeleteProduct: Subject<Product>;

  selectedRegion: Region = testData[0];
  regions: Region[];
  items: MenuItem[];
  basket: Product[] = [];
  basketCount = 0;
  basketSum = 0;
  childComponent;

  ngOnInit(): void {
    this.items = [
      {label: 'Главная', routerLink: ['/'], routerLinkActiveOptions: {exact: true}},
      {label: 'Каталог', routerLink: ['/catalog']},
    ];
    this.regionService.loadRegion()
      .subscribe(res => {
        this.regions = res;
      });
  }

  componentAdded(event: any): void {
    this.childComponent = event;
    if (typeof event.basket !== 'undefined') {
      event.basket = this.basket;
    }
    if (typeof event.selectedRegion !== 'undefined') {
      event.selectedRegion = this.selectedRegion;
    }
    if (event.addToCart$) {
      this.subscribeAddToCart = event.addToCart$
        .subscribe((product) => {
          const indexProduct = this.basket.findIndex(item => item.id === product.id);
          if (indexProduct !== -1) {
            this.basket[indexProduct] = {
              ...product,
              count: this.basket[indexProduct].count + product.count
            };
          } else {
            this.basket = [...this.basket, product];
          }
          event.basket = this.basket;
          this.updateSumAndPrice();
        });
    }
    if (event.changeCount$) {
      this.subscribeChangeCount = event.changeCount$
        .subscribe((product) => {
          const indexProduct = this.basket.findIndex(item => item.id === product.id);
          this.basket[indexProduct] = product;
          this.basket = [...this.basket];
          this.updateSumAndPrice();
          event.basket = this.basket;
        });
    }
    if (event.deleteProduct$) {
      this.subscribeDeleteProduct = event.deleteProduct$
        .subscribe((product) => {
          this.basket = this.basket.filter(item => item.id !== product.id);
          this.updateSumAndPrice();
          event.basket = this.basket;
          if (this.childComponent.changeRegion$) {
            this.childComponent.changeRegion$.next(this.selectedRegion);
          }
        });
    }
  }

  componentRemoved(): void {
    if (this.subscribeAddToCart) {
      this.subscribeAddToCart.unsubscribe();
    }
    if (this.subscribeChangeCount) {
      this.subscribeChangeCount.unsubscribe();
    }
    if (this.subscribeDeleteProduct) {
      this.subscribeDeleteProduct.unsubscribe();
    }
  }

  updateSumAndPrice(): void {
    this.basketCount = this.basket.reduce((acc, product) => {
      return acc + Number(product.count);
    }, 0);
    this.basketSum = this.basket.reduce((acc, product) => {
      return acc + (product.price * product.count * (100 - this.selectedRegion.discount)) / 100;
    }, 0);
  }

  handleChangeRegion(event: Region): void {
    this.selectedRegion = event;
    this.updateSumAndPrice();
    if (this.childComponent.changeRegion$) {
      this.childComponent.changeRegion$.next(event);
    }
  }

  handleChangeCount(product: Product) {
    const indexProduct = this.basket.findIndex(item => item.id === product.id);
    if (indexProduct !== -1) {
      this.basket[indexProduct] = product;
      this.basket = [...this.basket];
      this.updateSumAndPrice();
      if (this.childComponent.basket) {
        this.childComponent.basket = this.basket;
      }
    }
  }

  handleDelete(product: Product): void {
    this.basket = this.basket.filter(item => item.id !== product.id);
    this.updateSumAndPrice();
    if (this.childComponent.basket) {
      this.childComponent.basket = this.basket;
    }
  }
}
