import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApptsPage } from './appts.page';

const routes: Routes = [
  {
    path: '',
    component: ApptsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApptsPageRoutingModule {}
