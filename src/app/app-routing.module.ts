import { NgModule } 	from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SearchComponent } from './components/search/search.component';

const routes = [
	{ path: '', component: LandingComponent },
	{ path: 'search', component: SearchComponent },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
