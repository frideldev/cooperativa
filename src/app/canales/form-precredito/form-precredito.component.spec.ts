import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrecreditoComponent } from './form-precredito.component';

describe('FormPrecreditoComponent', () => {
  let component: FormPrecreditoComponent;
  let fixture: ComponentFixture<FormPrecreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrecreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrecreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
