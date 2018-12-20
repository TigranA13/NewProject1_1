/**
 * Created by tigra on 20-Dec-18.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleryDComponent} from "./gallery-d/gallery-d.component";
import {GalleryD2Component} from "./gallery-d2/gallery-d2.component";
import {GalleryD3Component} from "./gallery-d3/gallery-d3.component";
import {GalleryD4Component} from "./gallery-d4/gallery-d4.component";
import {GalleryD5Component} from "./gallery-d5/gallery-d5.component";
import {GalleryD6Component} from "./gallery-d6/gallery-d6.component";
import {GalleryD7Component} from "./gallery-d7/gallery-d7.component";
import {GalleryD8Component} from "./gallery-d8/gallery-d8.component";
import {GalleryD9Component} from "./gallery-d9/gallery-d9.component";



const routes: Routes = [
  {path:'galleryD', component: GalleryDComponent},
  {path:'galleryD2', component: GalleryD2Component},
  {path:'galleryD3', component: GalleryD3Component},
  {path:'galleryD4', component: GalleryD4Component},
  {path:'galleryD5', component: GalleryD5Component},
  {path:'galleryD6', component: GalleryD6Component},
  {path:'galleryD7', component: GalleryD7Component},
  {path:'galleryD8', component: GalleryD8Component},
  {path:'galleryD9', component: GalleryD9Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
