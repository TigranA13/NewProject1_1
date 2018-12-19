import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.sidenav').sidenav();
      $('.carousel.carousel-slider').carousel({
        indicators: true,
        fullWidth:true,
        noWrap: true
      });
      setInterval(function(){
        $('.carousel.carousel-slider').carousel('next')
      }, 4000)
    });
  }

}
