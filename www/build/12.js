webpackJsonp([12],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofilePageModule", function() { return MyprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myprofile__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyprofilePageModule = /** @class */ (function () {
    function MyprofilePageModule() {
    }
    MyprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myprofile__["a" /* MyprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myprofile__["a" /* MyprofilePage */]),
            ],
        })
    ], MyprofilePageModule);
    return MyprofilePageModule;
}());

//# sourceMappingURL=myprofile.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
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
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyprofilePage = /** @class */ (function () {
    function MyprofilePage(builder, navCtrl, navParams, authService, alertCtrl, loadingCtrl, events, storage, fb) {
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
            'first_name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'last_name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'business_name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'phone': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'address': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'city': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'country': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'postcode': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    MyprofilePage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    MyprofilePage.prototype.onSubmit = function (formData) {
        var _this = this;
        formData.user_id = this.user_id;
        console.log(this.user_id);
        console.log(this.rForm.valid);
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
            this.authService.updateprofile(formData).subscribe(function (res) {
                if (res.Ack == 1) {
                    console.log(res);
                    localStorage.setItem('userData', JSON.stringify(res.userupdatedata));
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
    MyprofilePage.prototype.ionViewDidLoad = function () {
        if (this.storage.get('userdata')) {
            this.rForm.controls['first_name'].setValue(this.user_details.first_name);
            this.rForm.controls['last_name'].setValue(this.user_details.last_name);
            this.rForm.controls['business_name'].setValue(this.user_details.business_name);
            this.rForm.controls['email'].setValue(this.user_details.email);
            this.rForm.controls['phone'].setValue(this.user_details.phone);
            this.rForm.controls['city'].setValue(this.user_details.city);
            this.rForm.controls['address'].setValue(this.user_details.address);
            this.rForm.controls['country'].setValue(this.user_details.country);
            this.rForm.controls['postcode'].setValue(this.user_details.postcode);
        }
        else {
            this.rForm.controls['first_name'].setValue('');
            this.rForm.controls['last_name'].setValue('');
            this.rForm.controls['phone'].setValue('');
            this.rForm.controls['city'].setValue('');
            this.rForm.controls['address'].setValue('');
            this.rForm.controls['country'].setValue('');
            this.rForm.controls['postcode'].setValue('');
        }
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/pages/myprofile/myprofile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="dark-bg">\n	<form [formGroup]="rForm" novalidate>\n	<div class="dark-container">\n	<ion-list>\n		<ion-item>\n			<ion-input type="text" placeholder="Your First Name" formControlName="first_name" value="" required></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-input type="text" placeholder="Your Last Name" formControlName="last_name" value="" required></ion-input>\n		</ion-item>\n\n		<ion-item>\n				<ion-input type="text" placeholder="Business Name" formControlName="business_name" value="" required></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-input type="text" placeholder="Your Email" formControlName="email" value="" required></ion-input>\n		</ion-item>\n\n		<ion-item>\n				<ion-input type="text" placeholder="Your Phone NO" formControlName="phone" value="" required></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-input type="text" placeholder="Your Location" formControlName="address" value=""></ion-input>\n		</ion-item>\n\n		<ion-item>\n				<ion-input type="text" placeholder="Your City" formControlName="city" value=""></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-input type="text" placeholder="Your Country" formControlName="country"></ion-input>\n		</ion-item>\n\n		<ion-item>\n				<ion-input type="text" placeholder="Your Postcode" formControlName="postcode"></ion-input>\n			</ion-item>\n\n	</ion-list>\n	<button ion-button color="primary" round block type="submit" [disabled]="!rForm.valid || !isValidEmail" block round (click)="onSubmit(rForm.value)">Submit</button>\n</div>	\n</form>\n</ion-content>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/pages/myprofile/myprofile.html"*/,
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
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ })

});
//# sourceMappingURL=12.js.map