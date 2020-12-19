import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ble2Page } from './ble2.page';

const routes: Routes = [
  {
    path: '',
    component: Ble2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ble2PageRoutingModule {}
