import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatefintekComponent } from './datefintek.component';

describe('DatefintekComponent', () => {
  let component: DatefintekComponent;
  let fixture: ComponentFixture<DatefintekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatefintekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatefintekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
