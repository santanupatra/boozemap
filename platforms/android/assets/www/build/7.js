webpackJsonp([7],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(101);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(builder, navCtrl, navParams, authService, alertCtrl, loadingCtrl, events, storage, fb) {
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.storage = storage;
        this.fb = fb;
        this.isValidEmail = true;
        this.passwordmatch = true;
        this.checkEmailExist = true;
        this.user_details = JSON.parse(localStorage.getItem('userData'));
        this.user_id = this.user_details.id;
    }
    ProfilePage.prototype.myProfile = function () {
        this.navCtrl.push('MyprofilePage');
    };
    ProfilePage.prototype.changePassword = function () {
        this.navCtrl.push('ChangePasswordPage');
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Profile</ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding>\n  <div class="pro-pic">\n    <img src="assets/imgs/user1.jpg" alt="">\n    <div class="camera">\n      <ion-icon name="camera"></ion-icon>\n      <input type="file">\n    </div>\n  </div>\n\n  <ion-grid class="profile-form mb-25">\n\n    <ion-row>\n      <ion-col col-4>Name</ion-col>\n      <ion-col col-1>:</ion-col>\n      <ion-col col-7>{{user_details.first_name}} {{user_details.last_name}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-4>Business</ion-col>\n      <ion-col col-1>:</ion-col>\n      <ion-col col-7>{{user_details.business_name}}</ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-4>Email</ion-col>\n      <ion-col col-1>:</ion-col>\n      <ion-col col-7>{{user_details.email}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>Phone</ion-col>\n      <ion-col col-1>:</ion-col>\n      <ion-col col-7>{{user_details.phone}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-4>Address</ion-col>\n      <ion-col col-1>:</ion-col>\n      <ion-col col-7>{{user_details.address}}</ion-col>\n    </ion-row>\n\n      <ion-row>\n        <ion-col col-4>City</ion-col>\n        <ion-col col-1>:</ion-col>\n        <ion-col col-7>{{user_details.city}}</ion-col>\n      </ion-row>\n\n        <ion-row>\n          <ion-col col-4>Country</ion-col>\n          <ion-col col-1>:</ion-col>\n          <ion-col col-7>{{user_details.country}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-4>Zip</ion-col>\n            <ion-col col-1>:</ion-col>\n            <ion-col col-7>{{user_details.postcode}}</ion-col>\n          </ion-row>\n  </ion-grid>\n \n\n  <!--<ion-grid class="pt-0 pb-0">\n    <ion-row>\n      <ion-col col-6 class="pt-0 pb-0">\n        <p class="font-16 medium mt-0 mb-0">Volunteer of</p>\n      </ion-col>\n      <ion-col col-6 class="text-right pt-0 pb-0">\n        <a href="" class="add">Add</a>\n        <a href="" class="add">Manage</a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid class="volunteer-list">\n    <ion-row>\n      <ion-col col-12>\n        <ion-list class="mb-0">\n          <ion-item class="pl-0 border-top-0 border-bottom-0">\n            <ion-avatar item-start>\n              <img src="../assets/imgs/user1.jpg">\n            </ion-avatar>\n            <h2 class="medium">Autonomous Driving Club</h2>\n            <p class="font-12">2325 Oakwood Dr. MI</p>\n          </ion-item>      \n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>-->\n\n  <button class="mb-25" ion-button color="primary" (click)="myProfile()">Edit profile</button>\n  <button class="mb-25" ion-button color="primary" (click)="changePassword()">Change Password</button>\n</ion-content>\n\n\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=7.js.map