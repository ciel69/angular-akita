import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Basket, BasketQuery} from '@/store/basket';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketListComponent implements OnInit {

  basket$: Observable<Basket[]>;

  constructor(
    private basketQuery: BasketQuery
  ) {
  }

  ngOnInit(): void {
    this.basket$ = this.basketQuery.selectAll();
  }
}
