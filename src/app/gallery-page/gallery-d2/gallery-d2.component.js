"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GalleryD2Component = (function () {
    function GalleryD2Component(galleryservice, titleService) {
        this.galleryservice = galleryservice;
        this.titleService = titleService;
        this.info = [];
        this.data = [];
    }
    GalleryD2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Кран-манипулятор");
        this.galleryservice.getData2().subscribe(function (data) {
            _this.data = data[1];
            _this.info.push(data[0]);
        });
        setTimeout(function () {
            $(document).ready(function () {
                $('.modal').modal();
            });
        }, 500);
    };
    GalleryD2Component = __decorate([
        core_1.Component({
            selector: 'app-gallery-d2',
            templateUrl: './gallery-d2.component.html',
            styleUrls: ['./gallery-d2.component.css']
        })
    ], GalleryD2Component);
    return GalleryD2Component;
}());
exports.GalleryD2Component = GalleryD2Component;
//# sourceMappingURL=gallery-d2.component.js.map