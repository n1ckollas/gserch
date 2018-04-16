import { Component, OnInit } from '@angular/core';
import { Marker } from '../../intfaces/Marker';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
	position:object;
	lat: number = 40.6239833;
  	lng: number = -74.0342588;
  	mapStyles = [
  	{
  		stylers: [
  		{saturation: -100}
  		]
  	}
  	];
  	marker: Marker = {	
	  	lat: 40.6239833,
		lng: -74.0342588,
		label: 'Your position',
		draggable: 	false,
		iconUrl: '../../../assets/images/locMarker_15.png',
	} 


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
