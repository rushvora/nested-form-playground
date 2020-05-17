import { Component, OnInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './email-phone-master-form.component.html'
})
export class EmailPhoneMasterFormComponent implements OnInit, AfterContentChecked {
  title = 'nested-form-playground';
  form: FormGroup;
  emails: FormArray;
  phones: FormArray;
  emailData = ['r@r.com', 'w@w.com', 't@t.com'];
  phoneData = ['+18147900669', '2015554444', '+918080381919'];
  // phoneData = [];
  emailCheckbox: boolean;
  phoneCheckbox: boolean;
  submitted = false;

  constructor(private fb: FormBuilder, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.form = this.fb.group({
      notifications: this.fb.group({
        notificationEmails: this.fb.array([]),
        notificationSms: this.fb.array([])
      })
    });
    this.emails = this.form.get('notifications.notificationEmails') as FormArray;
    this.phones = this.form.get('notifications.notificationSms') as FormArray;

    if ((this.emailData && this.emailData.length) || (this.phoneData && this.phoneData.length)) {
      this.populateFormArray();
    }
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  populateFormArray() {
    if (this.emailData && this.emailData.length) {
      this.emailCheckbox = true;
      this.emailData.forEach(email => {
        this.emails.push(new FormControl(email, [Validators.required, Validators.email]));
      });
    }
    if (this.phoneData && this.phoneData.length) {
      this.phoneCheckbox = true;
      this.phoneData.forEach(phone => {
        this.phones.push(new FormControl(phone, Validators.required));
      });
    }
  }

  submit() {
    this.submitted = true;
    console.log(this.form.valid, this.form.status);
  }
}
