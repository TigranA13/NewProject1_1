"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GalleryD8Component = (function () {
    function GalleryD8Component(galleryservice, titleService) {
        this.galleryservice = galleryservice;
        this.titleService = titleService;
        this.info = [];
        this.data = [];
    }
    GalleryD8Component.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Экскаваторы колесные");
        this.galleryservice.getData8().subscribe(function (data) {
            _this.data = data[0].catalog;
            _this.info = data;
        });
        setTimeout(function () {
            $(document).ready(function () {
                $('.modal').modal();
            });
        }, 500);
    };
    GalleryD8Component = __decorate([
        core_1.Component({
            selector: 'app-gallery-d8',
            templateUrl: './gallery-d8.component.html',
            styleUrls: ['./gallery-d8.component.css']
        })
    ], GalleryD8Component);
    return GalleryD8Component;
}());
exports.GalleryD8Component = GalleryD8Component;
//# sourceMappingURL=gallery-d8.component.js.map