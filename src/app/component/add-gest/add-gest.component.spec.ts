import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGestComponent } from './add-gest.component';

describe('AddGestComponent', () => {
  let component: AddGestComponent;
  let fixture: ComponentFixture<AddGestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
