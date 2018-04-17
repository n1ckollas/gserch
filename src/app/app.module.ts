//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


// Components
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';

// Services
import { GglPlaceCompService } from './services/placeComp/ggl-place-comp.service';
import { LocationService } from './services/location/location.service';
import { NearsearchService } from './services/nearsearch/nearsearch.service';

import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB5kGDB9MysJ3GbxTQhc6Nimh0vjJKRiJc',
    }),
  ],
  providers: [
    GglPlaceCompService,
    LocationService,
    NearsearchService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
