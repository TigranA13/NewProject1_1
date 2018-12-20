import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('./assets/json/gallery.json')
  }
  getData1(){
    return this.http.get('./assets/json/gallery-d.json')
  }
  getData2(){
    return this.http.get('./assets/json/gallery-d2.json')
  }
  getData3(){
    return this.http.get('./assets/json/gallery-d3.json')
  }
  getData4(){
    return this.http.get('./assets/json/gallery-d4.json')
  }
  getData5(){
    return this.http.get('./assets/json/gallery-d5.json')
  }
  getData6(){
    return this.http.get('./assets/json/gallery-d6.json')
  }
  getData7(){
    return this.http.get('./assets/json/gallery-d7.json')
  }
  getData8(){
    return this.http.get('./assets/json/gallery-d8.json')
  }
  getData9(){
    return this.http.get('./assets/json/gallery-d9.json')
  }
}
