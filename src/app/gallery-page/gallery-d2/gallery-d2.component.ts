import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {GalleryService} from "../gallery.service";

declare let $:any;

@Component({
  selector: 'app-gallery-d2',
  templateUrl: './gallery-d2.component.html',
  styleUrls: ['./gallery-d2.component.css']
})
export class GalleryD2Component implements OnInit {
  info:any=[];
  data:any=[];

  constructor( private galleryservice: GalleryService, private titleService: Title) { }


  ngOnInit() {
    this.titleService.setTitle( "Gallery Details 2" );
    this.galleryservice.getData2().subscribe(data=>{
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
