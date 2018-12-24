import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {GalleryService} from "../gallery.service";

declare let $:any;

@Component({
  selector: 'app-gallery-d3',
  templateUrl: './gallery-d3.component.html',
  styleUrls: ['./gallery-d3.component.css']
})
export class GalleryD3Component implements OnInit {

  info:any=[];
  data:any=[];

  constructor( private galleryservice: GalleryService, private titleService: Title) { }


  ngOnInit() {
    this.titleService.setTitle( "Gallery Details 3" );
    this.galleryservice.getData3().subscribe(data=>{
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
