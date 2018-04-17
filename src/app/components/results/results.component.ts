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
	responce:object;
	checked:boolean;

  constructor(private route: ActivatedRoute,
  				private nearSrch: NearsearchService) { }

  ngOnInit() {
  	this.searchData = JSON.parse(this.route.snapshot.paramMap.get('result'));
  	console.log(this.searchData);
  	 this.nearSrch.searchNear(this.searchData)
  		.subscribe(data => {
  			this.responce = JSON.parse(data.toString());
  		});
  }

  openNow(searhData){
  }
  onChange($event){
  }

}
