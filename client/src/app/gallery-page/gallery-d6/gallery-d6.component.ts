import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {GalleryService} from "../gallery.service";

declare let $:any;

@Component({
  selector: 'app-gallery-d6',
  templateUrl: './gallery-d6.component.html',
  styleUrls: ['./gallery-d6.component.css']
})
export class GalleryD6Component implements OnInit {

  info:any=[];
  data:any=[];

  constructor( private galleryservice: GalleryService, private titleService: Title) { }


  ngOnInit() {
    this.titleService.setTitle( "Экскаваторы-погрузчики" );
    this.galleryservice.getData6().subscribe(data=>{
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
