import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng';

import {RegionsService} from '@/store/regions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  constructor(
    private regionService: RegionsService
  ) {
  }

  items: MenuItem[];

  ngOnInit(): void {
    this.regionService.loadRegion().subscribe();
    this.items = [
      {label: 'Главная', routerLink: ['/'], routerLinkActiveOptions: {exact: true}},
      {label: 'Каталог', routerLink: ['/catalog']},
    ];
  }
}
