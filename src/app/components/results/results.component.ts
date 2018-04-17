import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NearsearchService } from '../../services/nearsearch/nearsearch.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
	p: number = 1;
	searchData:object;
	responce:any;
	checked:boolean;
	nothingFound:boolean;

  constructor(private route: ActivatedRoute,
  				private nearSrch: NearsearchService) { }

  ngOnInit() {
  	this.searchData = JSON.parse(this.route.snapshot.paramMap.get('result'));
  	console.log(this.responce);
  	 this.nearSrch.searchNear(this.searchData)
  		.subscribe(data => {
  			this.responce = JSON.parse(data.toString());
  			if(this.responce.status != 'OK'){
  				this.nothingFound = true
  			}
  			console.log(this.responce.status);
  		});
  }

  openNow(searhData){
  }
  onChange($event){
  }

}
