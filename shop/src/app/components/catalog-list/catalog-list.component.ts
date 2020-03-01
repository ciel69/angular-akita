import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Product} from '@/model/catalog.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogListComponent implements OnInit {

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

  inBasket(product: Product) {
    const findProduct = this.basket.find(item => item.id === product.id);
    if (findProduct) {
      return findProduct.count;
    }
    return 0;
  }
}
