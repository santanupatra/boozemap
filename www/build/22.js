webpackJsonp([22],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CocktailExpandPageModule", function() { return CocktailExpandPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cocktail_expand__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CocktailExpandPageModule = /** @class */ (function () {
    function CocktailExpandPageModule() {
    }
    CocktailExpandPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cocktail_expand__["a" /* CocktailExpandPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cocktail_expand__["a" /* CocktailExpandPage */]),
            ],
        })
    ], CocktailExpandPageModule);
    return CocktailExpandPageModule;
}());

//# sourceMappingURL=cocktail-expand.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CocktailExpandPage; });
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
 * Generated class for the CocktailExpandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CocktailExpandPage = /** @class */ (function () {
    function CocktailExpandPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CocktailExpandPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CocktailExpandPage');
    };
    CocktailExpandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cocktail-expand',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/cocktail-expand/cocktail-expand.html"*/'<!--\n  Generated template for the CocktailExpandPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cocktails Green Tea</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="dark-bg">\n  <ion-grid class="pl-0 pr-0">\n    <ion-row>\n      <ion-col col-12>\n        <div class="cocktail-image"><img src="assets/imgs/cocktail-image.png" alt=""> </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="pl-0 pr-0">\n    <ion-row>\n      <ion-col col-6>\n        <div class="details-wrap">\n          <h6>Green Tea</h6>\n          <p>1/2 oz. Jameson</p>\n          <p>1/2 oz. Peach schnapps</p>\n          <p>Sprite 1/2 oz. Sour mix</p>\n          <p>1/2 oz. Sour mix</p>\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div class="details-wrap">\n          <h6>Menu Price <span>$12.00</span></h6>\n          <p>Total cost <span>$3.82</span></p>\n          <p>Gross profit<span>$8.18</span></p>\n          <p>Margin percent<span>46%</span></p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/cocktail-expand/cocktail-expand.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CocktailExpandPage);
    return CocktailExpandPage;
}());

//# sourceMappingURL=cocktail-expand.js.map

/***/ })

});
//# sourceMappingURL=22.js.map