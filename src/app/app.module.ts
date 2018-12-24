import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {GalleryRoutingModule} from "./gallery-page/gallery-routing.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { PricelistPageComponent } from './pricelist-page/pricelist-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import {GalleryDComponent} from "./gallery-page/gallery-d/gallery-d.component";
import { GalleryD2Component } from './gallery-page/gallery-d2/gallery-d2.component';
import { GalleryD3Component } from './gallery-page/gallery-d3/gallery-d3.component';
import { GalleryD4Component } from './gallery-page/gallery-d4/gallery-d4.component';
import { GalleryD5Component } from './gallery-page/gallery-d5/gallery-d5.component';
import { GalleryD6Component } from './gallery-page/gallery-d6/gallery-d6.component';
import { GalleryD7Component } from './gallery-page/gallery-d7/gallery-d7.component';
import { GalleryD8Component } from './gallery-page/gallery-d8/gallery-d8.component';
import { GalleryD9Component } from './gallery-page/gallery-d9/gallery-d9.component';
import { GalleryDetailsComponent } from './gallery-page/gallery-details/gallery-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    GalleryPageComponent,
    ServicePageComponent,
    PricelistPageComponent,
    ContactsPageComponent,
    GalleryDComponent,
    GalleryD2Component,
    GalleryD3Component,
    GalleryD4Component,
    GalleryD5Component,
    GalleryD6Component,
    GalleryD7Component,
    GalleryD8Component,
    GalleryD9Component,
    GalleryDetailsComponent
  ],
  imports: [
    BrowserModule,
    GalleryRoutingModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
