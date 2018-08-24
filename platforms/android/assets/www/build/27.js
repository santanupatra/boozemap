webpackJsonp([27],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterSplashPageModule", function() { return AfterSplashPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__after_splash__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AfterSplashPageModule = /** @class */ (function () {
    function AfterSplashPageModule() {
    }
    AfterSplashPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__after_splash__["a" /* AfterSplashPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__after_splash__["a" /* AfterSplashPage */]),
            ],
        })
    ], AfterSplashPageModule);
    return AfterSplashPageModule;
}());

//# sourceMappingURL=after-splash.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterSplashPage; });
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
 * Generated class for the AfterSplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AfterSplashPage = /** @class */ (function () {
    function AfterSplashPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AfterSplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AfterSplashPage');
    };
    AfterSplashPage.prototype.onLogin = function () {
        this.navCtrl.push('SigninPage');
    };
    AfterSplashPage.prototype.onSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    AfterSplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-after-splash',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/after-splash/after-splash.html"*/'<!--\n  Generated template for the AfterSplashPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>after-splash</ion-title>\n  </ion-navbar>\n\n</ion-header>\n-->\n\n<ion-content padding class="after-splash-bg">\n  <div class="logo">\n    <img src="assets/imgs/logo.png" alt="">\n  </div>\n  <button class="mb-25 text-uppercase" ion-button color="primary" block (click)="onLogin()">Login</button>\n  <button class="mb-25 text-uppercase" ion-button color="dark" block (click)="onSignup()">Sign up</button>\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/after-splash/after-splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AfterSplashPage);
    return AfterSplashPage;
}());

//# sourceMappingURL=after-splash.js.map

/***/ })

});
//# sourceMappingURL=27.js.map