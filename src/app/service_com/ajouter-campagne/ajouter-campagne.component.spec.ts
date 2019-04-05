import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCampagneComponent } from './ajouter-campagne.component';

describe('AjouterCampagneComponent', () => {
  let component: AjouterCampagneComponent;
  let fixture: ComponentFixture<AjouterCampagneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCampagneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCampagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
