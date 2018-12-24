"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GalleryD6Component = (function () {
    function GalleryD6Component(galleryservice, titleService) {
        this.galleryservice = galleryservice;
        this.titleService = titleService;
        this.info = [];
        this.data = [];
    }
    GalleryD6Component.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Gallery Details 6");
        this.galleryservice.getData6().subscribe(function (data) {
            _this.data = data[1];
            _this.info.push(data[0]);
        });
        setTimeout(function () {
            $(document).ready(function () {
                $('.modal').modal();
            });
        }, 500);
    };
    GalleryD6Component = __decorate([
        core_1.Component({
            selector: 'app-gallery-d6',
            templateUrl: './gallery-d6.component.html',
            styleUrls: ['./gallery-d6.component.css']
        })
    ], GalleryD6Component);
    return GalleryD6Component;
}());
exports.GalleryD6Component = GalleryD6Component;
//# sourceMappingURL=gallery-d6.component.js.map