import { NgModule } 	from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';

const routes = [
	{ path: '', component: LandingComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'result/:result', component: ResultsComponent },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
