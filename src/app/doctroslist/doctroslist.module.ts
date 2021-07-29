import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
    
import { IonicModule } from '@ionic/angular';

import { DoctroslistPageRoutingModule } from './doctroslist-routing.module';

import { DoctroslistPage } from './doctroslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    DoctroslistPageRoutingModule
  ],
  declarations: [DoctroslistPage]
})
export class DoctroslistPageModule {}
