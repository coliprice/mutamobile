import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageConsentementComponent } from './parametrage-consentement.component';

describe('ParametrageConsentementComponent', () => {
  let component: ParametrageConsentementComponent;
  let fixture: ComponentFixture<ParametrageConsentementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageConsentementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageConsentementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
