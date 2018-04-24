import { Component, OnInit } from '@angular/core';
import { GglPlaceCompService } from '../../services/placeComp/ggl-place-comp.service';
import { LocationService } from '../../services/location/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	addr:string= '';
	cat: string = '';
	radius: number = 15;
	place:string = '';
	isDisabled:boolean = false; //miles convert to meters for ggl
	ulDisplay:string = '';
	location:any;
	addrData:any;
	placeData:any;
	ul2Dispaly:string = '';

	
  constructor(
  	private placeAutoComplete: GglPlaceCompService,
  	private locationSrvc: LocationService,
  	public router:Router
  	) { }

  ngOnInit() {
  	this.locationSrvc.getLocation()
  	.then((success: {}) =>{
  		this.location = success;
  	});

  }

  startOver(){
  	this.addr = '';
	this.cat = '';
	this.radius = 15;
	this.place = '';
	this.isDisabled = false;
  }

  getCoords(){
  	this.isDisabled = true;
  	this.ulDisplay = 'none';
  	this.addr = 'Got your coordinates.';
  	if(!this.location){
	  	this.locationSrvc.getLocation()
	  	.then((success: {}) =>{
	  		this.location = success;
	  	});	
  	}

  }

  addrSearch(event: any){
  	this.ulDisplay = 'block';
  	this.addr = event.target.value;
  	if (this.addr != ''){
  		//do the google query complete search.
  		this.placeAutoComplete.searchAddr(this.addr, 'address')
  		.subscribe(data => {
  			this.addrData = JSON.parse(data.toString());
  		});
  		
  	}
  }
  setValue(value){
  	this.addr = value;
  	this.ulDisplay = 'none';
  }
  catSearch(event: any){
  	
  	this.cat = event.target.value
  }
  placeSearch(event: any){
  	this.ul2Dispaly = 'block';
  	
  	this.place = event.target.value
  }
  onSubmit({value, valid}){

  	var data = {
  		locationlat: 0,
  		locationlon: 0,
  		address: '',
  		cat: '',
  		placeSearch:'',
  		radius:0
  	}

  	if(valid){

	  	if(this.location){
	  		data.locationlat = this.location[0];
	  		data.locationlon = this.location[1];
	  	}
	  	data.address = value.address;
	  	data.cat = value.cat;
	  	data.placeSearch = value.placeSearch;
	  	data.radius = value.radius;
	  	var datastr = JSON.stringify(data);
	  	//Navigate a router to an activated rout
	  	this.router.navigate(['result/' + datastr]);
  	}
  }
}
