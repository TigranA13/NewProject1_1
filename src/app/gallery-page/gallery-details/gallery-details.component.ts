import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css']
})
export class GalleryDetailsComponent implements OnInit {

  name: string;
  img:string;
  text:string;
  price: number;

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params: Params)=>{
      this.titleService.setTitle( params['name'] );
      this.name = params['name'];
      this.img = params['img'];
      this.text = params['text'];
      this.price = +params['price']
    })
  }

}
