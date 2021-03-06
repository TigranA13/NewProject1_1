"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GalleryPageComponent = (function () {
    function GalleryPageComponent(titleService, galleryservice) {
        this.titleService = titleService;
        this.galleryservice = galleryservice;
        this.info = [];
        this.data = [];
    }
    GalleryPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("КАТАЛОГ ТЕХНИКИ");
        this.galleryservice.getData().subscribe(function (data) {
            _this.data = data[0].catalog;
            _this.info = data;
        });
    };
    GalleryPageComponent = __decorate([
        core_1.Component({
            selector: 'app-gallery-page',
            templateUrl: './gallery-page.component.html',
            styleUrls: ['./gallery-page.component.css']
        })
    ], GalleryPageComponent);
    return GalleryPageComponent;
}());
exports.GalleryPageComponent = GalleryPageComponent;
//# sourceMappingURL=gallery-page.component.js.map