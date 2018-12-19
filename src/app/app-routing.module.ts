import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {GalleryPageComponent} from "./gallery-page/gallery-page.component";
import {ServicePageComponent} from "./service-page/service-page.component";
import {PricelistPageComponent} from "./pricelist-page/pricelist-page.component";
import {ContactsPageComponent} from "./contacts-page/contacts-page.component";

const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch: 'full'},
  {path:"home", component: HomePageComponent},
  {path:"aboutus", component: AboutPageComponent},
  {path:"gallery", component: GalleryPageComponent},
  {path:"services", component: ServicePageComponent},
  {path:"pricelist", component: PricelistPageComponent},
  {path:"contacts", component: ContactsPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
