"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by tigra on 20-Dec-18.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var gallery_d_component_1 = require("./gallery-d/gallery-d.component");
var gallery_d2_component_1 = require("./gallery-d2/gallery-d2.component");
var gallery_d3_component_1 = require("./gallery-d3/gallery-d3.component");
var gallery_d4_component_1 = require("./gallery-d4/gallery-d4.component");
var gallery_d5_component_1 = require("./gallery-d5/gallery-d5.component");
var gallery_d6_component_1 = require("./gallery-d6/gallery-d6.component");
var gallery_d7_component_1 = require("./gallery-d7/gallery-d7.component");
var gallery_d8_component_1 = require("./gallery-d8/gallery-d8.component");
var gallery_d9_component_1 = require("./gallery-d9/gallery-d9.component");
var routes = [
    { path: 'galleryD', component: gallery_d_component_1.GalleryDComponent },
    { path: 'galleryD2', component: gallery_d2_component_1.GalleryD2Component },
    { path: 'galleryD3', component: gallery_d3_component_1.GalleryD3Component },
    { path: 'galleryD4', component: gallery_d4_component_1.GalleryD4Component },
    { path: 'galleryD5', component: gallery_d5_component_1.GalleryD5Component },
    { path: 'galleryD6', component: gallery_d6_component_1.GalleryD6Component },
    { path: 'galleryD7', component: gallery_d7_component_1.GalleryD7Component },
    { path: 'galleryD8', component: gallery_d8_component_1.GalleryD8Component },
    { path: 'galleryD9', component: gallery_d9_component_1.GalleryD9Component },
];
var GalleryRoutingModule = (function () {
    function GalleryRoutingModule() {
    }
    GalleryRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], GalleryRoutingModule);
    return GalleryRoutingModule;
}());
exports.GalleryRoutingModule = GalleryRoutingModule;
//# sourceMappingURL=gallery-routing.module.js.map