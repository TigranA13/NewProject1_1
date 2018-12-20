import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-gallery-d8',
  templateUrl: './gallery-d8.component.html',
  styleUrls: ['./gallery-d8.component.css']
})
export class GalleryD8Component implements OnInit {

  data:any=[];

  constructor( private galleryservice: GalleryService) { }


  ngOnInit() {
    this.galleryservice.getData8().subscribe(data=>{
      this.data = data

    })
  }
}
