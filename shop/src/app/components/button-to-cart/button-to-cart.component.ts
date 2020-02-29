import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-to-cart',
  templateUrl: './button-to-cart.component.html',
  styleUrls: ['./button-to-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonToCartComponent implements OnInit {

  @Output()
  addToCart: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
