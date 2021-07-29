import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { LabdetailsPageRoutingModule } from './labdetails-routing.module';

import { LabdetailsPage } from './labdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,     
    LabdetailsPageRoutingModule
  ],
  declarations: [LabdetailsPage]
})
export class LabdetailsPageModule {}
