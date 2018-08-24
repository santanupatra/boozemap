webpackJsonp([28],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/after-splash/after-splash.module": [
		284,
		27
	],
	"../pages/beer-list/beer-list.module": [
		285,
		26
	],
	"../pages/booze-list/booze-list.module": [
		286,
		25
	],
	"../pages/change-password/change-password.module": [
		287,
		24
	],
	"../pages/cocktail-costing-price/cocktail-costing-price.module": [
		288,
		23
	],
	"../pages/cocktail-costing/cocktail-costing.module": [
		289,
		22
	],
	"../pages/cocktail-costing2/cocktail-costing2.module": [
		290,
		21
	],
	"../pages/cocktail-expand/cocktail-expand.module": [
		291,
		20
	],
	"../pages/cocktail-recipe/cocktail-recipe.module": [
		292,
		19
	],
	"../pages/cocktail-total-price/cocktail-total-price.module": [
		293,
		18
	],
	"../pages/cocktail/cocktail.module": [
		294,
		17
	],
	"../pages/feeddetails/feeddetails.module": [
		295,
		16
	],
	"../pages/forgetpassword/forgetpassword.module": [
		296,
		15
	],
	"../pages/home-beer/home-beer.module": [
		297,
		14
	],
	"../pages/home-keg/home-keg.module": [
		298,
		13
	],
	"../pages/home-wine/home-wine.module": [
		299,
		12
	],
	"../pages/home/home.module": [
		300,
		11
	],
	"../pages/myprofile/myprofile.module": [
		301,
		10
	],
	"../pages/orders/orders.module": [
		311,
		9
	],
	"../pages/pending-order/pending-order.module": [
		302,
		8
	],
	"../pages/profile/profile.module": [
		303,
		7
	],
	"../pages/search/search.module": [
		304,
		6
	],
	"../pages/signin/signin.module": [
		305,
		5
	],
	"../pages/signup/signup.module": [
		306,
		4
	],
	"../pages/spirit-list/spirit-list.module": [
		307,
		3
	],
	"../pages/tabs/tabs.module": [
		308,
		2
	],
	"../pages/wine-list/wine-list.module": [
		309,
		1
	],
	"../pages/your-cocktail/your-cocktail.module": [
		310,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = {
    baseUrl: 'http://111.93.169.90/team6/boozemap/api/'
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].baseUrl;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        console.log(credentials);
        console.log(type);
        return new Promise(function (resolve, reject) {
            // let headers = new Headers();
            _this.http.post(_this.apiUrl + type, JSON.stringify(credentials))
                .subscribe(function (res) {
                console.log(res);
                resolve(res.json());
                loading.dismiss();
            }, function (err) {
                console.log(err);
                reject(err);
                loading.dismiss();
            });
        });
    };
    AuthServiceProvider.prototype.signup = function (data) {
        console.log(data);
        return this.http.post(this.apiUrl + 'users/register.json', data).map(function (res) {
            return res.json();
        });
    };
    AuthServiceProvider.prototype.login = function (data) {
        console.log(data);
        return this.http.post(this.apiUrl + 'users/token.json', data).map(function (res) {
            return res.json();
        });
    };
    AuthServiceProvider.prototype.forgetpass = function (data) {
        return this.http.post(this.apiUrl + 'users/forgotpassword.json', data).map(function (res) {
            return res.json();
        });
    };
    AuthServiceProvider.prototype.getdetails = function (data) {
        var requestoptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            url: this.apiUrl + 'userprofile',
            body: JSON.stringify(data)
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Request */](requestoptions))
            .map(function (res) {
            if (res) {
                return res.json();
            }
        });
    };
    AuthServiceProvider.prototype.updateprofile = function (data) {
        return this.http.post(this.apiUrl + 'users/edituserprofile.json', data).map(function (res) {
            return res.json();
        });
    };
    AuthServiceProvider.prototype.changepass = function (data) {
        var requestchangeoptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            url: this.apiUrl + 'users/changepassword.json',
            body: JSON.stringify(data)
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Request */](requestchangeoptions))
            .map(function (res) {
            if (res) {
                return res.json();
            }
        });
    };
    AuthServiceProvider.prototype.getData = function (type) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        //console.log(type);
        return new Promise(function (resolve, reject) {
            // let headers = new Headers();
            _this.http.get(_this.apiUrl + type)
                .subscribe(function (res) {
                //let details = res;
                //console.log(details);
                //console.log(res);
                resolve(res.json());
                loading.dismiss();
            }, function (err) {
                console.log(err);
                reject(err);
                loading.dismiss();
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(159);
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





var MyApp = /** @class */ (function () {
    function MyApp(platform, storage, statusBar, splashScreen) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            _this.storage.get('uid').then(function (val) {
                _this.id = val;
                if (_this.id) {
                    _this.nav.setRoot('HomePage');
                }
                else {
                    _this.nav.setRoot('AfterSplashPage');
                }
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                statusBar.styleDefault();
                splashScreen.hide();
                // });
            });
        });
    }
    MyApp.prototype.logout = function () {
        var _this = this;
        this.storage.ready().then(function () {
            //const data=localStorage.getItem("userData");
            localStorage.removeItem('userData');
            localStorage.setItem('userData', "");
            _this.storage.set("uid", "");
            _this.nav.setRoot('SigninPage');
        });
    };
    MyApp.prototype.boozeList = function () {
        this.nav.push('BoozeListPage');
    };
    MyApp.prototype.cocktailList = function () {
        this.nav.push('CocktailPage');
    };
    MyApp.prototype.wineList = function () {
        this.nav.push('HomeWinePage');
    };
    MyApp.prototype.profile = function () {
        this.nav.push('ProfilePage');
    };
    MyApp.prototype.login = function () {
        this.nav.push('SigninPage');
    };
    MyApp.prototype.orders = function () {
        this.nav.push('OrdersPage');
    };
    MyApp.prototype.back = function () {
        this.nav.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nits-santanu/Desktop/ionic/booza/src/app/app.html"*/'<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n<!-- <ion-footer class="footer">\n    <ion-toolbar style=" padding: 0;">\n        <ion-row class="footer-menu">\n            <ion-col text-center>\n                <a (click)="gotopage(\'HomePage\')">\n                    <ion-icon name="home"></ion-icon>\n                    <img src="assets/imgs/footer-icon-1.svg" alt="" />\n                    <p class="titl">Home</p>\n                </a>\n            </ion-col>\n            <ion-col text-center>\n                <a (click)="gotopage(\'FeedPage\')">\n                    <img src="assets/imgs/footer-icon-2.svg" alt="" />\n                    \n                </a>\n            </ion-col>\n            <ion-col text-center>\n                <a (click)="gotopage(\'ProfilePage\')">\n                    <img src="assets/imgs/footer-icon-3.svg" alt="" />\n                </a>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer> -->\n\n<ion-split-pane>\n    <ion-menu [content]="content">\n        <ion-content class="left-menu-panel">\n            <ion-card>\n                <ion-item menuClose (click)="boozeList()">\n                    <span><img src="assets/imgs/menu-boozlist.png" alt=""></span>\n                    <p>Booze List</p>\n                </ion-item>\n                <ion-item menuClose (click)="cocktailList()">\n                    <span>\n                        <img src="assets/imgs/menu-cocktail.png" alt="">\n                    </span>\n                    <p>Cocktail</p>\n                </ion-item>\n               \n                <ion-item menuClose (click)="orders();">\n                    <span>\n                        <img src="assets/imgs/menu-order.png" alt="">\n                    </span>\n                    <p>Orders</p>\n                </ion-item>\n                <ion-item menuClose>\n                    <span>\n                        <img src="assets/imgs/menu-weigh.png" alt="">\n                    </span>\n                    <p>Weigh Booze</p> \n                </ion-item>\n                <ion-item menuClose (click)="fabourite()">\n                    <span>\n                        <img src="assets/imgs/menu-memories.png" alt="">\n                    </span>\n                    <p>Memories Awaits</p> \n                </ion-item>\n                <ion-item menuClose (click)="post()">\n                    <span>\n                        <img src="assets/imgs/menu-report.png" alt="">\n                    </span>\n                    <p>Reports</p>\n                </ion-item>                \n                <ion-item menuClose (click)="profile()">\n                    <span>\n                        <img src="assets/imgs/menu-report.png" alt="">\n                    </span>\n                    <p>My Profile</p>\n                </ion-item>\n                <ion-item menuClose (click)="logout()">\n                    <span>\n                        <img src="assets/imgs/menu-logout.png" alt="">\n                    </span>\n                    <p>Log out</p> \n                </ion-item>\n            </ion-card>\n        </ion-content>\n    </ion-menu>\n\n\n\n    <!-- main navigation -->\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/home/nits-santanu/Desktop/ionic/booza/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_long_press__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/after-splash/after-splash.module#AfterSplashPageModule', name: 'AfterSplashPage', segment: 'after-splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beer-list/beer-list.module#BeerListPageModule', name: 'BeerListPage', segment: 'beer-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booze-list/booze-list.module#BoozeListPageModule', name: 'BoozeListPage', segment: 'booze-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cocktail-costing-price/cocktail-costing-price.module#CocktailCostingPricePageModule', name: 'CocktailCostingPricePage', segment: 'cocktail-costing-price', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cocktail-costing/cocktail-costing.module#CocktailCostingPageModule', name: 'CocktailCostingPage', segment: 'cocktail-costing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cocktail-costing2/cocktail-costing2.module#CocktailCosting2PageModule', name: 'CocktailCosting2Page', segment: 'cocktail-costing2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cocktail-expand/cocktail-expand.module#CocktailExpandPageModule', name: 'CocktailExpandPage', segment: 'cocktail-expand', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cocktail-recipe/cocktail-recipe.module#CocktailRecipePageModule', name: 'CocktailRecipePage', segment: 'cocktail-recipe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cocktail-total-price/cocktail-total-price.module#CocktailTotalPricePageModule', name: 'CocktailTotalPricePage', segment: 'cocktail-total-price', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cocktail/cocktail.module#CocktailPageModule', name: 'CocktailPage', segment: 'cocktail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feeddetails/feeddetails.module#FeeddetailsPageModule', name: 'FeeddetailsPage', segment: 'feeddetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgetpassword/forgetpassword.module#ForgetpasswordPageModule', name: 'ForgetpasswordPage', segment: 'forgetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-beer/home-beer.module#HomeBeerPageModule', name: 'HomeBeerPage', segment: 'home-beer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-keg/home-keg.module#HomeKegPageModule', name: 'HomeKegPage', segment: 'home-keg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-wine/home-wine.module#HomeWinePageModule', name: 'HomeWinePage', segment: 'home-wine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending-order/pending-order.module#PendingOrderPageModule', name: 'PendingOrderPage', segment: 'pending-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/spirit-list/spirit-list.module#SpiritListPageModule', name: 'SpiritListPage', segment: 'spirit-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wine-list/wine-list.module#WineListPageModule', name: 'WineListPage', segment: 'wine-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/your-cocktail/your-cocktail.module#YourCocktailPageModule', name: 'YourCocktailPage', segment: 'your-cocktail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ionic_long_press__["a" /* LongPressModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = /** @class */ (function () {
    function UserProvider(http) {
        this.http = http;
        console.log('Hello UserProvider Provider');
        console.log(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].baseUrl);
    }
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map