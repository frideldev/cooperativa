import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UifComponent } from './uif.component';

describe('UifComponent', () => {
  let component: UifComponent;
  let fixture: ComponentFixture<UifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
