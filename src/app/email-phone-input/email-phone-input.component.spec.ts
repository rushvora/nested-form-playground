import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPhoneInputComponent } from './email-phone-input.component';

describe('EmailPhoneInputComponent', () => {
  let component: EmailPhoneInputComponent;
  let fixture: ComponentFixture<EmailPhoneInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailPhoneInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
