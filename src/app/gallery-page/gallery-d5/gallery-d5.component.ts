import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {GalleryService} from "../gallery.service";

declare let $:any;

@Component({
  selector: 'app-gallery-d5',
  templateUrl: './gallery-d5.component.html',
  styleUrls: ['./gallery-d5.component.css']
})
export class GalleryD5Component implements OnInit {

  info:any=[];
  data:any=[];

  constructor( private galleryservice: GalleryService, private titleService: Title) { }


  ngOnInit() {
    this.titleService.setTitle( "Gallery Details 5" );
    this.galleryservice.getData5().subscribe(data=>{
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
