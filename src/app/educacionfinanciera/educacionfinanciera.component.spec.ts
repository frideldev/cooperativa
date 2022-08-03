import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionfinancieraComponent } from './educacionfinanciera.component';

describe('EducacionfinancieraComponent', () => {
  let component: EducacionfinancieraComponent;
  let fixture: ComponentFixture<EducacionfinancieraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducacionfinancieraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionfinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
