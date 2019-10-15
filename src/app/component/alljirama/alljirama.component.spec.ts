import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlljiramaComponent } from './alljirama.component';

describe('AlljiramaComponent', () => {
  let component: AlljiramaComponent;
  let fixture: ComponentFixture<AlljiramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlljiramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlljiramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
