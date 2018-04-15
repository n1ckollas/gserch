import { NgModule } 	from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes = [
	{ path: '', component: LandingComponent },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
