import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
	position:object;

  constructor() {}

  ngOnInit() {}

  getLocation(): void{
  	let promice = new Promise(function(resolve, reject){
  		if(navigator.geolocation){
  			navigator.geolocation.getCurrentPosition(function(position){
  				resolve(position);
  			}
  		}
  	});
  	promice.then((sucess) => {
  		console.log(sucess.coords);
  		this.position = sucess;
  	})
  }
}
