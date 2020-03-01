import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-count-product',
  templateUrl: './count-product.component.html',
  styleUrls: ['./count-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountProductComponent implements OnInit {

  @Input()
  count = 1;

  @Output()
  changeCount: EventEmitter<number> = new EventEmitter<number>();

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
