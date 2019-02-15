webpackJsonp([0],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanydescripPageModule", function() { return CompanydescripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__companydescrip__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompanydescripPageModule = /** @class */ (function () {
    function CompanydescripPageModule() {
    }
    CompanydescripPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__companydescrip__["a" /* CompanydescripPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__companydescrip__["a" /* CompanydescripPage */]),
            ],
        })
    ], CompanydescripPageModule);
    return CompanydescripPageModule;
}());

//# sourceMappingURL=companydescrip.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanydescripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the CompanydescripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompanydescripPage = /** @class */ (function () {
    function CompanydescripPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    CompanydescripPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanydescripPage');
    };
    CompanydescripPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    CompanydescripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-companydescrip',template:/*ion-inline-start:"/home/estebanmendiola/Documents/Personal/ArcontWay/src/pages/companydescrip/companydescrip.html"*/'<!--\n  Generated template for the CompanydescripPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Información de la empresa</ion-title>\n      <ion-buttons end>\n        <button ion-button tappable (click)="closeModal()">Cerrar</button>\n      </ion-buttons>\n    </ion-navbar>\n\n  </ion-header>\n\n<ion-content padding #content class="animated fadeIn common-bg">\n\n    <h2 align="center">\n    UBER\n    </h2>\n    <br>\n      <ion-avatar item-start>\n        <img src="assets/imgs/uber.jpg">\n      </ion-avatar>\n\n\n    <ion-grid>\n      <ion-row>\n        <ion-item>\n          <ion-icon name="car" item-start></ion-icon>\n          <h2>Nombre:</h2>\n          <p>UBER</p>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n          <ion-icon name="pin" item-start></ion-icon>\n          <h2>Dirección: </h2>\n          <p>Enrique cegoviano #130</p>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n          <ion-icon name="car" item-start></ion-icon>\n          <h2>Califica tu viaje: </h2>\n          <form align="left">\n            <p class="clasificacion">\n\n              <label >★</label>\n              <label >★</label>\n              <label style="color:aqua">★</label>\n              <label style="color:aqua">★</label>\n              <label style="color:aqua">★</label>\n\n            </p>\n          </form>\n        </ion-item>\n      </ion-row>\n  </ion-grid>\n\n  <br>\n'/*ion-inline-end:"/home/estebanmendiola/Documents/Personal/ArcontWay/src/pages/companydescrip/companydescrip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], CompanydescripPage);
    return CompanydescripPage;
}());

//# sourceMappingURL=companydescrip.js.map

/***/ })

});
//# sourceMappingURL=0.js.map