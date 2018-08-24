webpackJsonp([23],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CocktailCosting2PageModule", function() { return CocktailCosting2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cocktail_costing2__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CocktailCosting2PageModule = /** @class */ (function () {
    function CocktailCosting2PageModule() {
    }
    CocktailCosting2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cocktail_costing2__["a" /* CocktailCosting2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cocktail_costing2__["a" /* CocktailCosting2Page */]),
            ],
        })
    ], CocktailCosting2PageModule);
    return CocktailCosting2PageModule;
}());

//# sourceMappingURL=cocktail-costing2.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CocktailCosting2Page; });
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
 * Generated class for the CocktailCosting2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CocktailCosting2Page = /** @class */ (function () {
    function CocktailCosting2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CocktailCosting2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CocktailCosting2Page');
    };
    CocktailCosting2Page.prototype.cocktailTotalPrice = function () {
        this.navCtrl.push("CocktailTotalPricePage");
    };
    CocktailCosting2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cocktail-costing2',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/cocktail-costing2/cocktail-costing2.html"*/'<!--\n  Generated template for the CocktailCosting2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>cocktail-costing2</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="dark-bg">\n  <div class="dark-container">\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="Booze Ounces"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Non-Booze Ounces"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Garnish Amount"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block class="text-uppercase" (click)="cocktailTotalPrice();">Calculate</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/cocktail-costing2/cocktail-costing2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CocktailCosting2Page);
    return CocktailCosting2Page;
}());

//# sourceMappingURL=cocktail-costing2.js.map

/***/ })

});
//# sourceMappingURL=23.js.map