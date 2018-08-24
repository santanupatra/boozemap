webpackJsonp([5],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */]),
            ],
        })
    ], SigninPageModule);
    return SigninPageModule;
}());

//# sourceMappingURL=signin.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(201);
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
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(builder, navCtrl, alertCtrl, navParams, menu, authService, storage, loadingCtrl, events, myApp) {
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.authService = authService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.myApp = myApp;
        this.isLoggedIn = false;
        this.isValidEmail = true;
        this.events.publish("Msg", "Hello World");
        this.form = builder.group({
            'username': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        events.publish('hideFooter', { isHidden: true });
    }
    SigninPage.prototype.loginUser = function (formData) {
        var _this = this;
        this.authService.login(formData).subscribe(function (res) {
            if (res.ack == 1) {
                _this.storage.ready().then(function () {
                    _this.userData = localStorage.setItem('userData', JSON.stringify(res.details));
                    _this.storage.set('username', res.details['username']).then(function () {
                        _this.storage.set('uid', res.details['id']).then(function () {
                            _this.navCtrl.setRoot('HomePage');
                        });
                    });
                });
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Please enter correct credentials.',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.onSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    SigninPage.prototype.onForgotPassword = function () {
        this.navCtrl.push('ForgetpasswordPage');
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/signin/signin.html"*/'<ion-content padding class="login-bg">\n	<div class="logo"><img src="assets/imgs/logo.png" alt=""></div>\n	<form [formGroup]="form" (ngSubmit)="loginUser(form.value)">\n	<ion-list class="log-reg-wrap">\n		<ion-item>\n			<ion-label fixed>\n				<span class="icon"><img src="assets/imgs/icon-user.png" alt=""></span>\n			</ion-label>\n			<ion-input type="text" placeholder="Username" formControlName="username" required ></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label fixed>\n				<span class="icon"><img src="assets/imgs/icon-password.png" alt=""></span>\n			</ion-label>\n			<ion-input type="password" placeholder="Password" formControlName="password" required></ion-input>\n		</ion-item>\n	</ion-list>\n	<button class="mb-25 text-uppercase" ion-button color="primary" block [disabled]="!form.valid" >Go to bar</button>\n	</form>\n	<p class="text-center forgot-pass" (click)="onForgotPassword()" >Forgot password?</p>\n	<p class="text-center forgot-pass" (click)="onSignup()" >New to Inteer?</p>\n</ion-content>\n\n\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ })

});
//# sourceMappingURL=5.js.map