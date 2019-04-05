import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationParticipationComponent } from './validation-participation.component';

describe('ValidationParticipationComponent', () => {
  let component: ValidationParticipationComponent;
  let fixture: ComponentFixture<ValidationParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationParticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
