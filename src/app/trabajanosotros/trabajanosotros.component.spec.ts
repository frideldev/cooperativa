import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajanosotrosComponent } from './trabajanosotros.component';

describe('TrabajanosotrosComponent', () => {
  let component: TrabajanosotrosComponent;
  let fixture: ComponentFixture<TrabajanosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajanosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajanosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
