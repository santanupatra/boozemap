webpackJsonp([22],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CocktailCostingPageModule", function() { return CocktailCostingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cocktail_costing__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CocktailCostingPageModule = /** @class */ (function () {
    function CocktailCostingPageModule() {
    }
    CocktailCostingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cocktail_costing__["a" /* CocktailCostingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cocktail_costing__["a" /* CocktailCostingPage */]),
            ],
        })
    ], CocktailCostingPageModule);
    return CocktailCostingPageModule;
}());

//# sourceMappingURL=cocktail-costing.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CocktailCostingPage; });
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
 * Generated class for the CocktailCostingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CocktailCostingPage = /** @class */ (function () {
    function CocktailCostingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CocktailCostingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CocktailCostingPage');
    };
    CocktailCostingPage.prototype.cocktailCosting2 = function () {
        this.navCtrl.push("CocktailCosting2Page");
    };
    CocktailCostingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cocktail-costing',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/cocktail-costing/cocktail-costing.html"*/'<!--\n  Generated template for the CocktailCostingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Cocktail Costing</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="dark-bg">\n  <div class="dark-container">\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="Cocktail name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Booze"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Non Booze"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Garnish"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block class="text-uppercase" (click)="cocktailCosting2();">continue</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/cocktail-costing/cocktail-costing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CocktailCostingPage);
    return CocktailCostingPage;
}());

//# sourceMappingURL=cocktail-costing.js.map

/***/ })

});
//# sourceMappingURL=22.js.map