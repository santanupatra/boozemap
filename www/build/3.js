webpackJsonp([3],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpiritListPageModule", function() { return SpiritListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spirit_list__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpiritListPageModule = /** @class */ (function () {
    function SpiritListPageModule() {
    }
    SpiritListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__spirit_list__["a" /* SpiritListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__spirit_list__["a" /* SpiritListPage */]),
            ],
        })
    ], SpiritListPageModule);
    return SpiritListPageModule;
}());

//# sourceMappingURL=spirit-list.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpiritListPage; });
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
 * Generated class for the SpiritListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpiritListPage = /** @class */ (function () {
    function SpiritListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpiritListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpiritListPage');
    };
    SpiritListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-spirit-list',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/spirit-list/spirit-list.html"*/'<ion-header>\n	<ion-toolbar>\n		<ion-buttons start>\n			<button ion-button icon-only color="royal" navPop>\n				<ion-icon name="arrow-back"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title>\n			<img src="assets/imgs/inner-logo.png" alt="" class="inner-logo">\n		</ion-title>\n		<ion-buttons end>\n			<button ion-button icon-only color="royal">\n				<ion-icon name="search"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class="dark-bg">\n	<div class="common-title">Spirits</div>\n	<ion-list class="common-list">\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/wine-glass.png">\n			</ion-avatar>\n			<h2>Vodka</h2>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/wine-glass.png">\n			</ion-avatar>\n			<h2>Rum</h2>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/wine-glass.png">\n			</ion-avatar>\n			<h2>Whiskey</h2>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/wine-glass.png">\n			</ion-avatar>\n			<h2>Tequlia</h2>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/wine-glass.png">\n			</ion-avatar>\n			<h2>Cognac</h2>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/wine-glass.png">\n			</ion-avatar>\n			<h2>Scotch</h2>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/wine-glass.png">\n			</ion-avatar>\n			<h2>Bourbon</h2>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/wine-glass.png">\n			</ion-avatar>\n			<h2>Gin</h2>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/wine-glass.png">\n			</ion-avatar>\n			<h2>Brandy</h2>\n		</ion-item>\n		<ion-item>\n			<ion-avatar item-start>\n				<img src="assets/imgs/wine-glass.png">\n			</ion-avatar>\n			<h2>Liquers</h2>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/spirit-list/spirit-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SpiritListPage);
    return SpiritListPage;
}());

//# sourceMappingURL=spirit-list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map