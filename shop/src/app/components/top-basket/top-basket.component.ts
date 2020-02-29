import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
