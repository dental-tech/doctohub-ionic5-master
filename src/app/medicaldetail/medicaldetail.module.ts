import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { MedicaldetailPageRoutingModule } from './medicaldetail-routing.module';

import { MedicaldetailPage } from './medicaldetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    MedicaldetailPageRoutingModule
  ],
  declarations: [MedicaldetailPage]
})
export class MedicaldetailPageModule {}
