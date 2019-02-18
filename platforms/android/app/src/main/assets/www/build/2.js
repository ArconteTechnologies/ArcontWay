webpackJsonp([2],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripdescPageModule", function() { return TripdescPageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companydescrip", function() { return companydescrip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tripdesc__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TripdescPageModule = /** @class */ (function () {
    function TripdescPageModule() {
    }
    TripdescPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tripdesc__["a" /* TripdescPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tripdesc__["a" /* TripdescPage */]),
            ],
        })
    ], TripdescPageModule);
    return TripdescPageModule;
}());

var companydescrip = /** @class */ (function () {
    function companydescrip(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    companydescrip.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    return companydescrip;
}());

//# sourceMappingURL=tripdesc.module.js.map

/***/ })

});
//# sourceMappingURL=2.js.map