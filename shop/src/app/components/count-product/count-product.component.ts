import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-count-product',
  templateUrl: './count-product.component.html',
  styleUrls: ['./count-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountProductComponent implements OnInit {

  @Output()
  changeCount: EventEmitter<number> = new EventEmitter<number>();

  count = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.count++;
    this.changeCount.emit(this.count);
  }

  decreaseCount(): void {
    if (this.count > 1) {
      this.count--;
      this.changeCount.emit(this.count);
    }
  }

}
