import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutPageService {

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get('./assets/json/about.json')
  }
}
