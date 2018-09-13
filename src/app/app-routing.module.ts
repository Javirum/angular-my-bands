import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BandsComponent } from './bands/bands.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BandDetailComponent } from './band-detail/band-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: BandDetailComponent },
  { path: 'bands', component: BandsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
