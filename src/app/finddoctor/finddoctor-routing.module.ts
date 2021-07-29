import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinddoctorPage } from './finddoctor.page';

const routes: Routes = [
  {
    path: '',
    component: FinddoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinddoctorPageRoutingModule {}
