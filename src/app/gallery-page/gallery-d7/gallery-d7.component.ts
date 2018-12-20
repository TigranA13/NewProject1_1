import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-gallery-d7',
  templateUrl: './gallery-d7.component.html',
  styleUrls: ['./gallery-d7.component.css']
})
export class GalleryD7Component implements OnInit {

  data:any=[];

  constructor( private galleryservice: GalleryService) { }


  ngOnInit() {
    this.galleryservice.getData7().subscribe(data=>{
      this.data = data

    })
  }

}
