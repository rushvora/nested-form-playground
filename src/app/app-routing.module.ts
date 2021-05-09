import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'emailphone',
    loadChildren: () => {
      return import('./email-phone-module/email-phone.module')
        .then(module => module.EmailPhoneInputModule);
    }
  },
  {
    path: 'contact',
    loadChildren: () => {
      return import('./contact-module/contact.module')
        .then(module => module.ContactModule);
    }
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
