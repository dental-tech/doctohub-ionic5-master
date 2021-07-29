import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentbookPage } from './appointmentbook.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentbookPageRoutingModule {}
