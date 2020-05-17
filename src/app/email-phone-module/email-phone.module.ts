import { NgModule } from '@angular/core';
import { EmailPhoneMasterFormComponent } from './email-phone-master-form/email-phone-master-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailPhoneRoutingModule } from './email-phone-routing.module';
import { EmailPhoneInputComponent } from './email-phone-input/email-phone-input.component';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    EmailPhoneMasterFormComponent,
    EmailPhoneInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmailPhoneRoutingModule,
    SharedModule
  ]
})

export class EmailPhoneInputModule { }
