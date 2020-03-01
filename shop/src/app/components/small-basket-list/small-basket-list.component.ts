import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '@/model/catalog.model';

@Component({
  selector: 'app-small-basket-list',
  templateUrl: './small-basket-list.component.html',
  styleUrls: ['./small-basket-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallBasketListComponent implements OnInit {

  @Input()
  basket: Product[] = [];

  @Output()
  changeCount: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeCount(product: Product): void {
    this.changeCount.emit(product);
  }

}
