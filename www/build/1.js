webpackJsonp([1],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardescriptionModalPageModule", function() { return CardescriptionModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cardescription_modal__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardescriptionModalPageModule = /** @class */ (function () {
    function CardescriptionModalPageModule() {
    }
    CardescriptionModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cardescription_modal__["a" /* CardescriptionModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cardescription_modal__["a" /* CardescriptionModalPage */]),
            ],
        })
    ], CardescriptionModalPageModule);
    return CardescriptionModalPageModule;
}());

//# sourceMappingURL=cardescription-modal.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardescriptionModalPage; });
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
 * Generated class for the CardescriptionModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardescriptionModalPage = /** @class */ (function () {
    function CardescriptionModalPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    CardescriptionModalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    CardescriptionModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardescriptionModalPage');
    };
    CardescriptionModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cardescription-modal',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\cardescription-modal\cardescription-modal.html"*/'<!--\n  Generated template for the CardescriptionModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Información del Auto</ion-title>\n    <ion-buttons end>\n      <button ion-button tappable (click)="closeModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding #content class="animated fadeIn common-bg">\n\n  <h2 align="center">\n  Automovíl:\n  </h2>\n  <br>\n    <ion-avatar item-start>\n      <img src="assets/imgs/jetta.jpg">\n    </ion-avatar>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-item>\n        <ion-icon name="car" item-start></ion-icon>\n        <h2>Modelo:</h2>\n        <p>Jetta 2015</p>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-icon name="card" item-start></ion-icon>\n        <h2>Placas: </h2>\n        <p>FRT5902</p>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-icon name="car" item-start></ion-icon>\n        <h2>Color: </h2>\n        <p>Blanco</p>\n      </ion-item>\n    </ion-row>\n</ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\cardescription-modal\cardescription-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], CardescriptionModalPage);
    return CardescriptionModalPage;
}());

//# sourceMappingURL=cardescription-modal.js.map

/***/ })

});
//# sourceMappingURL=1.js.map