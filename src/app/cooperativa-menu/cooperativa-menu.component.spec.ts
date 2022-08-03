import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativaMenuComponent } from './cooperativa-menu.component';

describe('CooperativaMenuComponent', () => {
  let component: CooperativaMenuComponent;
  let fixture: ComponentFixture<CooperativaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperativaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
