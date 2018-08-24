webpackJsonp([17],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordPageModule", function() { return ForgetpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgetpassword__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgetpasswordPageModule = /** @class */ (function () {
    function ForgetpasswordPageModule() {
    }
    ForgetpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgetpassword__["a" /* ForgetpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgetpassword__["a" /* ForgetpasswordPage */]),
            ],
        })
    ], ForgetpasswordPageModule);
    return ForgetpasswordPageModule;
}());

//# sourceMappingURL=forgetpassword.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetpasswordPage; });
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
 * Generated class for the ForgetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetpasswordPage = /** @class */ (function () {
    function ForgetpasswordPage(builder, navCtrl, alertCtrl, navParams, menu, authService, storage, loadingCtrl, events, myApp) {
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
        this.rForm = builder.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        events.publish('hideFooter', { isHidden: true });
    }
    ForgetpasswordPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ForgetpasswordPage.prototype.forgotPass = function (formData) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'show',
            content: 'Loading Please Wait...',
            duration: 3000
        });
        loading.present();
        this.authService.forgetpass(formData).subscribe(function (res) {
            if (res.ack == 1) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Success',
                    subTitle: res.message,
                    buttons: ['OK']
                });
                alert_1.present();
                _this.storage.ready().then(function () {
                    _this.navCtrl.setRoot('SigninPage');
                });
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Please enter correct email.',
                    buttons: ['OK']
                });
                alert_2.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ForgetpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetpasswordPage');
    };
    ForgetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgetpassword',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/forgetpassword/forgetpassword.html"*/'<ion-content padding class="login-bg">\n	<div class="logo"><img src="assets/imgs/logo.png" alt=""></div>\n	<form [formGroup]="rForm" (ngSubmit)="forgotPass(rForm.value)">\n	<ion-list class="log-reg-wrap">\n		<ion-item>\n			<ion-label fixed>\n				<span class="icon"><img src="assets/imgs/icon-mail.png" alt=""></span>\n			</ion-label>\n			<ion-input type="text" placeholder="Email" formControlName="email" required ></ion-input>\n		</ion-item>	\n		<p *ngIf="!rForm.controls[\'email\'].valid && rForm.controls[\'email\'].touched" ion-text color="danger">Email is required </p>\n		<p *ngIf="!isValidEmail" ion-text color="danger">Please enter valid email id. </p>	\n	</ion-list>\n	<button class="mb-25 text-uppercase" ion-button color="primary" block [disabled]="!rForm.valid" >Submit</button>\n	</form>\n	\n</ion-content>\n\n\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/forgetpassword/forgetpassword.html"*/,
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
    ], ForgetpasswordPage);
    return ForgetpasswordPage;
}());

//# sourceMappingURL=forgetpassword.js.map

/***/ })

});
//# sourceMappingURL=17.js.map