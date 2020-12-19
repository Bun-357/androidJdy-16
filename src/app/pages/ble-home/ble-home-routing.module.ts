import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BleHomePage } from './ble-home.page';

const routes: Routes = [
  {
    path: '',
    component: BleHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BleHomePageRoutingModule {}
