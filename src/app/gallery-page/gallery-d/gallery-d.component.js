"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GalleryDComponent = (function () {
    function GalleryDComponent(galleryservice) {
        this.galleryservice = galleryservice;
        this.info = [];
        this.data = [];
    }
    GalleryDComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryservice.getData1().subscribe(function (data) {
            _this.data = data;
        });
        this.galleryservice.getInfo1().subscribe(function (data) {
            _this.info = data;
        });
        $(document).ready(function () {
            $('.modal').modal();
        });
    };
    GalleryDComponent = __decorate([
        core_1.Component({
            selector: 'app-gallery-d',
            templateUrl: './gallery-d.component.html',
            styleUrls: ['./gallery-d.component.css']
        })
    ], GalleryDComponent);
    return GalleryDComponent;
}());
exports.GalleryDComponent = GalleryDComponent;
//# sourceMappingURL=gallery-d.component.js.map