import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Product} from '@/model/catalog.model';

@Component({
  selector: 'app-catalog-recommended',
  templateUrl: './catalog-recommended.component.html',
  styleUrls: ['./catalog-recommended.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogRecommendedComponent implements OnInit {

  @Input()
  products: Product[] = [];

  @Input()
  basket: Product[] = [];

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  handleAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }

}
