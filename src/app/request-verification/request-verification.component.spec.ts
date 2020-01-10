import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVerificationComponent } from './request-verification.component';

describe('RequestVerificationComponent', () => {
  let component: RequestVerificationComponent;
  let fixture: ComponentFixture<RequestVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
