import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../gallery.service";

declare let $:any;

@Component({
  selector: 'app-gallery-d5',
  templateUrl: './gallery-d5.component.html',
  styleUrls: ['./gallery-d5.component.css']
})
export class GalleryD5Component implements OnInit {

  info:any=[];
  data:any=[];

  constructor( private galleryservice: GalleryService) { }


  ngOnInit() {
    this.galleryservice.getData5().subscribe(data=>{
      this.data = data
    })
    this.galleryservice.getInfo5().subscribe(data=>{
      this.info = data
    })
    $(document).ready(function(){
      $('.modal').modal();
    });
  }
}
