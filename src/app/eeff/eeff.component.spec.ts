import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeffComponent } from './eeff.component';

describe('EeffComponent', () => {
  let component: EeffComponent;
  let fixture: ComponentFixture<EeffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
