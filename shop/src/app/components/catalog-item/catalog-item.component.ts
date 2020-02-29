import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '@/model/catalog.model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogItemComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter();

  count = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleAddToCart(): void {
    console.log('handleAddToCart');
    this.addToCart.emit({
      ...this.product,
      count: this.count
    });
  }

  handleChangeCount($event: number): void {
    this.count = $event;
  }
}
