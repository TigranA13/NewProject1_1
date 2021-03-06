"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GalleryD5Component = (function () {
    function GalleryD5Component(galleryservice, titleService) {
        this.galleryservice = galleryservice;
        this.titleService = titleService;
        this.info = [];
        this.data = [];
    }
    GalleryD5Component.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Самосвалы");
        this.galleryservice.getData5().subscribe(function (data) {
            _this.data = data[0].catalog;
            _this.info = data;
        });
        setTimeout(function () {
            $(document).ready(function () {
                $('.modal').modal();
            });
        }, 500);
    };
    GalleryD5Component = __decorate([
        core_1.Component({
            selector: 'app-gallery-d5',
            templateUrl: './gallery-d5.component.html',
            styleUrls: ['./gallery-d5.component.css']
        })
    ], GalleryD5Component);
    return GalleryD5Component;
}());
exports.GalleryD5Component = GalleryD5Component;
//# sourceMappingURL=gallery-d5.component.js.map