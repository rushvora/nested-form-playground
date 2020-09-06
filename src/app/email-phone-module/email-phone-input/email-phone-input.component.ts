import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormArray, FormControl, ControlContainer, Validators } from '@angular/forms';
import { ɵb as IntlPhoneValidator } from 'ngx-intl-tel-input';

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
  emails: FormArray;
  phones: FormArray;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {

    this.emailsAndPhonesForm = this.controlContainer.control as FormGroup;
    if (this.emailArrayName) {
      this.emails = this.emailsAndPhonesForm.get(this.emailArrayName) as FormArray;
    }

    if (this.phoneArrayName) {
      this.phones = this.emailsAndPhonesForm.get(this.phoneArrayName) as FormArray;
    }
  }

  addEmail() {
    if (this.emails.valid) {
      this.emails.push(new FormControl('', [Validators.required, Validators.email]));
      this.showEmails = true;
      this.emails.markAsUntouched();
    } else {
      this.showEmails = true;
      this.emails.markAllAsTouched();
    }
  }

  addPhone() {
    if (this.phones.valid) {
      this.phones.push(new FormControl('', [Validators.required]));
      this.showPhones = true;
      this.phones.markAsUntouched();
    } else {
      this.showPhones = true;
      this.phones.markAllAsTouched();
    }
  }

  deleteEmail(index) {
    this.emails.removeAt(index);
  }

  deletePhone(index) {
    this.phones.removeAt(index);
  }

  disablePhone(index) {
    this.phones.at(index).disable();
  }

  enablePhone(index) {
    this.phones.at(index).enable();
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
        control.setValidators([Validators.required, IntlPhoneValidator]);
        control.updateValueAndValidity();
      });
    } else if (this.phones) {
      this.phones.controls.forEach(control => {
        control.clearValidators();
        control.updateValueAndValidity();
        control.setValidators([IntlPhoneValidator]);
        control.updateValueAndValidity();
      });
    }
  }
}
