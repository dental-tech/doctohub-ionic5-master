import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctroslistPage } from './doctroslist.page';

const routes: Routes = [
  {
    path: '',
    component: DoctroslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctroslistPageRoutingModule {}
