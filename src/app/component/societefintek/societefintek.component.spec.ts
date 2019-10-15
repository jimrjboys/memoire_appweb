import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietefintekComponent } from './societefintek.component';

describe('SocietefintekComponent', () => {
  let component: SocietefintekComponent;
  let fixture: ComponentFixture<SocietefintekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietefintekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietefintekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
