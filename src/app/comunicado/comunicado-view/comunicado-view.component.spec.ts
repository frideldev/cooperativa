import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicadoViewComponent } from './comunicado-view.component';

describe('ComunicadoViewComponent', () => {
  let component: ComunicadoViewComponent;
  let fixture: ComponentFixture<ComunicadoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicadoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicadoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
