import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {GalleryService} from "../gallery.service";

declare let $:any;

@Component({
  selector: 'app-gallery-d',
  templateUrl: './gallery-d.component.html',
  styleUrls: ['./gallery-d.component.css']
})
export class GalleryDComponent implements OnInit {

  info:any=[];
  data:any=[];


  constructor( private galleryservice: GalleryService, private titleService: Title) { }


  ngOnInit() {
    this.titleService.setTitle( "Автокраны" );
    this.galleryservice.getData1().subscribe(data=>{
      this.data = data[0].catalog;
      this.info = data;
    });
    setTimeout(()=>{
      $(document).ready(function(){
        $('.modal').modal();
      });
    }, 500)

  }

}
