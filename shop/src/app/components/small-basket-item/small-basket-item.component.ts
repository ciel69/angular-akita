import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '@/model/catalog.model';

@Component({
  selector: 'app-small-basket-item',
  templateUrl: './small-basket-item.component.html',
  styleUrls: ['./small-basket-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallBasketItemComponent implements OnInit {

  @Input()
  item: Product;

  @Output()
  changeCount: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeCount($event: number): void {
    this.changeCount.emit({
      ...this.item,
      count: $event
    });
  }

}
