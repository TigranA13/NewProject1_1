import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../gallery.service";

declare let $:any;

@Component({
  selector: 'app-gallery-d9',
  templateUrl: './gallery-d9.component.html',
  styleUrls: ['./gallery-d9.component.css']
})
export class GalleryD9Component implements OnInit {

  info:any=[];
  data:any=[];

  constructor( private galleryservice: GalleryService) { }


  ngOnInit() {
    this.galleryservice.getData9().subscribe(data=>{
      this.data = data
    })
    this.galleryservice.getInfo9().subscribe(data=>{
      this.info = data
    })

    $(document).ready(function(){
      $('.modal').modal();
    });
  }

}
