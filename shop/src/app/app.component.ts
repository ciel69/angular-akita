import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {label: 'Home', routerLink: ['/'], routerLinkActiveOptions: { exact: true }},
      {label: 'Catalog', routerLink: ['/catalog']},
      {label: 'Basket', routerLink: ['/basket']},
    ];
  }
}
