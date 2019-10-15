import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReffintekComponent } from './reffintek.component';

describe('ReffintekComponent', () => {
  let component: ReffintekComponent;
  let fixture: ComponentFixture<ReffintekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReffintekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReffintekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
