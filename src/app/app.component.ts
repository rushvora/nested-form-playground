import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nested-form-playground';
  form: FormGroup;
  emailsAndPhones: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      notifications: this.fb.group({
        emailsAndPhones: []
      })
    });
    this.emailsAndPhones = this.form.get('notifications.emailsAndPhones') as FormGroup;
  }

  submit() {
    console.log(this.form.value);
  }
}
