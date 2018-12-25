import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('http://localhost:3000/gallery-page')
  }
  getData1(){
    return this.http.get('http://localhost:3000/gallery-d1-page')
  }
  getData2(){
    return this.http.get('http://localhost:3000/gallery-d2-page')
  }
  getData3(){
    return this.http.get('http://localhost:3000/gallery-d3-page')
  }
  getData4(){
    return this.http.get('http://localhost:3000/gallery-d4-page')
  }
  getData5(){
    return this.http.get('http://localhost:3000/gallery-d5-page')
  }
  getData6(){
    return this.http.get('http://localhost:3000/gallery-d6-page')
  }
  getData7(){
    return this.http.get('http://localhost:3000/gallery-d7-page')
  }
  getData8(){
    return this.http.get('http://localhost:3000/gallery-d8-page')
  }
  getData9(){
    return this.http.get('http://localhost:3000/gallery-d9-page')
  }
}
