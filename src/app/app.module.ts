import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BandsComponent } from './bands/bands.component';
import { BandDetailComponent } from './band-detail/band-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BandsComponent,
    BandDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
