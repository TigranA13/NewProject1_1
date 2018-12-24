import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {GalleryService} from "../gallery.service";

declare let $:any;

@Component({
  selector: 'app-gallery-d8',
  templateUrl: './gallery-d8.component.html',
  styleUrls: ['./gallery-d8.component.css']
})
export class GalleryD8Component implements OnInit {

  info:any=[];
  data:any=[];

  constructor( private galleryservice: GalleryService, private titleService: Title) { }


  ngOnInit() {
    this.titleService.setTitle( "Gallery Details 8" );
    this.galleryservice.getData8().subscribe(data=>{
      this.data = data[1];
      this.info.push(data[0])
    });
    setTimeout(()=>{
      $(document).ready(function(){
        $('.modal').modal();
      });
    }, 500)
  }
}
