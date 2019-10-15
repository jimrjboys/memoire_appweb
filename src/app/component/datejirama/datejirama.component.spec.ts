import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatejiramaComponent } from './datejirama.component';

describe('DatejiramaComponent', () => {
  let component: DatejiramaComponent;
  let fixture: ComponentFixture<DatejiramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatejiramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatejiramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
