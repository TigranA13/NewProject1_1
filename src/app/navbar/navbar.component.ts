import { Component, OnInit } from '@angular/core';
import {NavbarService} from "./navbar.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data:any=[];

  constructor(private navservice: NavbarService) { }

  ngOnInit() {
    this.navservice.getData().subscribe(data=>{
      this.data = data;
    });

  }

}
