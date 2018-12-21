import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {ServicePageService} from "./service-page.service";

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  data:any=[];

  constructor(private titleService: Title, private servicesService: ServicePageService) { }

  ngOnInit() {
    this.titleService.setTitle( "Services" );
    this.servicesService.getData().subscribe(data=>{
      this.data = data
    })
  }

}
