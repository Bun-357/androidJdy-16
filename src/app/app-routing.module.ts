import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'ble-home',
    pathMatch: 'full'
  },
  {
    path: 'ble-home',
    loadChildren: () => import('./pages/ble-home/ble-home.module').then( m => m.BleHomePageModule)
  },
  {
    path: 'ble2',
    loadChildren: () => import('./pages/ble2/ble2.module').then( m => m.Ble2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
