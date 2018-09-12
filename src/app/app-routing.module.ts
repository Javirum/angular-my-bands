import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BandsComponent } from './bands/bands.component';

const routes: Routes = [
  { path: 'bands', component: BandsComponent }
];

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }
