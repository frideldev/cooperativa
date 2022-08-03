import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionalViewComponent } from './institucional-view.component';

describe('InstitucionalViewComponent', () => {
  let component: InstitucionalViewComponent;
  let fixture: ComponentFixture<InstitucionalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
