import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketListComponent } from './basket-list.component';

describe('BasketListComponent', () => {
  let component: BasketListComponent;
  let fixture: ComponentFixture<BasketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
