import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Product} from '@/model/catalog.model';

@Component({
  selector: 'app-top-basket',
  templateUrl: './top-basket.component.html',
  styleUrls: ['./top-basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBasketComponent implements OnInit {

  @Input()
  basket: Product[] = [];

  @Input()
  count = 0;

  @Input()
  sum = 0;

  @Output()
  changeCount: EventEmitter<Product> = new EventEmitter();

  @Output()
  deleteProduct: EventEmitter<Product> = new EventEmitter();

  show = true;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.show = !this.show;
  }

  handleChangeCount(product: Product): void {
    this.changeCount.emit(product);
  }

  handleDelete(product: Product): void {
    this.deleteProduct.emit(product);
  }

}
