import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMethodComponent } from './form-method.component';

describe('FormMethodComponent', () => {
  let component: FormMethodComponent;
  let fixture: ComponentFixture<FormMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
