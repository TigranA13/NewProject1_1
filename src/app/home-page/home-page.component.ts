import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import {HomePageService} from "./home-page.service";
import {GalleryService} from "../gallery-page/gallery.service";

declare var $:any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  data:any=[];
  galleryData; any=[];

  constructor(private titleService: Title, private homeservice: HomePageService, private galleryservice: GalleryService) { }

  ngOnInit() {
    this.titleService.setTitle( "Home" );
    this.homeservice.getData().subscribe(data=>{
      this.data = data
    });
    this.galleryservice.getData().subscribe(data=>{
      this.galleryData = data;
    });
    $(document).ready(function(){
      $('.carousel.carousel-slider').carousel({
        indicators: true,
        fullWidth:true,
        
      });
      setInterval(function(){
        $('.carousel.carousel-slider').carousel('next')
      }, 4000)
    });
  }

}
