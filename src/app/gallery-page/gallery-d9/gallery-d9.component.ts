import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-gallery-d9',
  templateUrl: './gallery-d9.component.html',
  styleUrls: ['./gallery-d9.component.css']
})
export class GalleryD9Component implements OnInit {

  data:any=[];

  constructor( private galleryservice: GalleryService) { }


  ngOnInit() {
    this.galleryservice.getData9().subscribe(data=>{
      this.data = data

    })
  }

}
