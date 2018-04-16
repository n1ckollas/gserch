import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppRoutingModule } from './/app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { SearchComponent } from './components/search/search.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB5kGDB9MysJ3GbxTQhc6Nimh0vjJKRiJc',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
