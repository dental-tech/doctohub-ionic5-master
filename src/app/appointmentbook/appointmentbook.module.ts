import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AppointmentbookPageRoutingModule } from './appointmentbook-routing.module';

import { AppointmentbookPage } from './appointmentbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    AppointmentbookPageRoutingModule
  ],
  declarations: [AppointmentbookPage]
})
export class AppointmentbookPageModule {}
