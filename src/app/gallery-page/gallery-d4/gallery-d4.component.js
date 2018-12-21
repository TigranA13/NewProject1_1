"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GalleryD4Component = (function () {
    function GalleryD4Component(galleryservice) {
        this.galleryservice = galleryservice;
        this.info = [];
        this.data = [];
    }
    GalleryD4Component.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryservice.getData4().subscribe(function (data) {
            _this.data = data;
        });
        this.galleryservice.getInfo4().subscribe(function (data) {
            _this.info = data;
        });
        $(document).ready(function () {
            $('.modal').modal();
        });
    };
    GalleryD4Component = __decorate([
        core_1.Component({
            selector: 'app-gallery-d4',
            templateUrl: './gallery-d4.component.html',
            styleUrls: ['./gallery-d4.component.css']
        })
    ], GalleryD4Component);
    return GalleryD4Component;
}());
exports.GalleryD4Component = GalleryD4Component;
//# sourceMappingURL=gallery-d4.component.js.map