import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ble2PageRoutingModule } from './ble2-routing.module';

import { Ble2Page } from './ble2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ble2PageRoutingModule
  ],
  declarations: [Ble2Page]
})
export class Ble2PageModule {}
