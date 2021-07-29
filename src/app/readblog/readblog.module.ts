import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ReadblogPageRoutingModule } from './readblog-routing.module';

import { ReadblogPage } from './readblog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    ReadblogPageRoutingModule
  ],
  declarations: [ReadblogPage]
})
export class ReadblogPageModule {}
