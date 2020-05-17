import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MasterFormComponent } from './master-form/master-form.component';

const routes: Routes = [
  {
    path: '',
    component: MasterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddressRoutingModule {}
