import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class GglPlaceCompService {

  constructor(private http:HttpClient) { }

  searchAddr(value:string, place_type){
  	var headers = new HttpHeaders();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('/api/v1/address', {place: place_type, val:value}, {headers: headers})
  }
}
