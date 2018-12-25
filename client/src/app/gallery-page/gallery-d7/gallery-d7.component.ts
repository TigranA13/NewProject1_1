import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {GalleryService} from "../gallery.service";

declare let $:any;

@Component({
  selector: 'app-gallery-d7',
  templateUrl: './gallery-d7.component.html',
  styleUrls: ['./gallery-d7.component.css']
})
export class GalleryD7Component implements OnInit {

  info:any=[];
  data:any=[];

  constructor( private galleryservice: GalleryService, private titleService: Title) { }


  ngOnInit() {
    this.titleService.setTitle( "Экскаваторы гусеничные" );
    this.galleryservice.getData7().subscribe(data=>{
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
