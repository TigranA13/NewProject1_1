import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {AboutPageService} from "./about-page.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  data:any=[];

  constructor(private titleService: Title, private aboutservice: AboutPageService) { }

  ngOnInit() {
    this.titleService.setTitle( "About Us" );

    this.aboutservice.getData().subscribe(data=>{
      this.data = data;
    })
  }

}
