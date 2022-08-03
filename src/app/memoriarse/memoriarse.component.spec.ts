import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriarseComponent } from './memoriarse.component';

describe('MemoriarseComponent', () => {
  let component: MemoriarseComponent;
  let fixture: ComponentFixture<MemoriarseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriarseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
