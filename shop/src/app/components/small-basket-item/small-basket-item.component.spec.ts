import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBasketItemComponent } from './small-basket-item.component';

describe('SmallBasketItemComponent', () => {
  let component: SmallBasketItemComponent;
  let fixture: ComponentFixture<SmallBasketItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallBasketItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBasketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
