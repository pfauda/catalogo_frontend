import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I7x24Component } from './i7x24.component';

describe('I7x24Component', () => {
  let component: I7x24Component;
  let fixture: ComponentFixture<I7x24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I7x24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I7x24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
