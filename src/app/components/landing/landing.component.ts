import { Component, OnInit } from '@angular/core';
import { Marker } from '../../intfaces/Marker';
import { LocationService } from '../../services/location/location.service';
import { debounceTime } from 'rxjs/operators';

declare var $:any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
	position:any;
	centerLat: number = 39.50;//center
  centerLng: number = -92.35;//center
  mapZoom:number = 4; //13 is optimal
  height:string;
  mapStyles = [
  	{
  		stylers: [{saturation: -100}]
  	}
  ];

  marker: Marker = {	
	  lat: 39.50,//40.6239833,
		lng: -92.35,//-74.0342588,
		label: 'Your position',
    visible: false,
		iconUrl: '../../../assets/images/locMarker_15.png',
	} 


  constructor(private locationSrvc: LocationService) { }

  ngOnInit() {
    this.height = ($(window).height()).toString() + 'px'
  }
  onResize(event){
    this.height = (event.target.innerHeight).toString() + 'px'
  }

  getMyLocation(): void{
    this.locationSrvc.getLocation()
    .then((sucess) => {
      console.log(sucess);
        if(sucess){
        this.position = sucess;
        this.centerLat = this.position[0];
        this.centerLng = this.position[1];
        this.marker.lat = this.position[0];
        this.marker.lng = this.position[1];
        this.marker.visible = true;
        this.mapZoom = 13;
      }
    })
  }

  // getLocation(): void{
  // 	let promice = new Promise(function(resolve, reject){
  // 		if(navigator.geolocation){
  // 			navigator.geolocation.getCurrentPosition(function(position){
  // 				resolve(position);
  // 			})
  // 		}
  // 	});
  // 	promice.then((sucess) => {
  // 		this.position = sucess;
  // 	})
  // }

}
