webpackJsonp([12],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_services_http_services__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(32);
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
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalPage = /** @class */ (function () {
    function PersonalPage(navCtrl, navParams, storage, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpservices = httpservices;
        this.userinfo = '';
    }
    PersonalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalPage');
    };
    PersonalPage.prototype.loginOut = function () {
        //用户信息保存在localstorage
        this.storage.remove('userinfo');
        //跳转到用户中心
        this.navCtrl.popToRoot();
    };
    PersonalPage.prototype.ionViewWillEnter = function () {
        var userinfo = this.storage.get("userinfo");
        if (userinfo && userinfo.username) {
            this.userinfo = userinfo;
        }
        else {
            this.userinfo = '';
        }
    };
    PersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-personal',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\personal\personal.html"*/'<!--\n  Generated template for the PersonalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>账户资料</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list inset class="personal">\n    <ion-item>\n         头像\n        <span class="item-note">\n            <img  src="../../assets/imgs/xfn.png" class="avatar"/>\n        </span>\n\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n    </ion-item>\n\n    \n\n      <ion-item>\n        \n        用户名\n        <span class="item-note">\n          {{userinfo.username}}\n        </span>         \n        \n        <ion-icon name="ios-arrow-forward" item-end style="visibility:hidden"></ion-icon>\n      </ion-item>\n\n      <ion-item class="item-icon-right">\n          \n          昵称\n        <span class="item-note">\n          天王盖地虎\n        </span>\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item>            \n        <ion-label>性别</ion-label>\n        <ion-select>\n          <ion-option value="man" selected="true">男</ion-option>\n          <ion-option value="woman">女</ion-option>\n          <ion-option value="null">保密</ion-option>\n        </ion-select>\n\n        \n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>出生年月</ion-label>\n        <ion-select>\n          <ion-option value="01">1月</ion-option>\n          <ion-option value="02">2月</ion-option>\n          <ion-option value="03" selected="true">3月</ion-option>\n          <ion-option value="04">4月</ion-option>\n          <ion-option value="05">5月</ion-option>\n          <ion-option value="06">6月</ion-option>\n          <ion-option value="07">7月</ion-option>\n          <ion-option value="08">8月</ion-option>\n          <ion-option value="09">9月</ion-option>\n          <ion-option value="10">10月</ion-option>\n          <ion-option value="11">11月</ion-option>\n          <ion-option value="12">12月</ion-option>\n        </ion-select>\n        \n        <ion-select>\n          <ion-option>2019年</ion-option>\n          <ion-option>2018年</ion-option>\n          <ion-option>2017年</ion-option>\n          <ion-option>2016年</ion-option>\n          <ion-option>2015年</ion-option>\n          <ion-option selected="true">2014年</ion-option>\n          <ion-option>2013年</ion-option>\n          <ion-option>2012年</ion-option>\n          <ion-option>2011年</ion-option>\n          <ion-option>2010年</ion-option>\n          <ion-option>2009年</ion-option>\n        </ion-select>\n        \n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n</ion-list>\n\n<button ion-button block color="danger" class="exit_btn" (tap)="loginOut()">退出登录</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\personal\personal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], PersonalPage);
    return PersonalPage;
}());

//# sourceMappingURL=personal.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaifaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the DaifaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DaifaPage = /** @class */ (function () {
    function DaifaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DaifaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DaifaPage');
    };
    DaifaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-daifa',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\daifa\daifa.html"*/'<!--\n\n  Generated template for the DaifaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar  color="dark">\n\n    <ion-title>待发</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\daifa\daifa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DaifaPage);
    return DaifaPage;
}());

//# sourceMappingURL=daifa.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LianxirenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the LianxirenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LianxirenPage = /** @class */ (function () {
    function LianxirenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LianxirenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LianxirenPage');
    };
    LianxirenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lianxiren',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\lianxiren\lianxiren.html"*/'<!--\n\n  Generated template for the LianxirenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar  color="dark">\n\n    <ion-title>联系人</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\lianxiren\lianxiren.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LianxirenPage);
    return LianxirenPage;
}());

//# sourceMappingURL=lianxiren.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(32);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, storage, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpservices = httpservices;
        this.userinfo = {
            username: '',
            password: '',
        };
        this.RegisterPage = __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */];
        this.history = this.navParams.get("history");
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginQustion = function () {
        console.log('登录成功啦');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        // 1、获取this.userinfo的表单信息
        // console.log(this.userinfo);
        if (this.userinfo.username.length < 6) {
            alert("用户名不合法");
        }
        else {
            var api = 'api/doLogin';
            this.httpservices.doPost(api, this.userinfo, function (data) {
                console.log(data);
                if (data.success) {
                    // alert("登录成功")
                    _this.storage.set('userinfo', data.userinfo[0]);
                    if (_this.history == "order ") {
                        _this.navCtrl.pop();
                        // 返回到上一个页面
                    }
                    else {
                        _this.navCtrl.popToRoot(); /* 回到根页面 */
                    }
                }
                else {
                    alert(data.message);
                }
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>登录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <ion-item>\n        <ion-label>\n        <ion-icon name="person" start color="primary"></ion-icon>\n        </ion-label>\n        <ion-input type="string" placeholder="用户名/手机号/邮箱" [(ngModel)]="userinfo.username"></ion-input>\n     </ion-item>\n    <ion-item>\n        <ion-label>\n        <ion-icon name="lock" start color="primary"></ion-icon>\n        </ion-label>\n        <ion-input type="password" placeholder="密码" [(ngModel)]="userinfo.password"></ion-input>\n     </ion-item>\n     \n     <ion-item no-lines class="list-end">\n        <span item-start [navPush]="RegisterPage">手机快速注册</span>\n        <span item-end class="forgrt">忘记密码?</span>\n     </ion-item>\n\n     <button ion-button  block class="login-btn1" (click)="doLogin()" >登录</button>\n<!-- <div class="wrap">\n\n     <div class="remember-btn">\n      <input type="checkbox" value="true" checked="checked" name="session[remember_me]" id="session_remember_me"><span>记住我</span>\n    </div>\n\n    <div class="forget-btn">\n      <a class="" data-toggle="dropdown" href="">登录遇到问题?</a>\n      \n    </div>\n    \n  </div>\n\n  <button ion-button round block>登录</button>\n\n  <div class="other-login">\n      <h6>社交帐号直接注册/登录</h6>\n      <ul>\n    <li><a id="weixin" class="weixin" target="_blank" href="/users/auth/wechat"><i class="iconfont ic-wechat"></i></a></li>\n    <li><a id="qq" class="qq" target="_blank" href="/users/auth/qq_connect"><i class="iconfont ic-qq_connect"></i></a></li>\n  </ul>\n  \n    </div> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistersignPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerpassword_registerpassword__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(32);
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
 * Generated class for the RegistersignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistersignPage = /** @class */ (function () {
    function RegistersignPage(navCtrl, navParams, httpservices, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpservices = httpservices;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.code = ''; /* 默认空的验证码 */
        this.showcode = false; /*    在验证码倒计时和重新发送中切换  前面html中用ngif判断 */
        this.num = 5; /*  倒数计时的数量 */
        this.tel = '';
        this.tel = this.storage.get('reg_tel');
    }
    RegistersignPage.prototype.ionViewDidLoad = function () {
        this.doTimer();
    };
    RegistersignPage.prototype.goRegisterpasswordPage = function () {
        var _this = this;
        if (/^\d{4}$/.test(this.code)) {
            // 验证验证码是否正确
            var api = 'api/validateCode';
            this.httpservices.doPost(api, { "tel": this.tel, "code": this.code }, function (result) {
                console.log(result); /* 测试 */
                if (result.success) {
                    //  保存验证码
                    _this.storage.set('reg_code', _this.code);
                    // 跳转到下个页面
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registerpassword_registerpassword__["a" /* RegisterpasswordPage */]);
                }
                else {
                    alert("验证码错误，请重新输入");
                }
            });
        }
        else {
            alert("验证码位数不正确");
        }
    };
    // 倒计时的方法
    RegistersignPage.prototype.doTimer = function () {
        var _this = this;
        var timer = setInterval(function () {
            --_this.num;
            if (_this.num == 0) {
                clearInterval(timer);
                _this.showcode = true;
            }
        }, 1000);
    };
    // 发送验证码
    RegistersignPage.prototype.sendCode = function () {
        // 获取电话号码
        var _this = this;
        // console.log("请重新发送验证码")
        var api = 'api/sendCode';
        this.httpservices.doPost(api, { "tel": this.tel, "code": this.tel }, function (result) {
            console.log(result); /* 测试 */
            console.log(result.code);
            _this.presentToast(result);
            if (result.success) {
                _this.num = 10; /* 设置倒计时 */
                _this.doTimer(); /* 倒计时 */
                _this.showcode = false; /* 显示倒计按钮 */
            }
            else {
                alert("发送错误了噢，请重新发送");
            }
        });
    };
    /* 弹出验证码 */
    RegistersignPage.prototype.presentToast = function (result) {
        var toast = this.toastCtrl.create({
            message: result.code,
            duration: 3000
        });
        toast.present();
    };
    RegistersignPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registersign',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\registersign\registersign.html"*/'<!--\n  Generated template for the RegistersignPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>发送短信界面</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="code-info">\n    <h4 class="positive">马上验证手机,激活你的账户</h4>\n    <p class="code-sign-p">验证码已通过短信方式发送至{{tel}},请输入验证码完成验证登录!</p>\n  </div>\n\n  <div class="sign-page">\n    <input type="text" [(ngModel)]="code" placeholder="验证码" maxlength="4">\n    <div class="timer" *ngIf="!showcode" >倒计时{{num}}</div>\n    <div class="timer" *ngIf="showcode"  (tap)="sendCode()">重新发送</div>\n  </div>\n\n  <button ion-button  block class="msg-btn" (tap)="goRegisterpasswordPage()" >下一步</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\registersign\registersign.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], RegistersignPage);
    return RegistersignPage;
}());

//# sourceMappingURL=registersign.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(32);
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
 * Generated class for the RegisterpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterpasswordPage = /** @class */ (function () {
    function RegisterpasswordPage(navCtrl, navParams, storage, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpservices = httpservices;
        this.tel = '';
        this.code = '';
        this.password = '';
        this.rpassword = '';
        this.tel = storage.get('reg_tel');
        this.code = storage.get('reg_code');
    }
    RegisterpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterpasswordPage');
    };
    RegisterpasswordPage.prototype.doRegister = function () {
        var _this = this;
        if (this.password != this.rpassword) {
            alert('确认密码和密码不一致');
        }
        else if (this.password.length < 6) {
            alert('密码长度不能小于六位');
        }
        else {
            var api = 'api/register';
            this.httpservices.doPost(api, { "tel": this.tel,
                "code": this.code,
                "password": this.password, }, function (result) {
                console.log(result); /* 测试 */
                if (result.success) {
                    // 保存用户信息
                    _this.storage.set('userinfo', result.userinfo[0]);
                    _this.navCtrl.popToRoot(); /* 回到根页面 */
                }
                else {
                    alert("注册失败");
                }
            });
        }
    };
    RegisterpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registerpassword',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\registerpassword\registerpassword.html"*/'<!--\n  Generated template for the RegisterpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>填写密码界面</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list >\n  \n      <ion-item id="lf">\n          \n          <ion-input type="password" placeholder="请输入密码" [(ngModel)]="password"></ion-input>\n      </ion-item>\n      <ion-item id="lf">\n          \n          <ion-input type="password" placeholder="确认密码" [(ngModel)]="rpassword"></ion-input>\n      </ion-item>\n      \n      <ion-item no-lines class="reg-text" id="lf">\n        <span item-end>\n          本密码由6-26为字母、数字、特殊符号组成，注意大小写!\n        </span>\n      </ion-item>\n\n    </ion-list>\n\n     <button ion-button  block class="next-btn"  (click)="doRegister()" >完成</button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\registerpassword\registerpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], RegisterpasswordPage);
    return RegisterpasswordPage;
}());

//# sourceMappingURL=registerpassword.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MubanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the MubanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MubanPage = /** @class */ (function () {
    function MubanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MubanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MubanPage');
    };
    MubanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-muban',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\muban\muban.html"*/'<!--\n\n  Generated template for the MubanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar  color="dark">\n\n    <ion-title>muban</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\muban\muban.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MubanPage);
    return MubanPage;
}());

//# sourceMappingURL=muban.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_services_http_services__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__personal_personal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__ = __webpack_require__(32);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, storage, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpservices = httpservices;
        this.LoginPage = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        this.RegisterPage = __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */];
        this.PersonalPage = __WEBPACK_IMPORTED_MODULE_1__personal_personal__["a" /* PersonalPage */];
        // public isLogin=false;
        this.userinfo = '';
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var userinfo = this.storage.get("userinfo");
        if (userinfo && userinfo.username) {
            this.userinfo = userinfo;
        }
        else {
            this.userinfo = '';
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\settings\settings.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>用户</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n  \n    <div class="login" *ngIf="!userinfo" >\n      <div class="usering">\n          <img src="../../assets/imgs/xfn.png" />\n      </div>\n  \n      <div class="login-btn">\n        <button ion-button [navPush]=\'LoginPage\'>登陆</button>\n        <button ion-button [navPush]=\'RegisterPage\'>注册</button>\n      </div>\n  \n    </div>\n  \n    <ion-list *ngIf="userinfo" >\n      <ion-item [navPush]="PersonalPage">\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/xfn.png">\n          </ion-avatar>\n          <h2>用户名:{{userinfo.username}}</h2>\n          <p>璀璨钻石</p>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n    </ion-list>\n  \n  \n    <ion-list inset >\n        <ion-item-divider></ion-item-divider>\n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="pricetags" item-start></ion-icon>\n              <span>特征管理</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n  \n        \n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="list" item-start></ion-icon>\n              <span>职业树管理</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n  \n        \n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="trending-down" item-start></ion-icon>\n              <span>自定义分类管理</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n\n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="time" item-start></ion-icon>\n              <span>时间管理</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n  \n  \n  \n        <ion-item-divider></ion-item-divider>\n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="notifications" item-start></ion-icon>\n              <span>消息设置</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n  \n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="refresh-circle" item-start></ion-icon>\n              <span>检查更新</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n\n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="trash" item-start></ion-icon>\n              <span>清除本地数据库</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n\n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="headset" item-start></ion-icon>\n              <span>帮助反馈</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\app\goodApp\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShixiangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the ShixiangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShixiangPage = /** @class */ (function () {
    function ShixiangPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShixiangPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShixiangPage');
    };
    ShixiangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shixiang',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\shixiang\shixiang.html"*/'<!--\n\n  Generated template for the ShixiangPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar  color="dark">\n\n    <ion-title>工作事项</ion-title>\n\n    <!-- <ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar> -->\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\shixiang\shixiang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ShixiangPage);
    return ShixiangPage;
}());

//# sourceMappingURL=shixiang.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TixingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_settings__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_calendar__ = __webpack_require__(166);
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
 * Generated class for the TixingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TixingPage = /** @class */ (function () {
    function TixingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SettingsPage = __WEBPACK_IMPORTED_MODULE_0__settings_settings__["a" /* SettingsPage */];
        this.isHidden = true;
        this.bottomHidden = true;
        this.CalendarModule = __WEBPACK_IMPORTED_MODULE_3_ionic3_calendar__["a" /* CalendarModule */];
        this.chromeReleased = '2008-08';
    }
    TixingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TixingPage');
    };
    TixingPage.prototype.showUnder = function () {
        console.log("显示/隐藏下面成功");
        this.isHidden = !this.isHidden;
    };
    TixingPage.prototype.hiddenfour = function () {
        console.log("隐藏上面成功");
        this.bottomHidden = !this.bottomHidden;
    };
    TixingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tixing',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\tixing\tixing.html"*/'<!--\n\n  Generated template for the TixingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header >\n\n\n\n  <ion-navbar color="dark">\n\n      <ion-buttons start>\n\n          <button ion-button [navPush]="SettingsPage">\n\n            <ion-icon name="cog" class="settingsIcon"></ion-icon>\n\n          </button>\n\n     </ion-buttons>\n\n\n\n    <ion-title>\n\n        <ion-datetime displayFormat="YYYY-MM" min="1990-01" max="2034-12" [(ngModel)]="chromeReleased" cancelText="取消" doneText="确定"></ion-datetime>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="calendar.today()">今天</button>\n\n   </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="top">\n\n      <ion-chip  class="ml show" (tap)="showUnder()" ><!-- 显示隐藏下方事件 -->\n\n          <ion-icon name="ios-arrow-down" color="gray"></ion-icon>\n\n        </ion-chip>\n\n\n\n      <ion-chip color="danhuise" style="width:40px;text-align:center" class="chip">\n\n          <ion-label>日</ion-label>\n\n        </ion-chip>\n\n      <ion-chip color="danhuise" style="width:80px;text-align:center">\n\n          <ion-label>行事历</ion-label>\n\n        </ion-chip>\n\n      <ion-chip color="danhuise"  style="width:50px;text-align:center">\n\n          <ion-label>周</ion-label>\n\n        </ion-chip>\n\n\n\n        <ion-chip color="primary" class="more" >\n\n            <ion-icon name="md-more" color="primary"></ion-icon>\n\n          </ion-chip>\n\n\n\n          <!-- <ion-fab  clsss="morebtn">\n\n              <button ion-fab color="primary"><ion-icon name="md-more"></ion-icon></button>\n\n              <ion-fab-list side="bottom">\n\n                <button ion-fab (click)="openSocial(\'addItems\', fab4)"><ion-icon name="add"></ion-icon></button>\n\n                <button ion-fab (click)="openSocial(\'addAlert\', fab4)"><ion-icon name="heart"></ion-icon></button>\n\n                <button ion-fab (click)="openSocial(\'addAlert\', fab4)"><ion-icon name="share"></ion-icon></button>\n\n              </ion-fab-list>\n\n            </ion-fab> -->\n\n              \n\n\n\n  </div>\n\n  <div class="mid" *ngIf="isHidden">\n\n          <!-- 日历插件 -->\n\n\n\n         <ion-calendar #calendar></ion-calendar>\n\n        <div class="upicon">\n\n            <ion-icon name="ios-arrow-up-outline" text-center (tap)="hiddenfour()"></ion-icon>\n\n        </div>\n\n  </div>\n\n  <div class="bottom">\n\n    <div class="bottom_header" *ngIf="isHidden" >\n\n        <ion-segment [(ngModel)]="tabs">\n\n          \n\n            <ion-segment-button value="tx">\n\n              提醒\n\n            </ion-segment-button>\n\n            <ion-segment-button value="cj">\n\n              创建\n\n            </ion-segment-button>\n\n            <ion-segment-button value="ks">\n\n              开始\n\n              </ion-segment-button>\n\n            <ion-segment-button value="js">\n\n              结束\n\n              </ion-segment-button>\n\n            <ion-segment-button value="gd">\n\n              归档\n\n              </ion-segment-button>\n\n\n\n        </ion-segment>\n\n    </div>\n\n\n\n    <div [ngSwitch]="tabs">\n\n        <div class="bottom_content">\n\n            <div *ngSwitchCase="\'tx\'">\n\n              <ion-icon name="filing" text-center></ion-icon>\n\n                <p>在当前时间没有设置过提醒</p>\n\n              </div>\n\n        </div>\n\n        <div class="bottom_content">\n\n            <div *ngSwitchCase="\'cj\'">\n\n              <ion-icon name="filing" text-center></ion-icon>\n\n                <p>在当前时间没有创建过事项</p>\n\n              </div>\n\n        </div>\n\n        <div class="bottom_content">\n\n            <div *ngSwitchCase="\'ks\'">\n\n              <ion-icon name="filing" text-center></ion-icon>\n\n                <p>在当前时间没有事项开始过</p>\n\n              </div>\n\n        </div>\n\n        <div class="bottom_content">\n\n            <div *ngSwitchCase="\'js\'">\n\n              <ion-icon name="filing" text-center></ion-icon>\n\n                <p>在当前时间没有事项结束过</p>\n\n              </div>\n\n        </div>\n\n        <div class="bottom_content">\n\n            <div *ngSwitchCase="\'gd\'">\n\n              <ion-icon name="filing" text-center></ion-icon>\n\n                <p>在当前时间没有归档过事项</p>\n\n              </div>\n\n        </div>\n\n    </div>\n\n  </div>\n\n\n\n\n\n \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\tixing\tixing.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], TixingPage);
    return TixingPage;
    var _a, _b;
}());

//# sourceMappingURL=tixing.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConfigProvider = /** @class */ (function () {
    function ConfigProvider() {
        // 公共请求数据地址前缀
        this.apiUrl = "http://jd.itying.com/";
        console.log('Hello ConfigProvider Provider');
    }
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/daifa/daifa.module": [
		415,
		26
	],
	"../pages/lianxiren/lianxiren.module": [
		416,
		25
	],
	"../pages/login/login.module": [
		417,
		24
	],
	"../pages/muban/muban.module": [
		418,
		23
	],
	"../pages/personal/personal.module": [
		419,
		22
	],
	"../pages/register/register.module": [
		420,
		20
	],
	"../pages/register2/register2.module": [
		421,
		21
	],
	"../pages/registerpassword/registerpassword.module": [
		422,
		19
	],
	"../pages/registersign/registersign.module": [
		423,
		18
	],
	"../pages/settings-list/settings-list.module": [
		428,
		17
	],
	"../pages/settings/settings.module": [
		424,
		16
	],
	"../pages/shixiang/shixiang.module": [
		425,
		15
	],
	"../pages/tixing/tixing.module": [
		426,
		14
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
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(124);
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
  Generated class for the HttpServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpServicesProvider = /** @class */ (function () {
    function HttpServicesProvider(http, jsonp, Config) {
        this.http = http;
        this.jsonp = jsonp;
        this.Config = Config;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        console.log('Hello HttpServicesProvider Provider');
    }
    // 下面是封装的公共请求数据方法
    // apiUrl：api/focus   用&拼接callback
    // apiUrl：api/plist?page=1   用?拼接callback
    HttpServicesProvider.prototype.ruquestData = function (apiUrl, callback) {
        //                      ↓ ==-1表示不存在问号
        if (apiUrl.indexOf('?') == -1) {
            var api = this.Config.apiUrl + apiUrl + '?callback=JSONP_CALLBACK'; /*  没有问号 */
        }
        else {
            var api = this.Config.apiUrl + apiUrl + '&callback=JSONP_CALLBACK'; /*   有问号  */
            // http://39.108.159.135/  +  paid/plist?is_best=1  +  &callback=JSONP_CALLBACK
        }
        //              ↓ api是config的地址前缀+上apiUrl传过来的参数+上是否回调
        this.jsonp.get(api).subscribe(function (data) {
            // console.log(data);
            callback(data['_body']); /*回调函数*/
        }, function (err) {
            console.log(err);
        });
    };
    // 封装post提交数据的方法
    HttpServicesProvider.prototype.doPost = function (apiUrl, json, callback) {
        var api = this.Config.apiUrl + apiUrl;
        this.http.post(api, JSON.stringify(json), { headers: this.headers })
            .subscribe(function (res) {
            callback(res.json());
        });
    };
    HttpServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], HttpServicesProvider);
    return HttpServicesProvider;
}());

//# sourceMappingURL=http-services.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
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
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(http) {
        this.http = http;
        console.log('Hello StorageProvider Provider');
    }
    // 储存内容到storage
    StorageProvider.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value)); /* 对象转换成字符串 */
    };
    // 获取storage的内容
    StorageProvider.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key)); /* 字符串转换成对象 */
    };
    // 删除storage的内容
    StorageProvider.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tixing_tixing__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lianxiren_lianxiren__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shixiang_shixiang__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__daifa_daifa__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__muban_muban__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__muban_muban__["a" /* MubanPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__daifa_daifa__["a" /* DaifaPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__shixiang_shixiang__["a" /* ShixiangPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__lianxiren_lianxiren__["a" /* LianxirenPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_0__tixing_tixing__["a" /* TixingPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="4">\n\n  <ion-tab [root]="tab1Root" tabTitle="模板" tabIcon="cube"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="代发" tabIcon="send"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="事项" tabIcon="flame"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="联系人" tabIcon="people"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="提醒" tabIcon="notifications"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Register2Page = /** @class */ (function () {
    function Register2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Register2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    Register2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register2',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\register2\register2.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>注册界面</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <body class="no-padding reader-black-font" lang="zh-CN">\n    <div class="sign">\n      <div class="logo"><a href="/"><img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"\n            alt="Logo"></a></div>\n      <div class="main">\n\n\n\n        <h4 class="title">\n          <div class="normal-title">\n            <a class="" href="/sign_in">登录</a>\n            <b>·</b>\n            <a id="js-sign-up-btn" class="active" href="/sign_up">注册</a>\n          </div>\n        </h4>\n        <div class="js-sign-up-container">\n          <form class="new_user" id="new_user" action="/users/register" accept-charset="UTF-8" method="post"><input\n              name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="1ClWj94TToX5o/orEHlRGhliyXHoFv0Km7lPncTFL8QJ/xUJt8PxICyZoAAmmu2iFrrELZHbJsJOxo4lOaVzXA==">\n            <div class="input-prepend restyle">\n              <input placeholder="你的昵称" type="text" value="" name="user[nickname]" id="user_nickname">\n              <i class="iconfont ic-user"></i>\n            </div>\n            <div class="input-prepend restyle no-radius js-normal">\n              <input type="hidden" value="CN" name="user[mobile_number_country_code]" id="user_mobile_number_country_code">\n              <input placeholder="手机号" type="tel" name="user[mobile_number]" id="user_mobile_number">\n              <i class="iconfont ic-phonenumber"></i>\n            </div>\n            <input type="hidden" name="oversea" id="oversea" value="false">\n            <input type="hidden" name="force_user_nonexist" id="force_user_nonexist" value="true">\n            <div class="input-prepend restyle no-radius security-up-code js-security-number hide">\n              <input type="text" name="sms_code" id="sms_code" placeholder="手机验证码">\n              <i class="iconfont ic-verify"></i>\n              <a tabindex="-1" class="btn-up-resend js-send-code-button disable" href="javascript:void(0);" id="send_code">发送验证码</a>\n              <div>\n                <div class="captcha"><input name="captcha[validation][challenge]" autocomplete="off" type="hidden"\n                    value="3b326436b36e6a767ef8fd9c95d29d3f"> <input name="captcha[validation][gt]" autocomplete="off"\n                    type="hidden" value="ec47641997d5292180681a247db3c92e"> <input name="captcha[validation][validate]"\n                    autocomplete="off" type="hidden" value=""> <input name="captcha[validation][seccode]" autocomplete="off"\n                    type="hidden" value=""> <input name="captcha[id]" autocomplete="off" type="hidden" value="">\n                  <div id="geetest-area" class="geetest"></div>\n                </div>\n              </div>\n            </div>\n            <input type="hidden" name="security_number" id="security_number">\n            <div class="input-prepend">\n              <input placeholder="设置密码" type="password" name="user[password]" id="user_password">\n              <i class="iconfont ic-password"></i>\n            </div>\n            <input type="submit" name="commit" value="注册" class="sign-up-button" id="sign_up_btn" data-disable-with="注册">\n            <p class="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书<br> <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a>\n              和 <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。</p>\n          </form>\n          <!-- 更多注册方式 -->\n          <div class="more-sign">\n            <h6>社交帐号直接注册</h6>\n            <ul>\n              <li><a id="weixin" class="weixin" target="_blank" href="/users/auth/wechat"><i class="iconfont ic-wechat"></i></a></li>\n              <li><a id="qq" class="qq" target="_blank" href="/users/auth/qq_connect"><i class="iconfont ic-qq_connect"></i></a></li>\n            </ul>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- Javascripts\n        ================================================== -->\n    <!-- Placed at the end of the document so the pages load faster -->\n    <script type="application/json" data-name="page-data">\n      {\n        "user_signed_in": false,\n        "locale": "zh-CN",\n        "os": "windows",\n        "read_mode": "day",\n        "read_font": "font2"\n      }\n\n    </script>\n\n    <script src="//cdn2.jianshu.io/assets/web-base-059fad59acbd6e000110.js" crossorigin="anonymous"></script>\n    <script src="//cdn2.jianshu.io/assets/web-a844dd0ee5f24ad4d2bc.js" crossorigin="anonymous"></script>\n    <script src="//cdn2.jianshu.io/assets/web/pages/common/signup/entry-5d55473c92d21e013cde.js" crossorigin="anonymous"></script>\n    <script>\n      (function () {\n        var bp = document.createElement(\'script\');\n        var curProtocol = window.location.protocol.split(\':\')[0];\n        if (curProtocol === \'https\') {\n          bp.src = \'https://zz.bdstatic.com/linksubmit/push.js\';\n        } else {\n          bp.src = \'http://push.zhanzhang.baidu.com/push.js\';\n        }\n        var s = document.getElementsByTagName("script")[0];\n        s.parentNode.insertBefore(bp, s);\n      })();\n\n    </script>\n\n\n\n    <div style="position: static; width: 0px; height: 0px; border: none; padding: 0px; margin: 0px;">\n      <div id="trans-tooltip">\n        <div id="tip-left-top" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-left-top.png&quot;);"></div>\n        <div id="tip-top" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-top.png&quot;) repeat-x;"></div>\n        <div id="tip-right-top" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-right-top.png&quot;);"></div>\n        <div id="tip-right" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-right.png&quot;) repeat-y;"></div>\n        <div id="tip-right-bottom" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-right-bottom.png&quot;);"></div>\n        <div id="tip-bottom" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-bottom.png&quot;) repeat-x;"></div>\n        <div id="tip-left-bottom" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-left-bottom.png&quot;);"></div>\n        <div id="tip-left" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-left.png&quot;);"></div>\n        <div id="trans-content"></div>\n      </div>\n      <div id="tip-arrow-bottom" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-arrow-bottom.png&quot;);"></div>\n      <div id="tip-arrow-top" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-arrow-top.png&quot;);"></div>\n    </div>\n    <div class="geetest_panel geetest_wind" style="display: none;">\n      <div class="geetest_panel_ghost"></div>\n      <div class="geetest_panel_box">\n        <div class="geetest_other_offline geetest_panel_offline"></div>\n        <div class="geetest_panel_loading">\n          <div class="geetest_panel_loading_icon"></div>\n          <div class="geetest_panel_loading_content">智能验证检测中</div>\n        </div>\n        <div class="geetest_panel_success">\n          <div class="geetest_panel_success_box">\n            <div class="geetest_panel_success_show">\n              <div class="geetest_panel_success_pie"></div>\n              <div class="geetest_panel_success_filter"></div>\n              <div class="geetest_panel_success_mask"></div>\n            </div>\n            <div class="geetest_panel_success_correct">\n              <div class="geetest_panel_success_icon"></div>\n            </div>\n          </div>\n          <div class="geetest_panel_success_title">通过验证</div>\n        </div>\n        <div class="geetest_panel_error">\n          <div class="geetest_panel_error_icon"></div>\n          <div class="geetest_panel_error_title">网络超时</div>\n          <div class="geetest_panel_error_content">请点击此处重试</div>\n          <div class="geetest_panel_error_code"></div>\n        </div>\n        <div class="geetest_panel_footer" style="display: none;">\n          <div class="geetest_panel_footer_logo"></div>\n          <div class="geetest_panel_footer_copyright">由极验提供技术支持</div>\n        </div>\n        <div class="geetest_panel_next"></div>\n      </div>\n    </div>\n  </body>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\register2\register2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Register2Page);
    return Register2Page;
}());

//# sourceMappingURL=register2.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_settings_list_settings_list__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_personal_personal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_registersign_registersign__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_calendar__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tixing_tixing__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shixiang_shixiang__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_muban_muban__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_lianxiren_lianxiren__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_daifa_daifa__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_register2_register2__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_registerpassword_registerpassword__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_config_config__ = __webpack_require__(124);
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
        Object(__WEBPACK_IMPORTED_MODULE_15__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                // 自定义页面
                __WEBPACK_IMPORTED_MODULE_13__pages_daifa_daifa__["a" /* DaifaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lianxiren_lianxiren__["a" /* LianxirenPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_muban_muban__["a" /* MubanPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shixiang_shixiang__["a" /* ShixiangPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tixing_tixing__["a" /* TixingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register2_register2__["a" /* Register2Page */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_personal_personal__["a" /* PersonalPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_registersign_registersign__["a" /* RegistersignPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_registerpassword_registerpassword__["a" /* RegisterpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_settings_list_settings_list__["a" /* SettingsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic3_calendar__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_17_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/daifa/daifa.module#DaifaPageModule', name: 'DaifaPage', segment: 'daifa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lianxiren/lianxiren.module#LianxirenPageModule', name: 'LianxirenPage', segment: 'lianxiren', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/muban/muban.module#MubanPageModule', name: 'MubanPage', segment: 'muban', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/personal.module#PersonalPageModule', name: 'PersonalPage', segment: 'personal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register2/register2.module#Register2PageModule', name: 'Register2Page', segment: 'register2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registerpassword/registerpassword.module#RegisterpasswordPageModule', name: 'RegisterpasswordPage', segment: 'registerpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registersign/registersign.module#RegistersignPageModule', name: 'RegistersignPage', segment: 'registersign', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shixiang/shixiang.module#ShixiangPageModule', name: 'ShixiangPage', segment: 'shixiang', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tixing/tixing.module#TixingPageModule', name: 'TixingPage', segment: 'tixing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings-list/settings-list.module#SettingsListPageModule', name: 'SettingsListPage', segment: 'settings-list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                // 自定义页面
                __WEBPACK_IMPORTED_MODULE_13__pages_daifa_daifa__["a" /* DaifaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lianxiren_lianxiren__["a" /* LianxirenPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_muban_muban__["a" /* MubanPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shixiang_shixiang__["a" /* ShixiangPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tixing_tixing__["a" /* TixingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register2_register2__["a" /* Register2Page */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_registersign_registersign__["a" /* RegistersignPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_personal_personal__["a" /* PersonalPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_registerpassword_registerpassword__["a" /* RegisterpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_settings_list_settings_list__["a" /* SettingsListPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__["a" /* HttpServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_1__pages_personal_personal__["a" /* PersonalPage */],
                { provide: __WEBPACK_IMPORTED_MODULE_15__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_17_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 168,
	"./af.js": 168,
	"./ar": 169,
	"./ar-dz": 170,
	"./ar-dz.js": 170,
	"./ar-kw": 171,
	"./ar-kw.js": 171,
	"./ar-ly": 172,
	"./ar-ly.js": 172,
	"./ar-ma": 173,
	"./ar-ma.js": 173,
	"./ar-sa": 174,
	"./ar-sa.js": 174,
	"./ar-tn": 175,
	"./ar-tn.js": 175,
	"./ar.js": 169,
	"./az": 176,
	"./az.js": 176,
	"./be": 177,
	"./be.js": 177,
	"./bg": 178,
	"./bg.js": 178,
	"./bm": 179,
	"./bm.js": 179,
	"./bn": 180,
	"./bn.js": 180,
	"./bo": 181,
	"./bo.js": 181,
	"./br": 182,
	"./br.js": 182,
	"./bs": 183,
	"./bs.js": 183,
	"./ca": 184,
	"./ca.js": 184,
	"./cs": 185,
	"./cs.js": 185,
	"./cv": 186,
	"./cv.js": 186,
	"./cy": 187,
	"./cy.js": 187,
	"./da": 188,
	"./da.js": 188,
	"./de": 189,
	"./de-at": 190,
	"./de-at.js": 190,
	"./de-ch": 191,
	"./de-ch.js": 191,
	"./de.js": 189,
	"./dv": 192,
	"./dv.js": 192,
	"./el": 193,
	"./el.js": 193,
	"./en-au": 194,
	"./en-au.js": 194,
	"./en-ca": 195,
	"./en-ca.js": 195,
	"./en-gb": 196,
	"./en-gb.js": 196,
	"./en-ie": 197,
	"./en-ie.js": 197,
	"./en-il": 198,
	"./en-il.js": 198,
	"./en-nz": 199,
	"./en-nz.js": 199,
	"./eo": 200,
	"./eo.js": 200,
	"./es": 201,
	"./es-do": 202,
	"./es-do.js": 202,
	"./es-us": 203,
	"./es-us.js": 203,
	"./es.js": 201,
	"./et": 204,
	"./et.js": 204,
	"./eu": 205,
	"./eu.js": 205,
	"./fa": 206,
	"./fa.js": 206,
	"./fi": 207,
	"./fi.js": 207,
	"./fo": 208,
	"./fo.js": 208,
	"./fr": 209,
	"./fr-ca": 210,
	"./fr-ca.js": 210,
	"./fr-ch": 211,
	"./fr-ch.js": 211,
	"./fr.js": 209,
	"./fy": 212,
	"./fy.js": 212,
	"./gd": 213,
	"./gd.js": 213,
	"./gl": 214,
	"./gl.js": 214,
	"./gom-latn": 215,
	"./gom-latn.js": 215,
	"./gu": 216,
	"./gu.js": 216,
	"./he": 217,
	"./he.js": 217,
	"./hi": 218,
	"./hi.js": 218,
	"./hr": 219,
	"./hr.js": 219,
	"./hu": 220,
	"./hu.js": 220,
	"./hy-am": 221,
	"./hy-am.js": 221,
	"./id": 222,
	"./id.js": 222,
	"./is": 223,
	"./is.js": 223,
	"./it": 224,
	"./it.js": 224,
	"./ja": 225,
	"./ja.js": 225,
	"./jv": 226,
	"./jv.js": 226,
	"./ka": 227,
	"./ka.js": 227,
	"./kk": 228,
	"./kk.js": 228,
	"./km": 229,
	"./km.js": 229,
	"./kn": 230,
	"./kn.js": 230,
	"./ko": 231,
	"./ko.js": 231,
	"./ku": 232,
	"./ku.js": 232,
	"./ky": 233,
	"./ky.js": 233,
	"./lb": 234,
	"./lb.js": 234,
	"./lo": 235,
	"./lo.js": 235,
	"./lt": 236,
	"./lt.js": 236,
	"./lv": 237,
	"./lv.js": 237,
	"./me": 238,
	"./me.js": 238,
	"./mi": 239,
	"./mi.js": 239,
	"./mk": 240,
	"./mk.js": 240,
	"./ml": 241,
	"./ml.js": 241,
	"./mn": 242,
	"./mn.js": 242,
	"./mr": 243,
	"./mr.js": 243,
	"./ms": 244,
	"./ms-my": 245,
	"./ms-my.js": 245,
	"./ms.js": 244,
	"./mt": 246,
	"./mt.js": 246,
	"./my": 247,
	"./my.js": 247,
	"./nb": 248,
	"./nb.js": 248,
	"./ne": 249,
	"./ne.js": 249,
	"./nl": 250,
	"./nl-be": 251,
	"./nl-be.js": 251,
	"./nl.js": 250,
	"./nn": 252,
	"./nn.js": 252,
	"./pa-in": 253,
	"./pa-in.js": 253,
	"./pl": 254,
	"./pl.js": 254,
	"./pt": 255,
	"./pt-br": 256,
	"./pt-br.js": 256,
	"./pt.js": 255,
	"./ro": 257,
	"./ro.js": 257,
	"./ru": 258,
	"./ru.js": 258,
	"./sd": 259,
	"./sd.js": 259,
	"./se": 260,
	"./se.js": 260,
	"./si": 261,
	"./si.js": 261,
	"./sk": 262,
	"./sk.js": 262,
	"./sl": 263,
	"./sl.js": 263,
	"./sq": 264,
	"./sq.js": 264,
	"./sr": 265,
	"./sr-cyrl": 266,
	"./sr-cyrl.js": 266,
	"./sr.js": 265,
	"./ss": 267,
	"./ss.js": 267,
	"./sv": 268,
	"./sv.js": 268,
	"./sw": 269,
	"./sw.js": 269,
	"./ta": 270,
	"./ta.js": 270,
	"./te": 271,
	"./te.js": 271,
	"./tet": 272,
	"./tet.js": 272,
	"./tg": 273,
	"./tg.js": 273,
	"./th": 274,
	"./th.js": 274,
	"./tl-ph": 275,
	"./tl-ph.js": 275,
	"./tlh": 276,
	"./tlh.js": 276,
	"./tr": 277,
	"./tr.js": 277,
	"./tzl": 278,
	"./tzl.js": 278,
	"./tzm": 279,
	"./tzm-latn": 280,
	"./tzm-latn.js": 280,
	"./tzm.js": 279,
	"./ug-cn": 281,
	"./ug-cn.js": 281,
	"./uk": 282,
	"./uk.js": 282,
	"./ur": 283,
	"./ur.js": 283,
	"./uz": 284,
	"./uz-latn": 285,
	"./uz-latn.js": 285,
	"./uz.js": 284,
	"./vi": 286,
	"./vi.js": 286,
	"./x-pseudo": 287,
	"./x-pseudo.js": 287,
	"./yo": 288,
	"./yo.js": 288,
	"./zh-cn": 289,
	"./zh-cn.js": 289,
	"./zh-hk": 290,
	"./zh-hk.js": 290,
	"./zh-tw": 291,
	"./zh-tw.js": 291
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 388;

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(331);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\app\goodApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\app\goodApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the SettingsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsListPage = /** @class */ (function () {
    function SettingsListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsListPage');
    };
    SettingsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings-list',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\settings-list\settings-list.html"*/'<!--\n  Generated template for the SettingsListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>待完善页面</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  正在开发中。。。\n</ion-content>\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\settings-list\settings-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingsListPage);
    return SettingsListPage;
}());

//# sourceMappingURL=settings-list.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registersign_registersign__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(32);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, httpservices, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpservices = httpservices;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.tel = '';
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.goRegistersignPage = function () {
        var _this = this;
        // this.navCtrl.push(RegistersignPage)
        console.log(this.tel);
        if (/^\d{11}$/.test(this.tel)) {
            var api = 'api/sendCode';
            this.httpservices.doPost(api, { "tel": this.tel }, function (result) {
                console.log(result); /* 测试 */
                console.log(result.code) /* 打印出验证码 */;
                _this.presentToast(result);
                _this.storage.set('reg_tel', _this.tel); /* 保存电话号码 */
                if (result.success) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registersign_registersign__["a" /* RegistersignPage */]);
                }
                else {
                    alert("发送失败 " + result.message);
                }
            });
        }
        else {
            alert("请输入正确的电话号码!");
        }
    };
    /* 弹出验证码 */
    RegisterPage.prototype.presentToast = function (result) {
        var toast = this.toastCtrl.create({
            message: result.code,
            duration: 3000
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\app\goodApp\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<div class="register-page">\n  <input type="text" placeholder="请输入手机号" [(ngModel)]="tel" maxlength="11">\n</div>\n<button ion-button class="next-btn" (tap)="goRegistersignPage()" >下一步</button>\n\n\n<!-- <button ion-button [navPush]="CeshiPage">测试注册模板页面</button> -->\n\n<!-- <ion-item>\n  <ion-label >前面</ion-label>\n  <ion-input type="text"  placeholder="测试一下咯" clearInput></ion-input>\n</ion-item> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\app\goodApp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[337]);
//# sourceMappingURL=main.js.map