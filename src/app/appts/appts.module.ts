import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApptsPageRoutingModule } from './appts-routing.module';

import { ApptsPage } from './appts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApptsPageRoutingModule
  ],
  declarations: [ApptsPage]
})
export class ApptsPageModule {}
