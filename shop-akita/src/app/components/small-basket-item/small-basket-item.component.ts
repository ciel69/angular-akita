import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {Basket, BasketService} from '@/store/basket';

@Component({
  selector: 'app-small-basket-item',
  templateUrl: './small-basket-item.component.html',
  styleUrls: ['./small-basket-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallBasketItemComponent implements OnInit {

  @Input()
  item: Basket;

  constructor(
    private basketService: BasketService
  ) {
  }

  ngOnInit(): void {
  }

  handleChangeCount(count: number): void {
    this.basketService.changeCount({
      ...this.item,
      count
    });
  }

  handleDelete(): void {
    this.basketService.deleteProduct(this.item.id);
  }

}
