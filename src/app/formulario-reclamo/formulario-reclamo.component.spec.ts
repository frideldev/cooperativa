import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReclamoComponent } from './formulario-reclamo.component';

describe('FormularioReclamoComponent', () => {
  let component: FormularioReclamoComponent;
  let fixture: ComponentFixture<FormularioReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
