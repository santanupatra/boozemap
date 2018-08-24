webpackJsonp([13],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeKegPageModule", function() { return HomeKegPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_keg__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeKegPageModule = /** @class */ (function () {
    function HomeKegPageModule() {
    }
    HomeKegPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_keg__["a" /* HomeKegPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_keg__["a" /* HomeKegPage */]),
            ],
        })
    ], HomeKegPageModule);
    return HomeKegPageModule;
}());

//# sourceMappingURL=home-keg.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeKegPage; });
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
 * Generated class for the HomeKegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeKegPage = /** @class */ (function () {
    function HomeKegPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeKegPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeKegPage');
    };
    HomeKegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-keg',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/home-keg/home-keg.html"*/'<!--\n  Generated template for the HomeKegPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button start menuToggle color="royal">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <img src="assets/imgs/inner-logo.png" alt="" class="inner-logo">\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class="dark-bg">\n  <ion-row>\n    <ion-col col-12>\n      <div class="keg-wrap">\n          <div class="keg-shelf">\n            <div class="keg-holder">\n              <img src="assets/imgs/keg.png" alt="image">\n            </div>\n            <div class="keg-holder">\n              <img src="assets/imgs/keg.png" alt="image">\n            </div>\n            <div class="keg-holder">\n              <img src="assets/imgs/keg.png" alt="image">\n            </div>\n          </div>\n\n          <div class="keg-shelf">\n            <div class="keg-holder">\n              <img src="assets/imgs/keg.png" alt="image">\n            </div>\n            <div class="keg-holder">\n              <img src="assets/imgs/keg.png" alt="image">\n            </div>\n            <div class="keg-holder">\n              <img src="assets/imgs/keg.png" alt="image">\n            </div>\n          </div>\n\n          <div class="keg-shelf">\n            <div class="keg-holder">\n              <img src="assets/imgs/keg.png" alt="image">\n            </div>\n            <div class="keg-holder">\n              <img src="assets/imgs/keg.png" alt="image">\n            </div>\n            <div class="keg-holder">\n              <img src="assets/imgs/keg.png" alt="image">\n            </div>\n          </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/home-keg/home-keg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], HomeKegPage);
    return HomeKegPage;
}());

//# sourceMappingURL=home-keg.js.map

/***/ })

});
//# sourceMappingURL=13.js.map