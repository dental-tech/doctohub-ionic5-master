import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadblogPage } from './readblog.page';

const routes: Routes = [
  {
    path: '',
    component: ReadblogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadblogPageRoutingModule {}
