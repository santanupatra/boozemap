webpackJsonp([26],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]),
            ],
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
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
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(builder, navCtrl, navParams, authService, alertCtrl, loadingCtrl, events, storage, fb) {
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
        this.rForm = fb.group({
            'current_password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'new_password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'con_password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    ChangePasswordPage.prototype.onSubmit = function (formData) {
        var _this = this;
        formData.user_id = this.user_id;
        if (!this.rForm.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error!',
                subTitle: "Please fill all the details.",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var loading = this.loadingCtrl.create({
                spinner: 'show',
                content: 'Loading Please Wait...',
                duration: 3000
            });
            loading.present();
            console.log(formData);
            this.authService.changepass(formData).subscribe(function (res) {
                if (res.Ack == 1) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Success!',
                        subTitle: res.message,
                        buttons: ['OK']
                    });
                    alert_2.present();
                    _this.navCtrl.push('ProfilePage');
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: res.message,
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Auth Failed!',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/change-password/change-password.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Change Password</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding class="dark-bg">\n      <form [formGroup]="rForm" novalidate>\n    <div class="dark-container">\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" placeholder="Current password" formControlName="current_password" value="" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="New Password" formControlName="new_password" value="" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Re-type password" formControlName="con_password" value="" required></ion-input>\n        </ion-item>        \n      </ion-list>\n      <button ion-button block class="text-uppercase" type="submit" [disabled]="!rForm.valid" block round (click)="onSubmit(rForm.value)">Submit</button>\n    </div>\n    </form>\n  </ion-content>\n  '/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/change-password/change-password.html"*/,
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
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=26.js.map