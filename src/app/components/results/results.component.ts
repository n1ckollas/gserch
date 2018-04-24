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
	results:any;
	checked:boolean;
	nothingFound:boolean;

  constructor(private route: ActivatedRoute,
  				private nearSrch: NearsearchService) { }

  ngOnInit() {
  	this.searchData = JSON.parse(this.route.snapshot.paramMap.get('result'));
  	 this.nearSrch.searchNear(this.searchData)
  		.subscribe(data => {
  			this.responce = JSON.parse(data.toString());
  			this.results = this.responce.results
  			if(this.responce.status != 'OK'){
  				this.nothingFound = true
  			}
  		});
  }

  onChange(event){
    console.log(this.results);
    console.log(this.responce.results);
    if(event.target.checked == true){
      // sort out an array
      var i;
      var results = this.responce.results
      var sorted_results = []
      for(i = 0; i < results.length; i++){
        if (results[i].opening_hours){
           if (results[i].opening_hours.open_now){
             sorted_results.push(results[i])
           }
         }
      }
      this.results = sorted_results;
    }else{
      //reassign back the data
      this.results = this.responce.results
    }
  }

}
