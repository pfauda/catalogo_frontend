import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlviewerComponent } from './htmlviewer.component';

describe('HtmlviewerComponent', () => {
  let component: HtmlviewerComponent;
  let fixture: ComponentFixture<HtmlviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
