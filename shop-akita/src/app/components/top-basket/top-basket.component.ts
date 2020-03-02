import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Basket, BasketQuery} from '@/store/basket';

@Component({
  selector: 'app-top-basket',
  templateUrl: './top-basket.component.html',
  styleUrls: ['./top-basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBasketComponent implements OnInit {

  basket$: Observable<Basket[]>;
  countsProduct$: Observable<number>;
  sumProduct$: Observable<number>;

  show = true;

  constructor(
    private basketQuery: BasketQuery
  ) {
  }

  ngOnInit(): void {
    this.basket$ = this.basketQuery.selectAll();
    this.countsProduct$ = this.basketQuery.countsProduct$;
    this.sumProduct$ = this.basketQuery.sumProduct$;
  }

  handleClick(): void {
    this.show = !this.show;
  }

}
