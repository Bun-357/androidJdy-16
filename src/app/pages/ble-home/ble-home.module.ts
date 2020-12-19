import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BleHomePageRoutingModule } from './ble-home-routing.module';

import { BleHomePage } from './ble-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BleHomePageRoutingModule
  ],
  declarations: [BleHomePage]
})
export class BleHomePageModule {}
