import { Component, OnInit, forwardRef, OnDestroy, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, FormGroup,
   FormBuilder, Validator, AbstractControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    }
  ]
})
export class EmailInputComponent implements OnInit, ControlValueAccessor, Validator, OnDestroy {
  @Input() index: number;
  emailInputForm: FormGroup;
  private destroy$ = new Subject();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.emailInputForm = this.formBuilder.group({
      email: ['', Validators.email]
    });
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    // val && this.emailInputForm.patchValue(val, { emitEvent: false });
    val && this.emailInputForm.get('email').setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.emailInputForm.get('email').valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.emailInputForm.disabled : this.emailInputForm.enabled;
  }

  validate(_: AbstractControl) {
    return this.emailInputForm.valid ? null : { invalidForm: { valid: false, message: `Email field is invalid.` } };
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
