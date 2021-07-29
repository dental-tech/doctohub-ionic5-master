import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
   
import { IonicModule } from '@ionic/angular';

import { ChatwithdoctorPageRoutingModule } from './chatwithdoctor-routing.module';

import { ChatwithdoctorPage } from './chatwithdoctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,     
    ChatwithdoctorPageRoutingModule
  ],
  declarations: [ChatwithdoctorPage]
})
export class ChatwithdoctorPageModule {}
