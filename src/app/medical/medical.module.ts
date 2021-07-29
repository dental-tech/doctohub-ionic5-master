import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { MedicalPageRoutingModule } from './medical-routing.module';

import { MedicalPage } from './medical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    MedicalPageRoutingModule
  ],
  declarations: [MedicalPage]
})
export class MedicalPageModule {}
