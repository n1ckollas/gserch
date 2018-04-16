import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	ngOnInit(){
		$('#menu').sidr({
			name:'sidr',
			side:'right',
			});
		$('.item').click(function(){

			$.sidr('close', 'sidr');
		})
	}
}
