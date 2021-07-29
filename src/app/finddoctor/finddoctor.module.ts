import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { FinddoctorPageRoutingModule } from './finddoctor-routing.module';

import { FinddoctorPage } from './finddoctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    FinddoctorPageRoutingModule
  ],
  declarations: [FinddoctorPage]
})
export class FinddoctorPageModule {}
