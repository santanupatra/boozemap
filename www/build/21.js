webpackJsonp([21],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CocktailRecipePageModule", function() { return CocktailRecipePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cocktail_recipe__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CocktailRecipePageModule = /** @class */ (function () {
    function CocktailRecipePageModule() {
    }
    CocktailRecipePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cocktail_recipe__["a" /* CocktailRecipePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cocktail_recipe__["a" /* CocktailRecipePage */]),
            ],
        })
    ], CocktailRecipePageModule);
    return CocktailRecipePageModule;
}());

//# sourceMappingURL=cocktail-recipe.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CocktailRecipePage; });
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
 * Generated class for the CocktailRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CocktailRecipePage = /** @class */ (function () {
    function CocktailRecipePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CocktailRecipePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CocktailRecipePage');
    };
    CocktailRecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cocktail-recipe',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/cocktail-recipe/cocktail-recipe.html"*/'<!--\n  Generated template for the CocktailRecipePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button start color="royal" navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n       Recipes\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class="dark-bg">\n  <div class="dark-container">\n    <div class="receipe-image">\n      <img src="assets/imgs/receipe.jpg" alt="">\n    </div>\n    <h4 class="text-center text-white">Gin and Tonic</h4>\n    <p>1 1/2 oz. Hendricks Gin</p>\n    <p>3 1/2 oz. Tonic Water</p>\n    <p>1 Lime Wheel</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/cocktail-recipe/cocktail-recipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CocktailRecipePage);
    return CocktailRecipePage;
}());

//# sourceMappingURL=cocktail-recipe.js.map

/***/ })

});
//# sourceMappingURL=21.js.map