import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalmapPage } from './medicalmap.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalmapPageRoutingModule {}
