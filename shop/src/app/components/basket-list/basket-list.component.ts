import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Product} from '@/model/catalog.model';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketListComponent implements OnInit {

  @Input()
  basket: Product[] = [];

  @Output()
  changeCount: EventEmitter<Product> = new EventEmitter();

  @Output()
  deleteProduct: EventEmitter<Product> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  handleChangeCount(product: Product): void {
    this.changeCount.emit(product);
  }

  handleDelete(product: Product): void {
    this.deleteProduct.emit(product);
  }

}
