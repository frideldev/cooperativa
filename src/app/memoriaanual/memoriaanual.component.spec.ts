import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaanualComponent } from './memoriaanual.component';

describe('MemoriaanualComponent', () => {
  let component: MemoriaanualComponent;
  let fixture: ComponentFixture<MemoriaanualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriaanualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriaanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
