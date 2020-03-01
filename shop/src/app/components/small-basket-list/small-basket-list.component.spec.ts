import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBasketListComponent } from './small-basket-list.component';

describe('SmallBasketListComponent', () => {
  let component: SmallBasketListComponent;
  let fixture: ComponentFixture<SmallBasketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallBasketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBasketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
