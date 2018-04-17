import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class NearsearchService {

  constructor(private http:HttpClient) { }

  searchNear(value){
  	var headers = new HttpHeaders();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('/api/v2/near', value, {headers: headers})
  }
}
