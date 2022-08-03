import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasSucursalesComponent } from './oficinas-sucursales.component';

describe('OficinasSucursalesComponent', () => {
  let component: OficinasSucursalesComponent;
  let fixture: ComponentFixture<OficinasSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinasSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinasSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
