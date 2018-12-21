"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GalleryService = (function () {
    function GalleryService(http) {
        this.http = http;
    }
    GalleryService.prototype.getData = function () {
        return this.http.get('./assets/json/gallery/gallery.json');
    };
    GalleryService.prototype.getData1 = function () {
        return this.http.get('./assets/json/gallery/gallery-d.json');
    };
    GalleryService.prototype.getData2 = function () {
        return this.http.get('./assets/json/gallery/gallery-d2.json');
    };
    GalleryService.prototype.getData3 = function () {
        return this.http.get('./assets/json/gallery/gallery-d3.json');
    };
    GalleryService.prototype.getData4 = function () {
        return this.http.get('./assets/json/gallery/gallery-d4.json');
    };
    GalleryService.prototype.getData5 = function () {
        return this.http.get('./assets/json/gallery/gallery-d5.json');
    };
    GalleryService.prototype.getData6 = function () {
        return this.http.get('./assets/json/gallery/gallery-d6.json');
    };
    GalleryService.prototype.getData7 = function () {
        return this.http.get('./assets/json/gallery/gallery-d7.json');
    };
    GalleryService.prototype.getData8 = function () {
        return this.http.get('./assets/json/gallery/gallery-d8.json');
    };
    GalleryService.prototype.getData9 = function () {
        return this.http.get('./assets/json/gallery/gallery-d9.json');
    };
    GalleryService.prototype.getInfo = function () {
        return this.http.get('./assets/json/gallery/gallery-info.json');
    };
    GalleryService.prototype.getInfo1 = function () {
        return this.http.get('./assets/json/gallery/gallery-d-info.json');
    };
    GalleryService.prototype.getInfo2 = function () {
        return this.http.get('./assets/json/gallery/gallery-d2-info.json');
    };
    GalleryService.prototype.getInfo3 = function () {
        return this.http.get('./assets/json/gallery/gallery-d3-info.json');
    };
    GalleryService.prototype.getInfo4 = function () {
        return this.http.get('./assets/json/gallery/gallery-d4-info.json');
    };
    GalleryService.prototype.getInfo5 = function () {
        return this.http.get('./assets/json/gallery/gallery-d5-info.json');
    };
    GalleryService.prototype.getInfo6 = function () {
        return this.http.get('./assets/json/gallery/gallery-d6-info.json');
    };
    GalleryService.prototype.getInfo7 = function () {
        return this.http.get('./assets/json/gallery/gallery-d7-info.json');
    };
    GalleryService.prototype.getInfo8 = function () {
        return this.http.get('./assets/json/gallery/gallery-d8-info.json');
    };
    GalleryService.prototype.getInfo9 = function () {
        return this.http.get('./assets/json/gallery/gallery-d9-info.json');
    };
    GalleryService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GalleryService);
    return GalleryService;
}());
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery.service.js.map