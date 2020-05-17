import { Component, forwardRef, OnInit, OnDestroy, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})

export class TextInputComponent implements OnInit, ControlValueAccessor, OnDestroy {
  @Input() type = 'text';
  @Input() inputClass = 'form-control';
  @Input() id: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() inputName: string;
  inputForm: FormGroup;
  private destroy$ = new Subject();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.inputForm = this.formBuilder.group({
      inputControl: ['']
    });
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    this.inputForm.get('inputControl').setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.inputForm.get('inputControl').valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        fn(value);
      });
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.inputForm.disable() : this.inputForm.enable();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
