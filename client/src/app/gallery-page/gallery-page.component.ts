import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {GalleryService} from "./gallery.service";

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  info:any=[];
  data:any=[];

  constructor(private titleService: Title, private galleryservice: GalleryService) { }

  ngOnInit() {
    this.titleService.setTitle( "КАТАЛОГ ТЕХНИКИ" );
    this.galleryservice.getData().subscribe(data=>{
      this.data = data[0].catalog;
      this.info = data;
    });
  }

}
