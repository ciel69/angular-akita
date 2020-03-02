import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBasketComponent } from './small-basket.component';

describe('SmallBasketComponent', () => {
  let component: SmallBasketComponent;
  let fixture: ComponentFixture<SmallBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
