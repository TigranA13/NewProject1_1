import { Component, OnInit } from '@angular/core';
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

  constructor( private galleryservice: GalleryService) { }


  ngOnInit() {
    this.galleryservice.getData6().subscribe(data=>{
      this.data = data
    })
    this.galleryservice.getInfo6().subscribe(data=>{
      this.info = data
    })
    $(document).ready(function(){
      $('.modal').modal();
    });
  }
}
