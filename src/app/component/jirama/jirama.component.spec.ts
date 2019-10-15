import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiramaComponent } from './jirama.component';

describe('JiramaComponent', () => {
  let component: JiramaComponent;
  let fixture: ComponentFixture<JiramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
