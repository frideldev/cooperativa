import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RseViewComponent } from './rse-view.component';

describe('RseViewComponent', () => {
  let component: RseViewComponent;
  let fixture: ComponentFixture<RseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
