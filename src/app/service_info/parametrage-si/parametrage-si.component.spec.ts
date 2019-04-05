import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageSiComponent } from './parametrage-si.component';

describe('ParametrageSiComponent', () => {
  let component: ParametrageSiComponent;
  let fixture: ComponentFixture<ParametrageSiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageSiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
