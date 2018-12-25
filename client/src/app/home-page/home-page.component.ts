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
  data2:any=[];
  data3:any=[];
  data4:any=[];


  constructor(private titleService: Title, private homeservice: HomePageService, private galleryservice: GalleryService) { }

  ngOnInit() {

    this.titleService.setTitle( "ГЛАВНАЯ" );
    this.homeservice.getData().subscribe(data=>{
      this.data.push(data[0]);
      this.data2 = data[0].info1;
      this.data3 = data[0].info2;
      this.data4 = data[0].info3;
    });
    this.galleryservice.getData().subscribe(data=>{
      this.galleryData = data[0].catalog;
    });

    $(document).ready(function(){
      $('.materialboxed').materialbox();

      setTimeout(function () {
        $('.modal').modal();
        $('.carousel').carousel({
          indicators: true,
          fullWidth: true,
          // noWrap: true
        });
        //  setInterval(function(){
        //    $('.carousel').carousel('next');
        // }, 4500)
      }, 500);

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

    });

  }



}
