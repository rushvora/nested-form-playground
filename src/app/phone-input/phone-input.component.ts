import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css']
})
export class PhoneInputComponent implements OnInit, OnChanges {
  public form: FormGroup;
  @Input() formControlNameCustom: string;
  @Input() nameCustom: string;
  @Input() disabled: boolean;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.Canada];

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.form = this.controlContainer.control as FormGroup;
    this.setDisableState(this.disabled);
  }

  ngOnChanges() {
    this.setDisableState(this.disabled);
  }

  setDisableState(value) {
    if (this.form &&  this.form.controls[this.formControlNameCustom]) {
      if (value) {
        this.form.controls[this.formControlNameCustom].disable();
      } else {
        this.form.controls[this.formControlNameCustom].enable();
      }
    }
  }

}
