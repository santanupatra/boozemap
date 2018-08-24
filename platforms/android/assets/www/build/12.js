webpackJsonp([12],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeWinePageModule", function() { return HomeWinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_wine__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_long_press__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeWinePageModule = /** @class */ (function () {
    function HomeWinePageModule() {
    }
    HomeWinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_wine__["a" /* HomeWinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_wine__["a" /* HomeWinePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_long_press__["a" /* LongPressModule */],
            ],
        })
    ], HomeWinePageModule);
    return HomeWinePageModule;
}());

//# sourceMappingURL=home-wine.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeWinePage; });
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
 * Generated class for the HomeWinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeWinePage = /** @class */ (function () {
    function HomeWinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.className = 'wine-holder';
    }
    HomeWinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeWinePage');
    };
    HomeWinePage.prototype.pressed = function () {
        // this.navCtrl.push('ForgetpasswordPage');
        this.className = 'wine-holder-shake';
    };
    HomeWinePage.prototype.released = function () {
        this.className = 'wine-holder';
    };
    HomeWinePage.prototype.active = function () {
    };
    HomeWinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-wine',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/home-wine/home-wine.html"*/'<!--\n  Generated template for the HomeWinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Wine</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="dark-bg">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <div class="home-wine-wrap">\n          <div class="wine-shelf">\n            <div [class]="className" ion-long-press [interval]="400" (onPressStart)="pressed()" (onPressing)="active()" (onPressEnd)="released()">\n              <img src="assets/imgs/winebottle-1.png" alt="image">\n              <a href="" class="close"><ion-icon name="close-circle"></ion-icon></a>\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-2.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-3.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-4.png" alt="image">\n            </div>\n          </div>\n          <div class="wine-shelf">\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-1.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-2.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-3.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-4.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-5.png" alt="image">\n            </div>\n          </div>\n          <div class="wine-shelf">\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-1.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-3.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-4.png" alt="image">\n            </div>\n          </div>\n          <div class="wine-shelf">\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-1.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-2.png" alt="image">\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/home-wine/home-wine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], HomeWinePage);
    return HomeWinePage;
}());

//# sourceMappingURL=home-wine.js.map

/***/ })

});
//# sourceMappingURL=12.js.map