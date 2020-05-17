import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-master-form',
  templateUrl: './master-form.component.html'
})

export class MasterFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      contact: this.formBuilder.group({}, Validators.required),
      address: this.formBuilder.group({}, Validators.required)
    });
  }
}
