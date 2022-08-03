import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCuotaComponent } from './calculadora-cuota.component';

describe('CalculadoraCuotaComponent', () => {
  let component: CalculadoraCuotaComponent;
  let fixture: ComponentFixture<CalculadoraCuotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraCuotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraCuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
