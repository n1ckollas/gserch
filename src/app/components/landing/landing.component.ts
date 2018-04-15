import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
	position:object;
	lat: number = 40.6239833;
  	lng: number = -74.0342588;


  constructor() { }

  ngOnInit() {
  	// this.getLocation();
  }

  getLocation(): void{
  	let promice = new Promise(function(resolve, reject){
  		if(navigator.geolocation){
  			navigator.geolocation.getCurrentPosition(function(position){
  				resolve(position);
  			})
  		}
  	});
  	promice.then((sucess) => {
  		this.position = sucess;
  	})
  }

}
