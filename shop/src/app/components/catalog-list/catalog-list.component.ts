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
