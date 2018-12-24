import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {ContactsService} from "./contacts.service";

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  data:any=[];

  constructor(private titleService: Title, private contactsservice: ContactsService) { }

  ngOnInit() {
    this.titleService.setTitle( "КОНТАКТЫ" );
    this.contactsservice.getData().subscribe(data=>{
      this.data = data;
    })
  }

}
