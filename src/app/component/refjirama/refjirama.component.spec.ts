import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefjiramaComponent } from './refjirama.component';

describe('RefjiramaComponent', () => {
  let component: RefjiramaComponent;
  let fixture: ComponentFixture<RefjiramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefjiramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefjiramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
