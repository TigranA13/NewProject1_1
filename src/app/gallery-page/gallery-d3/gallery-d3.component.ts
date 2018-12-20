import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-gallery-d3',
  templateUrl: './gallery-d3.component.html',
  styleUrls: ['./gallery-d3.component.css']
})
export class GalleryD3Component implements OnInit {

  data:any=[];

  constructor( private galleryservice: GalleryService) { }


  ngOnInit() {
    this.galleryservice.getData3().subscribe(data=>{
      this.data = data

    })
  }
}
