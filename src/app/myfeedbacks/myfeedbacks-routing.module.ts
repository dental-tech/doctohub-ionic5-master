import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyfeedbacksPage } from './myfeedbacks.page';

const routes: Routes = [
  {
    path: '',
    component: MyfeedbacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyfeedbacksPageRoutingModule {}
