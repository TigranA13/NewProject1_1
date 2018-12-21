import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../gallery.service";

declare let $:any;

@Component({
  selector: 'app-gallery-d',
  templateUrl: './gallery-d.component.html',
  styleUrls: ['./gallery-d.component.css']
})
export class GalleryDComponent implements OnInit {

  info:any=[];
  data:any=[];


  constructor( private galleryservice: GalleryService) { }


  ngOnInit() {
    this.galleryservice.getData1().subscribe(data=>{
      this.data = data;
    });
    this.galleryservice.getInfo1().subscribe(data=>{
      this.info = data;
    })

    $(document).ready(function(){
      $('.modal').modal();
    });
  }

}
