import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelevementComponent } from './prelevement.component';

describe('PrelevementComponent', () => {
  let component: PrelevementComponent;
  let fixture: ComponentFixture<PrelevementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrelevementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelevementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
