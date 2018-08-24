webpackJsonp([4],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(200);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(builder, navCtrl, navParams, authService, alertCtrl, loadingCtrl, events, fb) {
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.fb = fb;
        this.isValidEmail = true;
        this.passwordmatch = true;
        this.checkEmailExist = true;
        this.rForm = fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'con_password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'postcode': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.checkpassword = function (conpass, frmval) {
        console.log(frmval.password);
        console.log(conpass);
        if (frmval.password == conpass) {
            this.passwordmatch = true;
        }
        else {
            this.passwordmatch = false;
        }
    };
    SignupPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    SignupPage.prototype.onSubmit = function (formData) {
        var _this = this;
        console.log(formData);
        console.log(this.rForm.valid);
        if (!this.rForm.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Signup Failed!',
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
            this.authService.signup(formData).subscribe(function (res) {
                var details = res.details;
                if (details.ack == 1) {
                    console.log(res);
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Success!',
                        subTitle: 'Registration Successfully Done. Please Click in Your Mail',
                        buttons: ['OK']
                    });
                    alert_2.present();
                    _this.navCtrl.push('SigninPage');
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: details.message,
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Auth Failed!',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.push('SigninPage');
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/signup/signup.html"*/'<ion-content padding class="reg-bg">\n	<div class="logo"><img src="assets/imgs/logo.png" alt=""></div>\n	<form [formGroup]="rForm" novalidate>\n	<ion-list class="log-reg-wrap">\n		<ion-item>\n			<ion-label fixed>\n				<span class="icon">\n					<img src="assets/imgs/icon-user.png" alt="">\n				</span>\n			</ion-label>\n			<ion-input type="text" placeholder="Username" formControlName="username" value="" required ></ion-input>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label fixed>\n				<span class="icon">\n					<img src="assets/imgs/icon-password.png" alt="">\n				</span>\n			</ion-label>\n			<ion-input type="password" placeholder="Password" formControlName="password" value="" required ></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label fixed>\n				<span class="icon">\n					<img src="assets/imgs/icon-password.png" alt="">\n				</span>\n			</ion-label>\n			<ion-input type="password" placeholder="Confirm password" formControlName="con_password" required (ngModelChange)="checkpassword($event,rForm.value)" ></ion-input>\n		</ion-item>\n			\n		<ion-item>\n			<ion-label fixed>\n				<span class="icon">\n					<img src="assets/imgs/icon-mail.png" alt="">\n				</span>\n			</ion-label>\n			<ion-input type="text" placeholder="Email" formControlName="email" required></ion-input>\n		</ion-item>\n		<p *ngIf="!checkEmailExist" ion-text color="danger">This email already exist. </p>\n\n		<ion-item>\n			<ion-label fixed>\n				<span class="icon">\n					<img src="assets/imgs/icon-zip.png" alt="">\n				</span>\n			</ion-label>\n			<ion-input type="text" placeholder="Zip code" formControlName="postcode" required ></ion-input>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label fixed>\n				<span class="icon">\n					<img src="assets/imgs/icon-level.png" alt="">\n				</span>\n			</ion-label>\n			<ion-input type="text" placeholder="Level of access"></ion-input>\n		</ion-item>\n	</ion-list>\n	<p *ngIf="!passwordmatch" ion-text color="danger">Password and Confirm password not match </p>\n	<button class="mb-25 text-uppercase" ion-button color="primary" type="submit" [disabled]="!rForm.valid || !passwordmatch || !isValidEmail || !checkEmailExist" block round (click)="onSubmit(rForm.value)">Register</button>\n	<p *ngIf="!rForm.controls[\'postcode\'].valid && rForm.controls[\'postcode\'].touched" ion-text color="danger" >Zip Code is required </p>\n	</form>\n	<!-- <p class="text-center forgot-pass"><a href="">Forgot password?</a></p>-->\n	<p class="text-center forgot-pass" (click)="login()">Already have an account?</p> \n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=4.js.map