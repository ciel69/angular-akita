import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {OverlayPanel} from 'primeng/overlaypanel';
import {Router} from '@angular/router';

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

  @Output()
  deleteProduct: EventEmitter<Product> = new EventEmitter();

  @ViewChild('overlayPanel', {static: false})
  overlayPanel: OverlayPanel;

  constructor(
    private router: Router
  ) {
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

  handleDelete(product: Product): void {
    this.deleteProduct.emit(product);
  }

  goBasket(): void {
    this.router.navigateByUrl('/basket');
    if (this.overlayPanel) {
      this.overlayPanel.hide();
    }
  }
}
