webpackJsonp([11],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_long_press__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_long_press__["a" /* LongPressModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.className = 'wine-holder';
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.pressed = function () {
        // this.navCtrl.push('ForgetpasswordPage');
        this.className = 'wine-holder-shake';
    };
    HomePage.prototype.released = function () {
        this.className = 'wine-holder';
    };
    HomePage.prototype.active = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>home</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button start menuToggle color="royal">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <img src="assets/imgs/inner-logo.png" alt="" class="inner-logo">\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class="dark-bg">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <div class="home-bar-wrap">\n          <div class="wine-shelf">\n            <div [class]="className" ion-long-press [interval]="400" (onPressStart)="pressed()" (onPressing)="active()" (onPressEnd)="released()">\n              <img src="assets/imgs/winebottle-1.png" alt="image">\n              <!--<a href="" class="close">\n                <ion-icon name="close-circle"></ion-icon>\n              </a>-->\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-2.png" alt="image">\n             \n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-3.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-4.png" alt="image">\n            </div>\n          </div>\n          <div class="wine-shelf">\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-6.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-2.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-3.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-4.png" alt="image">\n             \n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-5.png" alt="image">\n              \n            </div>\n          </div>\n          <div class="wine-shelf">\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-1.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-3.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-4.png" alt="image">\n            </div>\n          </div>\n          <div class="wine-shelf">\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-1.png" alt="image">\n            </div>\n            <div class="wine-holder">\n              <img src="assets/imgs/winebottle-2.png" alt="image">\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=11.js.map