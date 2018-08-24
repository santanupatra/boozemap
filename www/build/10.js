webpackJsonp([10],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingOrderPageModule", function() { return PendingOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pending_order__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PendingOrderPageModule = /** @class */ (function () {
    function PendingOrderPageModule() {
    }
    PendingOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pending_order__["a" /* PendingOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pending_order__["a" /* PendingOrderPage */]),
            ],
        })
    ], PendingOrderPageModule);
    return PendingOrderPageModule;
}());

//# sourceMappingURL=pending-order.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingOrderPage; });
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
 * Generated class for the PendingOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendingOrderPage = /** @class */ (function () {
    function PendingOrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PendingOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingOrderPage');
    };
    PendingOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pending-order',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/pending-order/pending-order.html"*/'<!--\n  Generated template for the PendingOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button start menuToggle color="royal">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <img src="assets/imgs/inner-logo.png" alt="" class="inner-logo">\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="dark-bg">\n  <ion-grid class="p-0">\n    <ion-row class="pending-top">\n      <ion-col col-4>\n        <p>Order list for</p>\n        <span>2 vendors</span>\n      </ion-col>\n      <ion-col col-4>\n        <p>Order #</p>\n        <span>2018</span>\n      </ion-col>\n      <ion-col col-4>\n        <p>Bottles</p>\n        <span>22</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="all-info-wrapper">\n    <ion-grid class="panel-head">\n      <ion-row>\n        <ion-col col-7>\n          <p>Southern Wines & Spirit</p>\n        </ion-col>\n        <ion-col col-5>\n          <p class="text-right"><b>$ 629.81</b></p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <p>ATTN REP: <span>Emily Martin</span></p>\n        </ion-col>\n        <ion-col col-5>\n          <p class="text-right">Min. Order $ 250</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div padding>\n      <ion-grid class="p-0">\n        <ion-row class="">\n          <ion-col col-6>\n            <p class="text-white mt-0 font-12">3 Items</p>\n          </ion-col>\n          <ion-col col-6>\n            <p class="text-white text-right mt-0 font-12">Bottles 18</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class="p-0">\n        <ion-row class="item-details">\n          <ion-col col-6>\n            <p class="item-name">Scotch</p>\n          </ion-col>\n          <ion-col col-3>\n            <p class="text-center">Par</p>\n          </ion-col>\n          <ion-col col-3>\n            <p class="text-center">Order</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class="item-details">\n          <ion-col col-6>\n            <p>Johnnie Walker Black</p>\n            <p>750 ml</p>\n          </ion-col>\n          <ion-col col-3>\n            <p class="text-center">5/6</p>\n            <p class="text-center">$ 25.99</p>\n          </ion-col>\n          <ion-col col-3>\n            <div class="order-box">2</div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="item-details">\n          <ion-col col-6>\n            <p>Glenlivet 12 Yr</p>\n            <p>1 L</p>\n          </ion-col>\n          <ion-col col-3>\n            <p class="text-center">2/8</p>\n            <p class="text-center">$ 49.99</p>\n          </ion-col>\n          <ion-col col-3>\n            <div class="order-box">7</div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="item-details">\n          <ion-col col-6>\n            <p class="item-name">Tequila</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row class="item-details">\n        <ion-col col-6>\n          <p>Espolon Silver Tequila</p>\n          <p>750 ml</p>\n        </ion-col>\n        <ion-col col-3>\n          <p class="text-center">3/12</p>\n          <p class="text-center">$ 21.99</p>\n        </ion-col>\n        <ion-col col-3>\n          <div class="order-box">9</div>\n        </ion-col>\n      </ion-row>\n      <ion-row class="item-details">\n        <ion-col col-6>\n          <div class="d-flex action-buttons">\n            <a href=""><img src="assets/imgs/add.png"></a>\n            <a href=""><img src="assets/imgs/delete.png"></a>\n            <a href=""><img src="assets/imgs/share.png"></a>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button color="primary" block small>CONFIRM ORDER</button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div class="all-info-wrapper">\n    <ion-grid class="panel-head">\n      <ion-row>\n        <ion-col col-7>\n          <p>Southern Wines & Spirit</p>\n        </ion-col>\n        <ion-col col-5>\n          <p class="text-right">\n            <b>$ 629.81</b>\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7>\n          <p>ATTN REP:\n            <span>Emily Martin</span>\n          </p>\n        </ion-col>\n        <ion-col col-5>\n          <p class="text-right">Min. Order $ 250</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div padding>\n      <ion-grid class="p-0">\n        <ion-row class="">\n          <ion-col col-6>\n            <p class="text-white mt-0 font-12">3 Items</p>\n          </ion-col>\n          <ion-col col-6>\n            <p class="text-white text-right mt-0 font-12">Bottles 18</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class="p-0">\n        <ion-row class="item-details">\n          <ion-col col-6>\n            <p class="item-name">Vodka</p>\n          </ion-col>\n          <ion-col col-3>\n            <p class="text-center">Par</p>\n          </ion-col>\n          <ion-col col-3>\n            <p class="text-center">Order</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class="item-details">\n          <ion-col col-6>\n            <p>Johnnie Walker Black</p>\n            <p>750 ml</p>\n          </ion-col>\n          <ion-col col-3>\n            <p class="text-center">5/6</p>\n            <p class="text-center">$ 25.99</p>\n          </ion-col>\n          <ion-col col-3>\n            <div class="order-box">2</div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="item-details">\n          <ion-col col-6>\n            <p>Glenlivet 12 Yr</p>\n            <p>1 L</p>\n          </ion-col>\n          <ion-col col-3>\n            <p class="text-center">2/8</p>\n            <p class="text-center">$ 49.99</p>\n          </ion-col>\n          <ion-col col-3>\n            <div class="order-box">7</div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="item-details">\n          <ion-col col-6>\n            <p class="item-name">Tequila</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row class="item-details">\n        <ion-col col-6>\n          <p>Espolon Silver Tequila</p>\n          <p>750 ml</p>\n        </ion-col>\n        <ion-col col-3>\n          <p class="text-center">3/12</p>\n          <p class="text-center">$ 21.99</p>\n        </ion-col>\n        <ion-col col-3>\n          <div class="order-box">9</div>\n        </ion-col>\n      </ion-row>\n      <ion-row class="item-details">\n        <ion-col col-6>\n          <div class="d-flex action-buttons">\n            <a href="">\n              <img src="assets/imgs/add.png">\n            </a>\n            <a href="">\n              <img src="assets/imgs/delete.png">\n            </a>\n            <a href="">\n              <img src="assets/imgs/share.png">\n            </a>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button color="primary" block small>CONFIRM ORDER</button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/pending-order/pending-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PendingOrderPage);
    return PendingOrderPage;
}());

//# sourceMappingURL=pending-order.js.map

/***/ })

});
//# sourceMappingURL=10.js.map