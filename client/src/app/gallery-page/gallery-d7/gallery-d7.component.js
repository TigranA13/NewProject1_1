"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GalleryD7Component = (function () {
    function GalleryD7Component(galleryservice, titleService) {
        this.galleryservice = galleryservice;
        this.titleService = titleService;
        this.info = [];
        this.data = [];
    }
    GalleryD7Component.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Экскаваторы гусеничные");
        this.galleryservice.getData7().subscribe(function (data) {
            _this.data = data[0].catalog;
            _this.info = data;
        });
        setTimeout(function () {
            $(document).ready(function () {
                $('.modal').modal();
            });
        }, 500);
    };
    GalleryD7Component = __decorate([
        core_1.Component({
            selector: 'app-gallery-d7',
            templateUrl: './gallery-d7.component.html',
            styleUrls: ['./gallery-d7.component.css']
        })
    ], GalleryD7Component);
    return GalleryD7Component;
}());
exports.GalleryD7Component = GalleryD7Component;
//# sourceMappingURL=gallery-d7.component.js.map