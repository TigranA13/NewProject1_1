import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import {HomePageService} from "./home-page.service";
import {GalleryService} from "../gallery-page/gallery.service";


declare let $:any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  data:any=[];
  galleryData: any=[];

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
      $('.materialboxed').materialbox();
      $('.carousel').carousel({
        indicators: true,
        fullWidth:true,
        // noWrap: true
      });
      // move next carousel
      $('.moveNextCarousel').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('next');
      });

      // move prev carousel
      $('.movePrevCarousel').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('prev');
      });
      // setInterval(function(){
      //   $('.carousel').carousel('next');
      // }, 5000)
    });

  }




}
