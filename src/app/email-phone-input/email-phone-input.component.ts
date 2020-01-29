import { Component, OnInit, OnDestroy, forwardRef } from '@angular/core';
import {
  FormGroup, FormBuilder, FormArray, FormControl, ControlValueAccessor,
  Validator, NG_VALUE_ACCESSOR, NG_VALIDATORS
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-email-phone-input',
  templateUrl: './email-phone-input.component.html',
  styleUrls: ['./email-phone-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailPhoneInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailPhoneInputComponent),
      multi: true
    }
  ]
})
export class EmailPhoneInputComponent implements OnInit, ControlValueAccessor, Validator, OnDestroy {
  emailsAndPhonesForm: FormGroup;
  emails: FormArray;
  phones: FormArray;
  private destroy$ = new Subject();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.emailsAndPhonesForm = this.fb.group({
      emails: this.fb.array([]),
      phones: this.fb.array([])
    });
    this.emails = this.emailsAndPhonesForm.get('emails') as FormArray;
    this.phones = this.emailsAndPhonesForm.get('phones') as FormArray;
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.emailsAndPhonesForm.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.emailsAndPhonesForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.emailsAndPhonesForm.valid ? null : { invalidForm: { valid: false, message: `Email or Phone is invalid.` } };
  }

  addEmail() {
    this.emails.push(new FormControl(''));
  }

  addPhone() {
    this.phones.push(new FormControl(''));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
