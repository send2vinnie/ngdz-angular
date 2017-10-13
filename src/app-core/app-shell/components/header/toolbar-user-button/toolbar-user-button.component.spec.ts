import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarUserButtonComponent } from './toolbar-user-button.component';

describe('ToolbarUserButtonComponent', () => {
  let component: ToolbarUserButtonComponent;
  let fixture: ComponentFixture<ToolbarUserButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarUserButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarUserButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
