import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToCartComponent } from './button-to-cart.component';

describe('ButtonToCartComponent', () => {
  let component: ButtonToCartComponent;
  let fixture: ComponentFixture<ButtonToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
