import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl, ControlContainer, Validators } from '@angular/forms';
import { ɵb } from '@rushvora/ngx-intl-tel-input';

@Component({
  selector: 'app-email-phone-input',
  templateUrl: './email-phone-input.component.html',
  styleUrls: ['./email-phone-input.component.css']
})
export class EmailPhoneInputComponent implements OnInit, OnChanges {
  emailsAndPhonesForm: FormGroup;
  @Input() emailArrayName: string;
  @Input() phoneArrayName: string;
  @Input() showEmails: boolean;
  @Input() showPhones: boolean;
  @Input() submitted: boolean;
  @Output() submittedChange = new EventEmitter<boolean>();
  emails: FormArray;
  phones: FormArray;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {

    this.emailsAndPhonesForm = this.controlContainer.control as FormGroup;
    if (this.emailArrayName) {
      this.emails = this.emailsAndPhonesForm.get(this.emailArrayName) as FormArray;
    } else {
      this.emails = this.emailsAndPhonesForm.get('emails') as FormArray;
      this.emailArrayName = 'emails';
    }
    if (this.phoneArrayName) {
      this.phones = this.emailsAndPhonesForm.get(this.phoneArrayName) as FormArray;
    } else {
      this.phones = this.emailsAndPhonesForm.get('phones') as FormArray;
      this.phoneArrayName = 'phones';
    }
  }

  addEmail() {
    this.emails.push(new FormControl('', [Validators.required, Validators.email]));
    this.showEmails = true;
    this.submitted = false;
  }

  addPhone() {
    this.phones.push(new FormControl('', [Validators.required]));
    this.showPhones = true;
    this.submitted = false;
  }

  deleteEmail(index) {
    this.emails.removeAt(index);
  }

  deletePhone(index) {
    this.phones.removeAt(index);
  }

  ngOnChanges() {
    console.log(`ngOnChanges triggered`);
    if (this.showEmails && this.emails) {
      this.emails.controls.forEach(control => {
        control.setValidators([Validators.required, Validators.email]);
        control.updateValueAndValidity();
      });
    } else if (this.emails) {
      this.emails.controls.forEach(control => {
        control.setValidators(Validators.email);
        control.updateValueAndValidity();
      });
    }

    if (this.showPhones && this.phones) {
      this.phones.controls.forEach(control => {
        control.setValidators([Validators.required, ɵb]);
        control.updateValueAndValidity();
      });
    } else if (this.phones) {
      this.phones.controls.forEach(control => {
        control.clearValidators();
        control.updateValueAndValidity();
        control.setValidators([ɵb]);
        control.updateValueAndValidity();
      });
    }
  }
}
