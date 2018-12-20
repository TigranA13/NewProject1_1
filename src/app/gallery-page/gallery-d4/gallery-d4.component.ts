import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-gallery-d4',
  templateUrl: './gallery-d4.component.html',
  styleUrls: ['./gallery-d4.component.css']
})
export class GalleryD4Component implements OnInit {

  data:any=[];

  constructor( private galleryservice: GalleryService) { }


  ngOnInit() {
    this.galleryservice.getData4().subscribe(data=>{
      this.data = data

    })
  }

}
