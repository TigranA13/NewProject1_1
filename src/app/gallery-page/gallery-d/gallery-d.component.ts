import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../gallery.service";


@Component({
  selector: 'app-gallery-d',
  templateUrl: './gallery-d.component.html',
  styleUrls: ['./gallery-d.component.css']
})
export class GalleryDComponent implements OnInit {

  data:any=[];

  constructor( private galleryservice: GalleryService) { }


  ngOnInit() {
    this.galleryservice.getData1().subscribe(data=>{
      this.data = data
      
    })
  }

}
