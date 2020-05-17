import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent implements OnInit {
  contact: FormGroup;

  constructor(private formBuilder: FormBuilder, private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.contact = this.controlContainer.control as FormGroup;
    if (this.contact) {
      this.contact.addControl('firstName', this.formBuilder.control('', Validators.required));
      this.contact.addControl('lastName', this.formBuilder.control('', Validators.required));
      this.contact.addControl('email', this.formBuilder.control('', Validators.required));
      this.contact.addControl('phone', this.formBuilder.control('', Validators.required));
    }
  }
}
