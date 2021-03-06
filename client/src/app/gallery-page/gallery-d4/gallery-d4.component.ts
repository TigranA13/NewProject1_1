import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {GalleryService} from "../gallery.service";

declare let $:any;

@Component({
  selector: 'app-gallery-d4',
  templateUrl: './gallery-d4.component.html',
  styleUrls: ['./gallery-d4.component.css']
})
export class GalleryD4Component implements OnInit {

  info:any=[];
  data:any=[];

  constructor( private galleryservice: GalleryService, private titleService: Title) { }


  ngOnInit() {
    this.titleService.setTitle( "Бортовые машины" );
    this.galleryservice.getData4().subscribe(data=>{
      this.data = data[0].catalog;
      this.info = data;
    });
    setTimeout(()=>{
      $(document).ready(function(){
        $('.modal').modal();
      });
    }, 500)
  }

}
