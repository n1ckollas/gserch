import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppRoutingModule } from './/app-routing.module';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB5kGDB9MysJ3GbxTQhc6Nimh0vjJKRiJc',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
