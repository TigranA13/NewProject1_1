import { Component, OnInit } from '@angular/core';
import {FooterService} from "./footer.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  data:any=[];

  constructor(private footerservice: FooterService) { }

  ngOnInit() {
    this.footerservice.getData().subscribe(data=>{
      this.data = data;

    });
  }

}
