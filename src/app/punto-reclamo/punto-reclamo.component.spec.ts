import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoReclamoComponent } from './punto-reclamo.component';

describe('PuntoReclamoComponent', () => {
  let component: PuntoReclamoComponent;
  let fixture: ComponentFixture<PuntoReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
