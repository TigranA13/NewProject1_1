import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('http://localhost:3000/api/footer')
  }
}
