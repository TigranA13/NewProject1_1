import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {GalleryPageComponent} from "./gallery-page/gallery-page.component";
import {ServicePageComponent} from "./service-page/service-page.component";
import {PricelistPageComponent} from "./pricelist-page/pricelist-page.component";
import {ContactsPageComponent} from "./contacts-page/contacts-page.component";
import {GalleryDComponent} from "./gallery-page/gallery-d/gallery-d.component";


const routes: Routes = [
  {path:"", redirectTo:'glavnaya', pathMatch: 'full'},
  {path:"glavnaya", component: HomePageComponent},
  {path:"o-nas", component: AboutPageComponent},
  {path:"katalog", component: GalleryPageComponent},
  {path:"uslugi", component: ServicePageComponent},
  {path:"pricelist", component: PricelistPageComponent},
  {path:"contacts", component: ContactsPageComponent},
  {path:"**",redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
