import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AppointmentdetailPageRoutingModule } from './appointmentdetail-routing.module';

import { AppointmentdetailPage } from './appointmentdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    AppointmentdetailPageRoutingModule
  ],
  declarations: [AppointmentdetailPage]
})
export class AppointmentdetailPageModule {}
