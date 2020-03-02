import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {Basket} from '@/store/basket';

@Component({
  selector: 'app-small-basket-list',
  templateUrl: './small-basket-list.component.html',
  styleUrls: ['./small-basket-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallBasketListComponent implements OnInit {

  @Input()
  basket: Basket[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
