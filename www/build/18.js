webpackJsonp([18],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeddetailsPageModule", function() { return FeeddetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feeddetails__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeeddetailsPageModule = /** @class */ (function () {
    function FeeddetailsPageModule() {
    }
    FeeddetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feeddetails__["a" /* FeeddetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feeddetails__["a" /* FeeddetailsPage */]),
            ],
        })
    ], FeeddetailsPageModule);
    return FeeddetailsPageModule;
}());

//# sourceMappingURL=feeddetails.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeeddetailsPage; });
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
 * Generated class for the FeeddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeeddetailsPage = /** @class */ (function () {
    function FeeddetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeeddetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeeddetailsPage');
    };
    FeeddetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feeddetails',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/feeddetails/feeddetails.html"*/'\n<ion-content *ngIf="opportunity">\n\n  <img src="{{imgurl}}{{ opportunity.image }}" alt="" style="position: absolute;width: 100%;" *ngIf="opportunity.image">\n  <img src="assets/imgs/img-1.jpg" alt="" style="position: absolute;width: 100%;" *ngIf="!opportunity.image">\n  \n  <p class="imgtext">{{ opportunity.opportunity_name }}</p>\n\n  <ion-list style="margin-top: 58%;">\n    <ion-item>\n      <ion-icon name="navigate" item-start style="color: #3da9f4;"></ion-icon>\n        27284 Strawberry lane\n      <button ion-button clear item-end>Edit</button>\n    </ion-item>\n\n    <ion-item padding>\n      <ion-label floating>Description</ion-label>\n      <ion-input type="text" [(ngModel)]="desc"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <!-- <ion-list>\n    <ion-item class="feed-top pl-0">\n      <ion-avatar item-start>\n        <img src="../assets/imgs/user1.jpg" alt="">\n      </ion-avatar>\n      <h2 class="d-flex">\n        <span>John Doe</span>\n        <span><button ion-button outline round class="mt-0 mb-0">Update Profile</button></span>\n      </h2>\n      <p class="font-12">Lead Designer at RL Creative Studio</p>\n\n      <ion-grid class="pl-0 pr-0 pt-0">\n        <ion-row class="feed-links">\n          <ion-col class="pl-0 pr-0 pt-0"><a href=""><ion-icon name="heart"></ion-icon> Saved</a></ion-col>\n          <ion-col class="pl-0 pr-0 pt-0"><a href=""><ion-icon name="share"></ion-icon> Shared</a></ion-col>\n          <ion-col class="pl-0 pr-0 pt-0"><a href=""><ion-icon name="add"></ion-icon> Post New</a></ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-item>\n  </ion-list> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/feeddetails/feeddetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], FeeddetailsPage);
    return FeeddetailsPage;
}());

//# sourceMappingURL=feeddetails.js.map

/***/ })

});
//# sourceMappingURL=18.js.map