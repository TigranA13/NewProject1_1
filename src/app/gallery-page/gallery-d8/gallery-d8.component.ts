import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../gallery.service";

declare let $:any;

@Component({
  selector: 'app-gallery-d8',
  templateUrl: './gallery-d8.component.html',
  styleUrls: ['./gallery-d8.component.css']
})
export class GalleryD8Component implements OnInit {

  info:any=[];
  data:any=[];

  constructor( private galleryservice: GalleryService) { }


  ngOnInit() {
    this.galleryservice.getData8().subscribe(data=>{
      this.data = data
    })
    this.galleryservice.getInfo8().subscribe(data=>{
      this.info = data
    })

    $(document).ready(function(){
      $('.modal').modal();
    });
  }
}
