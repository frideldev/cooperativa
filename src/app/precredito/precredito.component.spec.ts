import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecreditoComponent } from './precredito.component';

describe('PrecreditoComponent', () => {
  let component: PrecreditoComponent;
  let fixture: ComponentFixture<PrecreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
