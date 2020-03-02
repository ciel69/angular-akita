import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {OverlayPanel} from 'primeng/overlaypanel';
import {Router} from '@angular/router';

import {Basket} from '@/store/basket';

@Component({
  selector: 'app-small-basket',
  templateUrl: './small-basket.component.html',
  styleUrls: ['./small-basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallBasketComponent implements OnInit, OnChanges {

  @Input()
  basket: Basket[] = [];

  @Input()
  show = true;

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

  goBasket(): void {
    this.router.navigateByUrl('/basket');
    if (this.overlayPanel) {
      this.overlayPanel.hide();
    }
  }
}
