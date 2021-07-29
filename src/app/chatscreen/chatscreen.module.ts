import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { ChatscreenPageRoutingModule } from './chatscreen-routing.module';

import { ChatscreenPage } from './chatscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    ChatscreenPageRoutingModule
  ],
  declarations: [ChatscreenPage]
})
export class ChatscreenPageModule {}
