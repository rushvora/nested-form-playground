import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EmailInputComponent } from './email-input/email-input.component';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  declarations: [
    EmailInputComponent,
    PhoneInputComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
  ],
  exports: [
    EmailInputComponent,
    PhoneInputComponent,
    TextInputComponent,
    ReactiveFormsModule
  ]
})

export class SharedModule { }
