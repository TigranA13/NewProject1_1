import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-pricelist-page',
  templateUrl: './pricelist-page.component.html',
  styleUrls: ['./pricelist-page.component.css']
})
export class PricelistPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( "Price List" );
  }


}
