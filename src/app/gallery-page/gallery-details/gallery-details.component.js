"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GalleryDetailsComponent = (function () {
    function GalleryDetailsComponent(route, titleService) {
        this.route = route;
        this.titleService = titleService;
    }
    GalleryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.titleService.setTitle(params['name']);
            _this.name = params['name'];
            _this.img = params['img'];
            _this.text = params['text'];
            _this.price = +params['price'];
        });
    };
    GalleryDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-gallery-details',
            templateUrl: './gallery-details.component.html',
            styleUrls: ['./gallery-details.component.css']
        })
    ], GalleryDetailsComponent);
    return GalleryDetailsComponent;
}());
exports.GalleryDetailsComponent = GalleryDetailsComponent;
//# sourceMappingURL=gallery-details.component.js.map