import {Component, OnDestroy, OnInit} from '@angular/core';

import {CatalogsService} from '@/store/catalogs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private catalogService: CatalogsService
  ) {
  }

  ngOnInit(): void {
    this.catalogService.loadRecommendedProducts().subscribe();
  }

  ngOnDestroy(): void {
    this.catalogService.clearStore();
  }
}
