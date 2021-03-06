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
        return this.http.get('http://localhost:3000/api/gallery-page');
    };
    GalleryService.prototype.getData1 = function () {
        return this.http.get('http://localhost:3000/api/gallery-d1-page');
    };
    GalleryService.prototype.getData2 = function () {
        return this.http.get('http://localhost:3000/api/gallery-d2-page');
    };
    GalleryService.prototype.getData3 = function () {
        return this.http.get('http://localhost:3000/api/gallery-d3-page');
    };
    GalleryService.prototype.getData4 = function () {
        return this.http.get('http://localhost:3000/api/gallery-d4-page');
    };
    GalleryService.prototype.getData5 = function () {
        return this.http.get('http://localhost:3000/api/gallery-d5-page');
    };
    GalleryService.prototype.getData6 = function () {
        return this.http.get('http://localhost:3000/api/gallery-d6-page');
    };
    GalleryService.prototype.getData7 = function () {
        return this.http.get('http://localhost:3000/api/gallery-d7-page');
    };
    GalleryService.prototype.getData8 = function () {
        return this.http.get('http://localhost:3000/api/gallery-d8-page');
    };
    GalleryService.prototype.getData9 = function () {
        return this.http.get('http://localhost:3000/api/gallery-d9-page');
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