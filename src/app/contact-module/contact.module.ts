import { NgModule } from '@angular/core';
import { AddressComponent } from './address/address.component';
import { SharedModule } from '../shared-module/shared-module.module';
import { AddressRoutingModule } from './contact-routing.module';
import { MasterFormComponent } from './master-form/master-form.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AddressComponent,
    ContactComponent,
    MasterFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AddressRoutingModule
  ]
})

export class ContactModule { }
