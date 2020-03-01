import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '@/model/catalog.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  @Input()
  inBasket: Product;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter();

  count = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleAddToCart(): void {
    this.addToCart.emit({
      ...this.product,
      count: this.count
    });
    this.count = 1;
  }

  handleChangeCount($event: number): void {
    this.count = $event;
  }
}
