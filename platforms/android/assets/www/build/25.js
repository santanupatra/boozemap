webpackJsonp([25],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoozeListPageModule", function() { return BoozeListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booze_list__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BoozeListPageModule = /** @class */ (function () {
    function BoozeListPageModule() {
    }
    BoozeListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__booze_list__["a" /* BoozeListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__booze_list__["a" /* BoozeListPage */]),
            ],
        })
    ], BoozeListPageModule);
    return BoozeListPageModule;
}());

//# sourceMappingURL=booze-list.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoozeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BoozeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BoozeListPage = /** @class */ (function () {
    function BoozeListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BoozeListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BoozeListPage');
    };
    BoozeListPage.prototype.wineList = function () {
        this.navCtrl.push('WineListPage');
    };
    BoozeListPage.prototype.beerList = function () {
        this.navCtrl.push('BeerListPage');
    };
    BoozeListPage.prototype.spiritList = function () {
        this.navCtrl.push('SpiritListPage');
    };
    BoozeListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booze-list',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/booze-list/booze-list.html"*/'<!--\n  Generated template for the BoozeListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>booze-list</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only color="royal" navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <img src="assets/imgs/inner-logo.png" alt="" class="inner-logo">\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class="dark-bg">\n  <div class="common-title">Booze List</div>\n  <ion-list class="common-list">\n    <ion-item (click)="spiritList();">\n      <ion-avatar item-start>\n        <img src="assets/imgs/spirit-icon.png">\n      </ion-avatar>\n      <h2>Spirits</h2>\n    </ion-item>\n    <ion-item (click)="wineList();">\n      <ion-avatar item-start>\n        <img src="assets/imgs/wine-icon.png">\n      </ion-avatar>\n      <h2>Wine</h2>\n    </ion-item>\n    <ion-item (click)="beerList();">\n      <ion-avatar item-start>\n        <img src="assets/imgs/beer-icon.png">\n      </ion-avatar>\n      <h2>Beer</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/booze-list/booze-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], BoozeListPage);
    return BoozeListPage;
}());

//# sourceMappingURL=booze-list.js.map

/***/ })

});
//# sourceMappingURL=25.js.map