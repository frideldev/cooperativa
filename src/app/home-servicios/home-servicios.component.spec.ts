import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiciosComponent } from './home-servicios.component';

describe('HomeServiciosComponent', () => {
  let component: HomeServiciosComponent;
  let fixture: ComponentFixture<HomeServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
