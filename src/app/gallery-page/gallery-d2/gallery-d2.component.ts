import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-gallery-d2',
  templateUrl: './gallery-d2.component.html',
  styleUrls: ['./gallery-d2.component.css']
})
export class GalleryD2Component implements OnInit {

  data:any=[];

  constructor( private galleryservice: GalleryService) { }


  ngOnInit() {
    this.galleryservice.getData2().subscribe(data=>{
      this.data = data

    })
  }


}
