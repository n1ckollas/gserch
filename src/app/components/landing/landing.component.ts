import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
	position:object;

  constructor() {}

  ngOnInit() {
  	// this.getLocation()
  }

  primises(){
  	let promice = new Promise(function(resolve, reject){
  		if(navigator.geolocation){
  			navigator.geolocation.getCurrentPosition(function(position){
  				resolve(position);
  			}
  		}
  	});
  	promice.then((scss) => {
  		console.log(scss.coords);
  		this.position = scss;
  	})
  }

  getLocation(){
  	var r
  	console.log('clicked')
  	if (navigator.geolocation){
  		navigator.geolocation.getCurrentPosition(function(position){
  			var res = new Promise(function(resolve, reject){
  				resolve(position);
  			})
  			res.then(function(responce){
  				console.log(responce);
  			})
  		});
  	} else {
  		alert("Geolocation is not supported in this browser");
  	}
  }

}
