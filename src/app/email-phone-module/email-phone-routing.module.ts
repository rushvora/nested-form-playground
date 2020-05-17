import { Routes, RouterModule } from '@angular/router';
import { EmailPhoneMasterFormComponent } from './email-phone-master-form/email-phone-master-form.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: EmailPhoneMasterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmailPhoneRoutingModule { }
