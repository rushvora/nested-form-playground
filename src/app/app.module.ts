import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { EmailPhoneInputComponent } from './email-phone-input/email-phone-input.component';
@NgModule({
  declarations: [
    AppComponent,
    PhoneInputComponent,
    EmailInputComponent,
    EmailPhoneInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
