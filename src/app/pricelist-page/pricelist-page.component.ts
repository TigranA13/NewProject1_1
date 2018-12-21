import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {PricelistService} from "./pricelist.service";

@Component({
  selector: 'app-pricelist-page',
  templateUrl: './pricelist-page.component.html',
  styleUrls: ['./pricelist-page.component.css']
})
export class PricelistPageComponent implements OnInit {

  data:any =[];

  constructor(private titleService: Title, private pricelistservice: PricelistService) { }

  ngOnInit() {
    this.titleService.setTitle( "Price List" );
    this.pricelistservice.getData().subscribe(data=>{
      this.data=data;
    })
  }


}
