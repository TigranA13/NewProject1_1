import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('./assets/json/gallery/gallery.json')
  }
  getData1(){
    return this.http.get('./assets/json/gallery/gallery-d.json')
  }
  getData2(){
    return this.http.get('./assets/json/gallery/gallery-d2.json')
  }
  getData3(){
    return this.http.get('./assets/json/gallery/gallery-d3.json')
  }
  getData4(){
    return this.http.get('./assets/json/gallery/gallery-d4.json')
  }
  getData5(){
    return this.http.get('./assets/json/gallery/gallery-d5.json')
  }
  getData6(){
    return this.http.get('./assets/json/gallery/gallery-d6.json')
  }
  getData7(){
    return this.http.get('./assets/json/gallery/gallery-d7.json')
  }
  getData8(){
    return this.http.get('./assets/json/gallery/gallery-d8.json')
  }
  getData9(){
    return this.http.get('./assets/json/gallery/gallery-d9.json')
  }
  getInfo(){
    return this.http.get('./assets/json/gallery/gallery-info.json')
  }
  getInfo1(){
    return this.http.get('./assets/json/gallery/gallery-d-info.json')
  }
  getInfo2(){
    return this.http.get('./assets/json/gallery/gallery-d2-info.json')
  }
  getInfo3(){
    return this.http.get('./assets/json/gallery/gallery-d3-info.json')
  }
  getInfo4(){
    return this.http.get('./assets/json/gallery/gallery-d4-info.json')
  }
  getInfo5(){
    return this.http.get('./assets/json/gallery/gallery-d5-info.json')
  }
  getInfo6(){
    return this.http.get('./assets/json/gallery/gallery-d6-info.json')
  }
  getInfo7(){
    return this.http.get('./assets/json/gallery/gallery-d7-info.json')
  }
  getInfo8(){
    return this.http.get('./assets/json/gallery/gallery-d8-info.json')
  }
  getInfo9(){
    return this.http.get('./assets/json/gallery/gallery-d9-info.json')
  }
}
