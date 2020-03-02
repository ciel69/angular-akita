import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBasketComponent } from './top-basket.component';

describe('TopBasketComponent', () => {
  let component: TopBasketComponent;
  let fixture: ComponentFixture<TopBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
