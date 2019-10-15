import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfintekComponent } from './allfintek.component';

describe('AllfintekComponent', () => {
  let component: AllfintekComponent;
  let fixture: ComponentFixture<AllfintekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllfintekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllfintekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
