webpackJsonp([14],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBeerPageModule", function() { return HomeBeerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_beer__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeBeerPageModule = /** @class */ (function () {
    function HomeBeerPageModule() {
    }
    HomeBeerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_beer__["a" /* HomeBeerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_beer__["a" /* HomeBeerPage */]),
            ],
        })
    ], HomeBeerPageModule);
    return HomeBeerPageModule;
}());

//# sourceMappingURL=home-beer.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeBeerPage; });
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
 * Generated class for the HomeBeerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeBeerPage = /** @class */ (function () {
    function HomeBeerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeBeerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeBeerPage');
    };
    HomeBeerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-beer',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/home-beer/home-beer.html"*/'<!--\n  Generated template for the HomeBeerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button start menuToggle color="royal">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <img src="assets/imgs/inner-logo.png" alt="" class="inner-logo">\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class="dark-bg">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <div class="home-fridge-wrap">\n          <div class="fridge-shelf">\n              <div class="left-fridge">\n                <div class="beer-holder">\n                  <img src="assets/imgs/beer-1.png" alt="image">\n                </div>\n                <div class="beer-holder">\n                  <img src="assets/imgs/beer-1.png" alt="image">\n                </div>\n                <div class="beer-holder">\n                  <img src="assets/imgs/beer-2.png" alt="image">\n                </div>\n              </div>\n              <div class="right-fridge">\n                <div class="beer-holder">\n                  <img src="assets/imgs/beer-3.png" alt="image">\n                </div>\n                <div class="beer-holder">\n                  <img src="assets/imgs/beer-1.png" alt="image">\n                </div>\n                <div class="beer-holder">\n                  <img src="assets/imgs/beer-2.png" alt="image">\n                </div>\n              </div>\n          </div>\n          <div class="fridge-shelf">\n            <div class="left-fridge">\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-4.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-5.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-6.png" alt="image">\n              </div>\n            </div>\n            <div class="right-fridge">\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-1.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-3.png" alt="image">\n              </div>\n            </div>\n          </div>\n          <div class="fridge-shelf">\n            <div class="left-fridge">\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-7.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-7.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-7.png" alt="image">\n              </div>\n            </div>\n            <div class="right-fridge">\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-3.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-1.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-2.png" alt="image">\n              </div>\n            </div>\n          </div>\n          <div class="fridge-shelf">\n            <div class="left-fridge">\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-7.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-6.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-5.png" alt="image">\n              </div>\n            </div>\n            <div class="right-fridge">\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-1.png" alt="image">\n              </div>\n            </div>\n          </div>\n          <div class="fridge-shelf">\n            <div class="left-fridge">\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-1.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-1.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-2.png" alt="image">\n              </div>\n            </div>\n            <div class="right-fridge">\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-3.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-1.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-2.png" alt="image">\n              </div>\n              <div class="beer-holder">\n                <img src="assets/imgs/beer-2.png" alt="image">\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/home-beer/home-beer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], HomeBeerPage);
    return HomeBeerPage;
}());

//# sourceMappingURL=home-beer.js.map

/***/ })

});
//# sourceMappingURL=14.js.map