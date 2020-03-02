import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-catalog-recommended',
  templateUrl: './catalog-recommended.component.html',
  styleUrls: ['./catalog-recommended.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogRecommendedComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

}
