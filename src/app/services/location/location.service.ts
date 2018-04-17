import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {
	position:any;

  constructor() { 
  	console.log('location service is on')
  }

  getLocation(){
  	let promice = new Promise(function(resolve, reject){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
          resolve([
          	position.coords.latitude, 
          	position.coords.longitude, 
          	position.coords.accuracy
          	]);
        })
      }
    });
    promice.then((sucess) => {
      this.position = sucess;
    })
    return promice
  }


}
