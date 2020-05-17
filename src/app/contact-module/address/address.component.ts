import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})

export class AddressComponent implements OnInit {
  addressForm: FormGroup;

  constructor(private controlContainer: ControlContainer, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.controlContainer.control as FormGroup;
    if (this.addressForm) {
      this.addressForm.addControl('streetOne', this.formBuilder.control('', Validators.required));
      this.addressForm.addControl('streetTwo', this.formBuilder.control(''));
      this.addressForm.addControl('city', this.formBuilder.control('', Validators.required));
      this.addressForm.addControl('state', this.formBuilder.control('', Validators.required));
      this.addressForm.addControl('country', this.formBuilder.control('', Validators.required));
      this.addressForm.addControl('zipcode', this.formBuilder.control('', Validators.required));
      this.addressForm.addControl('latitude', this.formBuilder.control(''));
      this.addressForm.addControl('longitude', this.formBuilder.control(''));
    }
  }
}
