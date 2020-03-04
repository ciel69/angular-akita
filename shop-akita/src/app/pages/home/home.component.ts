import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '@/store/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.productsService.loadRecommendedProducts().subscribe();
  }

  ngOnDestroy(): void {
    this.productsService.clearStore();
  }
}
