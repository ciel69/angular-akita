import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {OverlayPanel} from 'primeng/overlaypanel';
import {Product} from '@/model/catalog.model';

@Component({
  selector: 'app-small-basket',
  templateUrl: './small-basket.component.html',
  styleUrls: ['./small-basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallBasketComponent implements OnInit, OnChanges {

  @Input()
  basket: Product[] = [];

  @Input()
  show = true;

  @Output()
  changeCount: EventEmitter<Product> = new EventEmitter();

  @ViewChild('overlayPanel', {static: false})
  overlayPanel: OverlayPanel;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.overlayPanel && typeof changes.show !== 'undefined') {
      this.overlayPanel.toggle({});
    }
  }

  handleChangeCount(product: Product): void {
    this.changeCount.emit(product);
  }

}
