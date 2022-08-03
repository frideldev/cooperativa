import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformerseComponent } from './informerse.component';

describe('InformerseComponent', () => {
  let component: InformerseComponent;
  let fixture: ComponentFixture<InformerseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformerseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
