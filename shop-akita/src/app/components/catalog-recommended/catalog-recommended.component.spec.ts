import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogRecommendedComponent } from './catalog-recommended.component';

describe('CatalogRecommendedComponent', () => {
  let component: CatalogRecommendedComponent;
  let fixture: ComponentFixture<CatalogRecommendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogRecommendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
