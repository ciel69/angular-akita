import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng';

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
      {label: 'Корзина', routerLink: ['/basket']},
    ];
    this.regionService.loadRegion()
      .subscribe(res => {
        this.regions = res;
      });
  }

  componentAdded(event: any): void {
    this.childComponent = event;
    if (event.addToCart$) {
      event.selectedRegion = this.selectedRegion;
      event.addToCart$.subscribe((product) => {
        const indexProduct = this.basket.findIndex(item => item.id === product.id);
        if (indexProduct !== -1) {
          this.basket[indexProduct] = {
            ...product,
            count: this.basket[indexProduct].count + product.count
          };
        } else {
          // this.basket = [...this.basket, product];
          this.basket.push(product);
        }
        event.basket = this.basket;
        this.updateSumAndPrice();
      });
    }
  }

  componentRemoved($event: any): void {
    console.log('componentRemoved', $event);
  }

  updateSumAndPrice(): void {
    this.basketCount = this.basket.reduce((acc, product) => {
      return acc + product.count;
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
}
