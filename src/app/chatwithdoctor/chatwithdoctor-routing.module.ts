import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatwithdoctorPage } from './chatwithdoctor.page';

const routes: Routes = [
  {
    path: '',
    component: ChatwithdoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatwithdoctorPageRoutingModule {}
