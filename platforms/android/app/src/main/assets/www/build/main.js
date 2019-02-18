webpackJsonp([20],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpaymentPage; });
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
 * Generated class for the AddpaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddpaymentPage = /** @class */ (function () {
    function AddpaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddpaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddpaymentPage');
    };
    AddpaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addpayment',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\addpayment\addpayment.html"*/'<!--\n  Generated template for the AddpaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agregar Método de Pago</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>Número de Tarjeta</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>MM/AA</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>CCV</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>País</ion-label>\n          <ion-select [(ngModel)]="gaming">\n            <ion-option value="mexico">México</ion-option>\n            <ion-option value="canada">Canada</ion-option>\n            <ion-option value="eeuu">EEUU</ion-option>\n            <ion-option value="uk">UK</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>Código Postal</ion-label>\n          <ion-input type="number"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button block outline icon-start>\n          <ion-icon name="checkmark-circle-outline"></ion-icon>\n          Agregar Método\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\addpayment\addpayment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AddpaymentPage);
    return AddpaymentPage;
}());

//# sourceMappingURL=addpayment.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooktravelPage; });
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
 * Generated class for the BooktravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BooktravelPage = /** @class */ (function () {
    function BooktravelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BooktravelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BooktravelPage');
    };
    BooktravelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booktravel',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\booktravel\booktravel.html"*/'<!--\n  Generated template for the BooktravelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reservación de viaje</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-item>\n      <ion-fab right top>\n        <button ion-fab>\n          <ion-icon name="car"></ion-icon>\n        </button>\n      </ion-fab>\n      <h2>Viaje Activo para el Día</h2>\n      <p>Viernes 02 de Noviembre</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="time" item-start large ></ion-icon>\n      <h2>Horario</h2>\n      <p>Salida > 5:00 a.m.</p>\n      <p>Llegada > 9:00 a.m.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="contacts" item-start large ></ion-icon>\n      <ion-label><h2>N° de Asientos</h2></ion-label>\n      <ion-select [(ngModel)]="asientos">\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n        <ion-option value="4">4</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="pricetags" item-start large ></ion-icon>\n      <ion-label><h2>Forma de Pago</h2></ion-label>\n      <ion-select [(ngModel)]="pago">\n        <ion-option value="efectivo">Efectivo</ion-option>\n        <ion-option value="tarjeta">Tarjeta •••• •••• •••• 1243</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="pin" item-start large ></ion-icon>\n      <ion-label><h2>Punto Intermedio</h2></ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-usd" item-start large ></ion-icon>\n      <h3>Costo por Persona</h3>\n      <p>250.00 MXN</p>\n      <h1><strong>Costo Total</strong></h1>\n      <p><strong>500.00 MXN</strong></p>\n    </ion-item>\n  \n  </ion-card>\n  <button ion-button outline tappable block>Reservar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\booktravel\booktravel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BooktravelPage);
    return BooktravelPage;
}());

//# sourceMappingURL=booktravel.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataRegistryByPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_traveler_traveler__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(47);
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
 * Generated class for the DataRegistryByPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DataRegistryByPhonePage = /** @class */ (function () {
    function DataRegistryByPhonePage(navCtrl, navParams, apiUser, apiTraveler, loadingCtrl, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiUser = apiUser;
        this.apiTraveler = apiTraveler;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        //creacion del FORM
        this.registryForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
        //Creacion de Objeto User 
        this.user = {
            name: "",
            lastname: "",
            second_lastname: null,
            lada: null,
            number_phone: null,
            email: null,
            password: null,
            points: "0",
            total_trips: "0",
            tipo_registro: "PHONE"
        }; //
    }
    //Verifica si ya esta registrado el Usuario
    DataRegistryByPhonePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //Crear componente  Loading
        var loader = this.loadingCtrl.create({
            content: "Por favor espere..."
        });
        //
        //Creacion componente toast
        var toast = this.toastCtrl.create({
            duration: 4000
        });
        //
        loader.present(); //muestra el componente loading
        this.storage.get('token').then(function (token) {
            _this.apiUser.verifyTraveler(token)
                .subscribe(function (data) {
                if (data["success"] == true) {
                    _this.storage.set("id_user", data["id"]);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                }
            }, function (error) {
                loader.dismiss();
                toast.setMessage(error.message);
                toast.present();
            }, function () {
                loader.dismiss();
            });
        });
    };
    //Metodo para registrar nuevo viajero
    DataRegistryByPhonePage.prototype.sendRegister = function (user) {
        var _this = this;
        //Crear componente  Loading
        var loader = this.loadingCtrl.create({
            content: "Por favor espere..."
        });
        //
        //Creacion componente toast
        var toast = this.toastCtrl.create({
            duration: 4000
        });
        //
        loader.present(); //muestra el componente loading
        //Ejecuta la peticion http que se encuentra en el provider api-rest-traveler
        this.storage.get('token').then(function (token) {
            _this.apiTraveler.sendRegister(user, token)
                .subscribe(function (data) {
                toast.setMessage(data["message"]);
                _this.storage.set("id_user", data["id"]);
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            }, function (error) {
                loader.dismiss();
                toast.setMessage(error.message);
                toast.present();
            }, function () {
                loader.dismiss();
            });
        });
    }; //fin del metodo
    DataRegistryByPhonePage.prototype.ionViewWillLeave = function () {
        var _this = this;
        this.storage.get('id_user').then(function (id) {
            _this.apiTraveler.getData(id)
                .subscribe(function (data) {
                console.log(data["id_traveler"]);
                console.log(data["nombre"]);
                console.log(data["telefono"]);
                console.log(data);
                _this.storage.set("id_traveler", data["id_traveler"]);
                _this.storage.set("nombre", data["nombre"].toString());
                _this.storage.set("telefono", data["telefono"]);
            }, function (error) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            });
        });
    };
    DataRegistryByPhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-data-registry-by-phone',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\data-registry-by-phone\data-registry-by-phone.html"*/'<!--\n  Generated template for the DataRegistryByPhonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>dataRegistryByPhone</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form class="list-form"  [formGroup]="registryForm" (ngSubmit)="sendRegister(user)" novalidate>\n       \n\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="person" item-start class="text-primary"></ion-icon>\n            Nombre\n          </ion-label>\n          <ion-input type="text" formControlName="name" [(ngModel)]="user.name"  ></ion-input>\n        </ion-item>\n        <ion-item *ngIf="registryForm.get(\'name\').errors && registryForm.get(\'name\').dirty">\n          <p *ngIf="registryForm.get(\'name\').hasError(\'required\')" class="error">\n            El nombre es requerido.\n          </p>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="person" item-start class="text-primary"></ion-icon>\n            Apellido\n          </ion-label>\n          <ion-input type="text" formControlName="lastname" [(ngModel)]="user.lastname"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="registryForm.get(\'lastname\').errors && registryForm.get(\'lastname\').dirty">\n          <p *ngIf="registryForm.get(\'lastname\').hasError(\'required\')" class="error">\n            El apellido es requerido.\n          </p>\n        </ion-item>\n  \n        <p>El metodo por defecto de pago sera en efectivo, si desea agregar un nuevo\n          metodo de pago por favor dirigace a: ...................... \n        </p>\n        <div margin-top>\n        \n        \n        <button ion-button block  type="submit" [disabled]="!registryForm.valid" color="primary" tappable>\n          REGISTRAR\n        </button>\n      </div>\n      </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\data-registry-by-phone\data-registry-by-phone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_traveler_traveler__["a" /* TravelerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], DataRegistryByPhonePage);
    return DataRegistryByPhonePage;
}());

//# sourceMappingURL=data-registry-by-phone.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchtripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tripdesc_tripdesc__ = __webpack_require__(53);
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
 * Generated class for the SearchtripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchtripPage = /** @class */ (function () {
    function SearchtripPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchtripPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchtripPage');
    };
    SearchtripPage.prototype.tripDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tripdesc_tripdesc__["a" /* TripdescPage */]);
    };
    SearchtripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-searchtrip',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\searchtrip\searchtrip.html"*/'<!--\n  Generated template for the SearchtripPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      Búsqueda Avanzada\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Filtrar Por</ion-label>\n      <ion-select [(ngModel)]="toppings"  cancelText="Cancelar" okText="Aplicar Filtro">\n        <ion-option value="ninguno" selected="true">Ninguno</ion-option>\n        <ion-option value="mas_populares">Más populares</ion-option>\n        <ion-option value="recientes">Recientes</ion-option>\n        <ion-option value="toda_la_semana">Toda la semana</ion-option>\n        <ion-option value="proxima_semana">Próxima semana</ion-option>\n        <ion-option value="todo_el_mes">Todo el mes</ion-option>\n        <ion-option value="ordenar_por_conductor">Ordenar por conductor</ion-option>\n        <ion-option value="ordenar_por_empresa">Ordenar por empresa</ion-option>\n        <ion-option value="ordenar_por_fecha">Ordenar por fecha</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-card>\n    <ion-item>\n      <ion-fab right top>\n        <button ion-fab>\n          <ion-icon name="time"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-avatar item-start>\n        <img src="assets/imgs/img.jpg">\n      </ion-avatar>\n      <h2>Conductor</h2>\n      <p>Jonny Loredo</p>\n    </ion-item>\n\n    <img src="assets/imgs/mapa.jpg">\n    \n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h3>Origen</h3>\n      <p>Landa de Matamóros, Qro.</p>\n      <h3>Destino</h3>\n      <p>Santiago de Querétaro, Qro.</p>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="time" item-start large></ion-icon>\n      <h2>Salida</h2>\n      <p>5:00 a.m. Jardin Principal</p>\n    </ion-item>  \n    \n    <button ion-item>\n      <ion-icon name="arrow-forward" item-end (click) = "tripDetail()"></ion-icon>\n      Más Acerca del Viaje\n    </button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\searchtrip\searchtrip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SearchtripPage);
    return SearchtripPage;
}());

//# sourceMappingURL=searchtrip.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogindefaultuserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registry_registry__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
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
 * Generated class for the LogindefaultuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogindefaultuserPage = /** @class */ (function () {
    function LogindefaultuserPage(navCtrl, navParams, toastCtrl, forgotCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.forgotCtrl = forgotCtrl;
    }
    ///--------------Codigo login con usuario----------------------------------////////////
    // go to register page
    LogindefaultuserPage.prototype.launchRegistryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registry_registry__["a" /* RegistryPage */]);
    };
    // login and go to home page
    LogindefaultuserPage.prototype.launchPrincipalPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LogindefaultuserPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    LogindefaultuserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logindefaultuser',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\logindefaultuser\logindefaultuser.html"*/'<!--\n  Generated template for the LogindefaultuserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>logindefaultuser</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="login-content">\n          <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n        <h2 ion-text class="text-primary">\n          <strong>ArcontWay</strong>\n        </h2>\n        <h3 ion-text class="text-primary">Confia en nosotros!</h3>\n      </div>\n    </div>\n  \n\n   <!-- Login form -->\n    <form class="list-form">\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n            Correo\n          </ion-label>\n          <ion-input type="email" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>\n            <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n            Contraseña\n          </ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n    </form>\n\n      <p text-right ion-text class="text-primary" tappable (click)="forgotPass()"><strong>¿Olvidaste la Contraseña?</strong></p>\n\n      <div>\n        <button ion-button icon-start block color="default" tappable (click)="launchPrincipalPage()">\n          <ion-icon name="log-in"></ion-icon>\n          Iniciar Sesión\n        </button>\n      </div>\n\n\n      <!-- Other links -->\n      <div text-center margin-top>\n        <button ion-button (click)="launchRegistryPage()" color="default" >Registrarme</button>\n      </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\logindefaultuser\logindefaultuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LogindefaultuserPage);
    return LogindefaultuserPage;
}());

//# sourceMappingURL=logindefaultuser.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_traveler_traveler__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
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
 * Generated class for the RegistryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistryPage = /** @class */ (function () {
    function RegistryPage(navCtrl, navParams, apiTaveler, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiTaveler = apiTaveler;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        //creacion del FORM
        this.registryForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(8)]),
            lada: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            number_phone: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(10)])
        });
        //Creacion de Objeto traveler 
        this.traveler = {
            id_user: "null",
            name: "",
            lastname: "",
            second_lastname: "null",
            lada: "",
            number_phone: "",
            email: "",
            password: "",
            card: "",
            type_card: "",
            points: "0",
            total_trips: "0"
        }; //
    }
    RegistryPage.prototype.ionViewDidLoad = function () {
    };
    RegistryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registry',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\registry\registry.html"*/'\n<!-- -->\n<ion-content class="register">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>Registrar nuevo usuario</strong>\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form"  [formGroup]="registryForm" (ngSubmit)="sendRegister(traveler)" novalidate>\n       \n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Nombre\n        </ion-label>\n        <ion-input type="text" formControlName="name" [(ngModel)]="traveler.name"  ></ion-input>\n      </ion-item>\n      <ion-item *ngIf="registryForm.get(\'name\').errors && registryForm.get(\'name\').dirty">\n        <p *ngIf="registryForm.get(\'name\').hasError(\'required\')" class="error">\n          El nombre es requerido.\n        </p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Apellido\n        </ion-label>\n        <ion-input type="text" formControlName="lastname" [(ngModel)]="traveler.lastname"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="registryForm.get(\'lastname\').errors && registryForm.get(\'lastname\').dirty">\n        <p *ngIf="registryForm.get(\'lastname\').hasError(\'required\')" class="error">\n          El apellido es requerido.\n        </p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Correo\n        </ion-label>\n        <ion-input type="email" formControlName="email" [(ngModel)]="traveler.email" ></ion-input>\n      </ion-item>\n      <ion-item *ngIf="registryForm.get(\'email\').errors && registryForm.get(\'email\').dirty">\n        <p *ngIf="registryForm.get(\'email\').hasError(\'required\')" class="error">\n          El correo es requerido.\n        </p>\n        <p *ngIf="registryForm.get(\'email\').hasError(\'email\')" class="error">\n          El correo electronico indicado no es valido.\n        </p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Contraseña\n        </ion-label>\n        <ion-input type="password" formControlName="password" [(ngModel)]="traveler.password" ></ion-input>\n      </ion-item>\n      <ion-item *ngIf="registryForm.get(\'password\').errors && registryForm.get(\'password\').dirty">\n        <p *ngIf="registryForm.get(\'password\').hasError(\'required\')" class="error">\n          El password es requerido.\n        </p>\n        <p *ngIf="!registryForm.get(\'password\').hasError(\'minLength\')" class="error">\n          El password debe contener minimo 8 caracteres.\n        </p>\n      </ion-item>\n\n      <ion-list >\n        <ion-item>\n          <ion-label>\n            <ion-icon name="ios-call" item-start class="text-primary"></ion-icon>\n            Pais\n          </ion-label>\n          <ion-select formControlName="lada" [(ngModel)]="traveler.lada">\n            <ion-option value="+52">México</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf="registryForm.get(\'lada\').errors && registryForm.get(\'lada\').dirty">\n          <p *ngIf="registryForm.get(\'lada\').hasError(\'required\')" class="error">\n            La Lada es requerido.\n          </p>\n        </ion-item>\n      </ion-list>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="ios-call" item-start class="text-primary"></ion-icon>\n          Teléfono\n        </ion-label>\n        <ion-input type="number" formControlName="number_phone" [(ngModel)]="traveler.number_phone"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="registryForm.get(\'number_phone\').errors && registryForm.get(\'number_phone\').dirty">\n        <p *ngIf="registryForm.get(\'number_phone\').hasError(\'required\')" class="error">\n          El celular es requerido.\n        </p>\n        <p *ngIf="!registryForm.get(\'number_phone\').hasError(\'maxLength\')" class="error">\n          El celular debe contener 10 digitos numericos.\n        </p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="ios-card" item-start class="text-primary"></ion-icon>\n          Tarjeta (opcional)\n        </ion-label>\n        <ion-input type="card" [(ngModel)]="traveler.card"  [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n      <div margin-top>\n      \n      \n      <button ion-button block  type="submit" [disabled]="!registryForm.valid" color="primary" tappable>\n        REGISTRAR\n      </button>\n    </div>\n    </form>\n    \n      \n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text class="text-primary" tappable (click)="launchHomePage()">Ya tengo una cuenta</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\registry\registry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_traveler_traveler__["a" /* TravelerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], RegistryPage);
    return RegistryPage;
}());

//# sourceMappingURL=registry.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditmailPage; });
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
 * Generated class for the EditmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditmailPage = /** @class */ (function () {
    function EditmailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditmailPage');
    };
    EditmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editmail',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\editmail\editmail.html"*/'<!--\n  Generated template for the EditmailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n  \n<ion-content padding>\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating >Ingresa tu Email Actual</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>Nuevo Email</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button block outline icon-start>\n          <ion-icon name="checkmark-circle-outline"></ion-icon>\n          VERIFICAR Y GUARDAR\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\editmail\editmail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EditmailPage);
    return EditmailPage;
}());

//# sourceMappingURL=editmail.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditnamePage; });
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
 * Generated class for the EditnamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditnamePage = /** @class */ (function () {
    function EditnamePage(navParams, navCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
    }
    EditnamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditnamePage');
    };
    EditnamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editname',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\editname\editname.html"*/'<!--\n  Generated template for the EditnamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating >Nombre de Usuario Actual</ion-label>\n          <ion-input type="text" value="Eduardo Paredes" readonly></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>Nuevo Nombre de Usuario</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button block outline icon-start>\n          <ion-icon name="checkmark-circle-outline"></ion-icon>\n          GUARDAR\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\editname\editname.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], EditnamePage);
    return EditnamePage;
}());

//# sourceMappingURL=editname.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditpasswordPage; });
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
 * Generated class for the EditpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditpasswordPage = /** @class */ (function () {
    function EditpasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditpasswordPage');
    };
    EditpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editpassword',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\editpassword\editpassword.html"*/'<!--\n  Generated template for the EditpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating >Ingresa tu Contraseña Actual</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>Nuevo Contraseña</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button block outline icon-start>\n          <ion-icon name="checkmark-circle-outline"></ion-icon>\n          VERIFICAR Y GUARDAR\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\editpassword\editpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EditpasswordPage);
    return EditpasswordPage;
}());

//# sourceMappingURL=editpassword.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditphonePage; });
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
 * Generated class for the EditphonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditphonePage = /** @class */ (function () {
    function EditphonePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditphonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditphonePage');
    };
    EditphonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editphone',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\editphone\editphone.html"*/'<!--\n  Generated template for the EditphonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating >Ingresa tu Número Actual</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>Nuevo Número</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button block outline icon-start>\n          <ion-icon name="checkmark-circle-outline"></ion-icon>\n          VERIFICAR Y GUARDAR\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\editphone\editphone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EditphonePage);
    return EditphonePage;
}());

//# sourceMappingURL=editphone.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
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
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ayuda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addpayment_addpayment__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            'Agregar Método de Pago'
        ];
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.addPayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addpayment_addpayment__["a" /* AddpaymentPage */]);
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Formas de pago</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n      <ion-list-header>\n            Métodos de Pago\n      </ion-list-header>\n      <ion-item>\n        <ion-icon name="card" item-start></ion-icon>\n          Tarjeta de Crédito\n        <p>•••• •••• •••• 1988</p>\n        <button ion-button clear item-end>Eliminar</button>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="cash" item-start></ion-icon>\n          Pago en Efectivo\n        <p>MXN</p>\n        <button ion-button clear item-end></button>\n      </ion-item>\n\n      <button ion-item *ngFor="let item of items" (click)="addPayment()">\n        {{ item }}\n        <ion-icon name="arrow-forward" item-end></ion-icon>\n      </button>\n        \n    </ion-list>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tripconcluded_tripconcluded__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reservedtrip_reservedtrip__ = __webpack_require__(120);
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
 * Generated class for the MytripsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MytripsPage = /** @class */ (function () {
    function MytripsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trips = "concluidos";
    }
    MytripsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MytripsPage');
    };
    MytripsPage.prototype.tripCon = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tripconcluded_tripconcluded__["a" /* TripconcludedPage */]);
    };
    MytripsPage.prototype.resTrip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reservedtrip_reservedtrip__["a" /* ReservedtripPage */]);
    };
    MytripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mytrips',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\mytrips\mytrips.html"*/'<!--\n  Generated template for the MytripsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Mis Viajes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div>\n    <ion-segment [(ngModel)]="trips">\n      <ion-segment-button value="concluidos">\n        Concluidos\n      </ion-segment-button>\n      <ion-segment-button value="reservados">\n        Reservados\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <div [ngSwitch]="trips">\n    <ion-list *ngSwitchCase="\'concluidos\'">\n      <ion-card>\n        <ion-item>\n          <ion-fab right top>\n            <button ion-fab>\n              <ion-icon name="car"></ion-icon>\n            </button>\n          </ion-fab>\n          <ion-avatar item-start>\n            <img src="assets/imgs/img.jpg">\n          </ion-avatar>\n          <h2>Conductor</h2>\n          <p>Jonny Loredo</p>\n        </ion-item>\n    \n        <img src="assets/imgs/mapa.jpg">\n        \n        <ion-item>\n          <ion-icon name="logo-usd" item-start large ></ion-icon>\n          <h1>250.00 MXN</h1>\n        </ion-item> \n        \n        <button ion-item (click) = "tripCon()">\n          <ion-icon name="arrow-forward" item-end></ion-icon>\n          Más Acerca del Viaje\n        </button>\n      </ion-card>\n    \n      <ion-card>\n        <ion-item>\n          <ion-fab right top>\n            <button ion-fab>\n              <ion-icon name="car"></ion-icon>\n            </button>\n          </ion-fab>\n          <ion-avatar item-start>\n            <img src="assets/imgs/img.jpg">\n          </ion-avatar>\n          <h2>Conductor</h2>\n          <p>Esteban Mendiola</p>\n        </ion-item>\n    \n        <img src="assets/imgs/mapa.jpg">\n        \n        <ion-item>\n          <ion-icon name="logo-usd" item-start large ></ion-icon>\n          <h1>200.00 MXN</h1>\n        </ion-item> \n        \n        <button ion-item (click) = "tripCon()">\n          <ion-icon name="arrow-forward" item-end></ion-icon>\n          Más Acerca del Viaje\n        </button>\n      </ion-card>\n    </ion-list>\n  \n    <ion-list *ngSwitchCase="\'reservados\'">\n      <ion-card>\n        <ion-item>\n          <ion-fab right top>\n            <button ion-fab>\n              <ion-icon name="time"></ion-icon>\n            </button>\n          </ion-fab>\n          <ion-avatar item-start>\n            <img src="assets/imgs/img.jpg">\n          </ion-avatar>\n          <h2>Conductor</h2>\n          <p>Jonny Loredo</p>\n        </ion-item>\n    \n        <img src="assets/imgs/mapa.jpg">\n        \n        <ion-item>\n          <ion-icon name="pin" item-start large></ion-icon>\n          <h3>Origen</h3>\n          <p>Landa de Matamóros, Qro.</p>\n          <h3>Destino</h3>\n          <p>Santiago de Querétaro, Qro.</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="time" item-start large></ion-icon>\n          <h2>Salida</h2>\n          <p>5:00 a.m. Jardin Principal</p>\n        </ion-item>  \n        \n        <button ion-item (click) = "resTrip()">\n          <ion-icon name="arrow-forward" item-end></ion-icon>\n          Más Acerca del Viaje\n        </button>\n      </ion-card>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\mytrips\mytrips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MytripsPage);
    return MytripsPage;
}());

//# sourceMappingURL=mytrips.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripconcludedPage; });
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
 * Generated class for the TripconcludedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TripconcludedPage = /** @class */ (function () {
    function TripconcludedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TripconcludedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TripconcludedPage');
    };
    TripconcludedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tripconcluded',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\tripconcluded\tripconcluded.html"*/'<!--\n  Generated template for the TripconcludedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle del Viaje</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-item>\n      <ion-fab right top>\n        <button ion-fab>\n          <ion-icon name="car"></ion-icon>\n        </button>\n      </ion-fab>\n      <h2>Viajaste del día</h2>\n      <p>Viernes 02 de Noviembre</p>\n    </ion-item>\n\n    <img src="assets/imgs/mapa.jpg">\n  \n    <ion-item>\n      <ion-icon name="radio-button-on" item-start large></ion-icon>\n      <h2>Origen</h2>\n      <p style="white-space: normal;">Constitucion S/N, San Esteban, 76360 Landa de Matamóros, Qro., México.</p>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon name="radio-button-on" item-start large ></ion-icon>\n      <h2>Destino</h2>\n      <p style="white-space: normal;">Corregidora, Centro, 76040 Santiago de Querétaro, Qro., México.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="time" item-start large ></ion-icon>\n      <h2>Horario</h2>\n      <p>Salida > 5:00 a.m.</p>\n      <p>Llegada > 9:00 a.m.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="contacts" item-start large ></ion-icon>\n      <h2>Asientos Reservados</h2>\n      <p>2</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-usd" item-start large ></ion-icon>\n      <h2>Costo por Persona</h2>\n      <p>250.00 MXN</p>\n      <h2>Costo Total</h2>\n      <p>500.00 MXN</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="pricetags" item-start large ></ion-icon>\n      <h2>Forma de Pago</h2>\n      <p>Tarjeta •••• •••• •••• 1243</p>\n    </ion-item>\n  \n  </ion-card>\n  \n  <ion-card>\n\n    <ion-item>\n      <ion-fab right top>\n        <button ion-fab>\n          <ion-icon name="ribbon"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-avatar item-start>\n        <img src="assets/imgs/empresa.png">\n      </ion-avatar>\n      <h2>Empresa</h2>\n      <p>Arca Tour</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/img.jpg">\n      </ion-avatar>\n      <h2>Conductor</h2>\n      <p>Jonny Loredo</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="car" item-start large ></ion-icon>\n      <h2>Automóvil</h2>\n      <p>Volkswagen Jetta</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="people" item-start large ></ion-icon>\n      <h2>Capacidad</h2>\n      <p>4 Personas</p>\n    </ion-item>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\tripconcluded\tripconcluded.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TripconcludedPage);
    return TripconcludedPage;
}());

//# sourceMappingURL=tripconcluded.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservedtripPage; });
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
 * Generated class for the ReservedtripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservedtripPage = /** @class */ (function () {
    function ReservedtripPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReservedtripPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservedtripPage');
    };
    ReservedtripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservedtrip',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\reservedtrip\reservedtrip.html"*/'<!--\n  Generated template for the ReservedtripPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle de Reservación</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-item>\n      <ion-fab right top>\n        <button ion-fab>\n          <ion-icon name="pin"></ion-icon>\n        </button>\n      </ion-fab>\n      <h2>Salida el día</h2>\n      <p>Jueves 29 de Noviembre</p>\n    </ion-item>\n\n    <img src="assets/imgs/mapa.jpg">\n  \n    <ion-item>\n      <ion-icon name="radio-button-on" item-start large></ion-icon>\n      <h2>Origen</h2>\n      <p style="white-space: normal;">Constitucion S/N, San Esteban, 76360 Landa de Matamóros, Qro., México.</p>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon name="radio-button-on" item-start large ></ion-icon>\n      <h2>Destino</h2>\n      <p style="white-space: normal;">Corregidora, Centro, 76040 Santiago de Querétaro, Qro., México.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="time" item-start large ></ion-icon>\n      <h2>Horario</h2>\n      <p>Salida > 5:00 a.m.</p>\n      <p>Llegada > 9:00 a.m.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="contacts" item-start large ></ion-icon>\n      <h2>Asientos Reservados</h2>\n      <p>3</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="logo-usd" item-start large ></ion-icon>\n      <h2>Costo por Persona</h2>\n      <p>250.00 MXN</p>\n      <h2>Costo Total</h2>\n      <p>750.00 MXN</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="pricetags" item-start large ></ion-icon>\n      <h2>Forma de Pago</h2>\n      <p>Tarjeta •••• •••• •••• 6543</p>\n    </ion-item>\n  \n  </ion-card>\n  \n  <ion-card>\n\n    <ion-item>\n      <ion-fab right top>\n        <button ion-fab>\n          <ion-icon name="ribbon"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-avatar item-start>\n        <img src="assets/imgs/empresa.png">\n      </ion-avatar>\n      <h2>Empresa</h2>\n      <p>Arca Tour</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/img.jpg">\n      </ion-avatar>\n      <h2>Conductor</h2>\n      <p>Jonny Loredo</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="car" item-start large ></ion-icon>\n      <h2>Automóvil</h2>\n      <p>Mercedes Benz Sprinter</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="people" item-start large ></ion-icon>\n      <h2>Capacidad</h2>\n      <p>20 Personas</p>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\reservedtrip\reservedtrip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ReservedtripPage);
    return ReservedtripPage;
}());

//# sourceMappingURL=reservedtrip.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editname_editname__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editmail_editmail__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editphone_editphone__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editpassword_editpassword__ = __webpack_require__(114);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ProfilePage.prototype.launchHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.editName = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editname_editname__["a" /* EditnamePage */]);
    };
    ProfilePage.prototype.editMail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editmail_editmail__["a" /* EditmailPage */]);
    };
    ProfilePage.prototype.editPhone = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__editphone_editphone__["a" /* EditphonePage */]);
    };
    ProfilePage.prototype.editPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editpassword_editpassword__["a" /* EditpasswordPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\profile\profile.html"*/'<!-- -->\n<ion-header >\n    <ion-navbar color="primary">\n      <ion-buttons start>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>\n        <strong>Editar Cuenta</strong>\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-card>\n\n      <ion-item>\n        <div class="user-avatar">\n          <img src="../assets/imgs/img.jpg">\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <h2 ion-text class="text-primary"><strong>Cuenta</strong></h2>\n      </ion-item>\n\n      <button ion-item (click)=\'editName()\'>\n        <ion-icon name="person" item-start ></ion-icon>\n        <ion-input type="text" name="name" value="Eduardo Paredes" disabled></ion-input>\n      </button>\n      \n      <button ion-item (click)=\'editMail()\'>\n        <ion-icon name="mail" item-start ></ion-icon>\n        <ion-input type="text" name="mail" value="eduardo@gmail.com" disabled></ion-input>\n      </button>\n\n      <button ion-item (click)=\'editPhone()\'>\n        <ion-icon name="ios-call" item-start ></ion-icon>\n        <ion-input type="text" name="phone" value="+52 44023157" disabled></ion-input>\n      </button>\n\n      <button ion-item (click)=\'editPassword()\'>\n        <ion-icon name="lock" item-start ></ion-icon>\n        <ion-input type="password" name="password" value="123456" disabled></ion-input>\n      </button>\n\n      <div text-center margin-top>\n        <button ion-button  color="light" round (click)="launchHomePage()">\n          Cerrar Sesión\n        </button>\n      </div>\n  \n    </ion-card>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 132:
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
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addpayment/addpayment.module": [
		298,
		19
	],
	"../pages/booktravel/booktravel.module": [
		299,
		18
	],
	"../pages/cardescription-modal/cardescription-modal.module": [
		301,
		1
	],
	"../pages/companydescrip/companydescrip.module": [
		300,
		0
	],
	"../pages/data-registry-by-phone/data-registry-by-phone.module": [
		302,
		17
	],
	"../pages/editmail/editmail.module": [
		303,
		16
	],
	"../pages/editname/editname.module": [
		304,
		15
	],
	"../pages/editpassword/editpassword.module": [
		305,
		14
	],
	"../pages/editphone/editphone.module": [
		306,
		13
	],
	"../pages/help/help.module": [
		307,
		12
	],
	"../pages/home/home.module": [
		308,
		11
	],
	"../pages/logindefaultuser/logindefaultuser.module": [
		309,
		10
	],
	"../pages/mytrips/mytrips.module": [
		311,
		9
	],
	"../pages/payment/payment.module": [
		310,
		8
	],
	"../pages/profile/profile.module": [
		312,
		7
	],
	"../pages/registry/registry.module": [
		313,
		6
	],
	"../pages/reservedtrip/reservedtrip.module": [
		314,
		5
	],
	"../pages/searchtrip/searchtrip.module": [
		315,
		4
	],
	"../pages/tripconcluded/tripconcluded.module": [
		316,
		3
	],
	"../pages/tripdesc/tripdesc.module": [
		317,
		2
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
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Clase que se conecta a la ruta del usuario por medio de peticiones Http
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http) {
        this.http = http;
        //private url: string = 'http://192.168.3.71:3000/';
        //private url: string = 'http://localhost:3000/';
        this.url = 'http://192.168.100.228:3000/';
    }
    UserProvider.prototype.verifyTraveler = function (token) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(this.url + 'users/traveler', httpOptions);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_payment_payment__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_addpayment_addpayment__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mytrips_mytrips__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tripconcluded_tripconcluded__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_reservedtrip_reservedtrip__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_searchtrip_searchtrip__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_registry_registry__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tripdesc_tripdesc__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_help_help__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_editname_editname__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_editmail_editmail__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_editphone_editphone__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_editpassword_editpassword__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_booktravel_booktravel__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_logindefaultuser_logindefaultuser__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_data_registry_by_phone_data_registry_by_phone__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_traveler_traveler__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_authentification_authentication__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_user_user__ = __webpack_require__(176);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_addpayment_addpayment__["a" /* AddpaymentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_mytrips_mytrips__["a" /* MytripsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tripconcluded_tripconcluded__["a" /* TripconcludedPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_reservedtrip_reservedtrip__["a" /* ReservedtripPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_searchtrip_searchtrip__["a" /* SearchtripPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_registry_registry__["a" /* RegistryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tripdesc_tripdesc__["a" /* TripdescPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_editname_editname__["a" /* EditnamePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_editmail_editmail__["a" /* EditmailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_editphone_editphone__["a" /* EditphonePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_editpassword_editpassword__["a" /* EditpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_booktravel_booktravel__["a" /* BooktravelPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_logindefaultuser_logindefaultuser__["a" /* LogindefaultuserPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_data_registry_by_phone_data_registry_by_phone__["a" /* DataRegistryByPhonePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addpayment/addpayment.module#AddpaymentPageModule', name: 'AddpaymentPage', segment: 'addpayment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booktravel/booktravel.module#BooktravelPageModule', name: 'BooktravelPage', segment: 'booktravel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/companydescrip/companydescrip.module#CompanydescripPageModule', name: 'CompanydescripPage', segment: 'companydescrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cardescription-modal/cardescription-modal.module#CardescriptionModalPageModule', name: 'CardescriptionModalPage', segment: 'cardescription-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/data-registry-by-phone/data-registry-by-phone.module#DataRegistryByPhonePageModule', name: 'DataRegistryByPhonePage', segment: 'data-registry-by-phone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editmail/editmail.module#EditmailPageModule', name: 'EditmailPage', segment: 'editmail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editname/editname.module#EditnamePageModule', name: 'EditnamePage', segment: 'editname', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editpassword/editpassword.module#EditpasswordPageModule', name: 'EditpasswordPage', segment: 'editpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editphone/editphone.module#EditphonePageModule', name: 'EditphonePage', segment: 'editphone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logindefaultuser/logindefaultuser.module#LogindefaultuserPageModule', name: 'LogindefaultuserPage', segment: 'logindefaultuser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mytrips/mytrips.module#MytripsPageModule', name: 'MytripsPage', segment: 'mytrips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registry/registry.module#RegistryPageModule', name: 'RegistryPage', segment: 'registry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservedtrip/reservedtrip.module#ReservedtripPageModule', name: 'ReservedtripPage', segment: 'reservedtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchtrip/searchtrip.module#SearchtripPageModule', name: 'SearchtripPage', segment: 'searchtrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tripconcluded/tripconcluded.module#TripconcludedPageModule', name: 'TripconcludedPage', segment: 'tripconcluded', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tripdesc/tripdesc.module#TripdescPageModule', name: 'TripdescPage', segment: 'tripdesc', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_addpayment_addpayment__["a" /* AddpaymentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_mytrips_mytrips__["a" /* MytripsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tripconcluded_tripconcluded__["a" /* TripconcludedPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_reservedtrip_reservedtrip__["a" /* ReservedtripPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_registry_registry__["a" /* RegistryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tripdesc_tripdesc__["a" /* TripdescPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_searchtrip_searchtrip__["a" /* SearchtripPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_editname_editname__["a" /* EditnamePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_editmail_editmail__["a" /* EditmailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_editphone_editphone__["a" /* EditphonePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_editpassword_editpassword__["a" /* EditpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_booktravel_booktravel__["a" /* BooktravelPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_logindefaultuser_logindefaultuser__["a" /* LogindefaultuserPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_data_registry_by_phone_data_registry_by_phone__["a" /* DataRegistryByPhonePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_28__providers_traveler_traveler__["a" /* TravelerProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_authentification_authentication__["a" /* Authentication */],
                __WEBPACK_IMPORTED_MODULE_30__providers_user_user__["a" /* UserProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_payment_payment__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mytrips_mytrips__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_help_help__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(121);
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Mi Perfil', component: __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */], icon: "person" },
            { title: 'Mis Viajes', component: __WEBPACK_IMPORTED_MODULE_5__pages_mytrips_mytrips__["a" /* MytripsPage */], icon: "car" },
            { title: 'Formas de Pago', component: __WEBPACK_IMPORTED_MODULE_4__pages_payment_payment__["a" /* PaymentPage */], icon: "card" },
            { title: 'Ayuda', component: __WEBPACK_IMPORTED_MODULE_7__pages_help_help__["a" /* HelpPage */], icon: "help-buoy" },
            { title: 'Cerrar Sesión', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: "power" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\app\app.html"*/'<ion-menu [content]="content">\n  \n    <ion-header>\n      <ion-toolbar class="user-profile">\n        \n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n                <div class="user-avatar">\n                  <img src="../assets/imgs/img.jpg">\n                </div>\n            </ion-col>\n            <ion-col padding-top col-8>\n              <h5 ion-text class="no-margin text-white">\n                Eduardo Paredes\n              </h5>\n              <span ion-text color="light">(442) 302 3347</span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-toolbar>\n    \n    </ion-header>\n \n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)" menuClose>\n        <ion-icon item-left name="{{ p.icon }}"></ion-icon>\n        {{ p.title }}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authentication; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Generated class for the Authentication provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Authentication = /** @class */ (function () {
    function Authentication(http) {
        this.http = http;
        this.url = 'http://localhost:3000/';
    }
    /*return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });*/
    Authentication.prototype.getPhoneLogin = function (traveler) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(this.url + 'authentication');
    };
    Authentication = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Authentication);
    return Authentication;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logindefaultuser_logindefaultuser__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_registry_by_phone_data_registry_by_phone__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(nav, storage) {
        this.nav = nav;
        this.storage = storage;
    }
    LoginPage.prototype.phonelogin = function () {
        var _this = this;
        window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "MX",
            facebookNotificationsEnabled: true
        }, function (res) {
            console.log("res" + res.accountId);
            console.log("res" + res.applicationId);
            console.log("res" + res.token);
            console.log("res" + res.lastRefresh);
            console.log("res" + res.refreshInterval);
            _this.storage.set("token", res.token.toString());
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__data_registry_by_phone_data_registry_by_phone__["a" /* DataRegistryByPhonePage */]);
        }, function (err) {
            console.log("error", err);
        });
    };
    LoginPage.prototype.launchLoginDefault = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__logindefaultuser_logindefaultuser__["a" /* LogindefaultuserPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\login\login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>ArcontWay</strong>\n      </h2>\n      <h3 ion-text class="text-primary">Confia en nosotros!</h3>\n    </div>\n\n    <div>\n        <button ion-button color="light"  full round (click)="phonelogin();">Inicia con tu telefono</button>\n        <button ion-button color="secondary" full round >Inicia con tu correo</button>\n        <button ion-button full round>Inicia con facebook</button>\n        <button ion-button  color="dark" full round (click)="launchLoginDefault();">Entra con tu usuario</button>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tripdesc_tripdesc__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__searchtrip_searchtrip__ = __webpack_require__(109);
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
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trips = [{ date: 1, desc: "fecha numero 1" },
            { date: 1, desc: "fecha numero 1.1" },
            { date: 2, desc: "fecha numero 2" },
            { date: 2, desc: "fecha numero 2" },
            { date: 3, desc: "fecha numero 3" }];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.listaMap = this.trips.map(function (item, index, array) {
            return item.date;
        });
        this.dateFilter = this.listaMap.filter(function (item, index, array) {
            return array.indexOf(item) === index;
        });
    };
    HomePage.prototype.advancedSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__searchtrip_searchtrip__["a" /* SearchtripPage */]);
    };
    HomePage.prototype.launchTripdescPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tripdesc_tripdesc__["a" /* TripdescPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar >\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <div text-center>\n          <ion-title>Busca tu viaje</ion-title>\n      </div>\n\n    </ion-navbar>\n\n      <ion-card no-margin margin-bottom class="full-width" style="margin-bottom: 0px;" ion-affix>\n          <ion-item tappable  class="border-bottom">\n              <ion-icon name="search" color="primary" item-left></ion-icon>\n              <ion-input type="text" placeholder="Ingrese su origen" ></ion-input>\n            </ion-item>\n\n          <ion-item tappable  class="border-bottom">\n            <ion-icon name="search" color="primary" item-left></ion-icon>\n            <ion-input type="text" placeholder="Ingrese su destino" ></ion-input>\n          </ion-item>\n          <ion-item (click)="advancedSearch();">\n              Realiza busquedas personalizadas. Info.\n          <ion-icon tappable name="arrow-forward" color="primary" item-right></ion-icon>\n          </ion-item>\n        </ion-card>\n\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n\n\n<ion-list *ngFor="let date of dateFilter">\n <ion-label>Fecha: {{date}}</ion-label>\n<div *ngFor="let trip of trips">\n  <ion-card *ngIf="date == trip.date">\n    <ion-item>\n      <div text-center>\n        <h2>Viaje de Qro. a Landa de Matamoros</h2>\n        <p>Nombre de la empresa</p>\n      </div>\n    </ion-item>\n    <img src="assets/imgs/mapa.jpg">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            \n            <ion-icon name="logo-usd" item-start></ion-icon>\n            <h3>Costo</h3>\n            <p>$123</p>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="alarm" item-start></ion-icon>\n            <h3>Horario</h3>\n            <p>14:00 hrs.</p>\n        </ion-col>\n        <ion-col>\n            <ion-icon name="contacts" item-start></ion-icon>\n            <h3>Personas</h3>\n            <p>3</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-grid>\n      <ion-row>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/imgs/img.jpg">\n          </ion-avatar>\n          <h3>Eduardo</h3>\n          <form align="left">\n            <p class="clasificacion">\n\n              <label >★</label>\n              <label >★</label>\n              <label style="color:aqua">★</label>\n              <label style="color:aqua">★</label>\n              <label style="color:aqua">★</label>\n\n            </p>\n          </form>\n          <button ion-button icon-only small item-right (click)="launchTripdescPage()">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-row>\n    </ion-grid>\n\n  </ion-card>\n</div>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripdescPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booktravel_booktravel__ = __webpack_require__(107);
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
 * Generated class for the TripdescPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TripdescPage = /** @class */ (function () {
    function TripdescPage(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
    }
    TripdescPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TripdescPage');
    };
    TripdescPage.prototype.launchCardescription = function () {
        var cardDescModal = this.modal.create('CardescriptionModalPage');
        cardDescModal.present();
    };
    TripdescPage.prototype.launchCompanydescrip = function () {
        var companyDescModal = this.modal.create('CompanydescripPage');
        companyDescModal.present();
    };
    TripdescPage.prototype.booktrav = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booktravel_booktravel__["a" /* BooktravelPage */]);
    };
    TripdescPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tripdesc',template:/*ion-inline-start:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\tripdesc\tripdesc.html"*/'<!--\n  Generated template for the TripdescPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <strong>ArcontWay</strong>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding #content class="animated fadeIn common-bg">\n\n<ion-card>\n  <ion-card-header>\n    <div text-center>\n      <h2>Querétaro-Landa de Matamoros</h2>\n    </div>\n  </ion-card-header>\n</ion-card>\n\n<ion-content class="card-background-page">\n <ion-card>\n    <img src="assets/imgs/qro.jpg"/>\n    <div class="card-title">Quéretaro</div>\n  </ion-card>\n<ion-card-content>\n<br>\n  <h6>Descripcion del viaje</h6>\n  <p>Viaje con posibles paradas en puntos intermedios de Landa a Querétaro.Pueden\n    viajar máximo 4 personas, esto es por mayor seguridad para nuestros clientes.</p>\n  <ion-item>\n     <ion-icon name="pin"> Origen: </ion-icon>\n     <br>\n     <br>\n     <ion-row>\n      <p align="center">\n      <ion-icon name="radio-button-on" item-start>\n        Querétaro\n         </ion-icon>\n       </ion-row>\n\n     <p align="left"> &nbsp; &nbsp; &nbsp; Av.5 de Febrero</p>\n     <br>\n   <ion-icon name="pin"> Destino: </ion-icon>\n  <br>\n  <br>\n  <ion-row>\n   <p align="center">\n   <ion-icon name="radio-button-on" item-start>\n     Landa de Matamoros\n      </ion-icon>\n    </ion-row>\n\n  <p align="left"> &nbsp; &nbsp; &nbsp; Plaza</p>\n  <br>\n  </ion-item>\n\n      <ion-grid>\n        <ion-row>\n          <ion-item>\n            <ion-icon name="logo-usd" item-start></ion-icon>\n            <h2>Costo por persona</h2>\n            <p>$123</p>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-icon name="alarm" item-start ></ion-icon>\n            <h2>Horario Salida</h2>\n            <p>14:00 hrs.</p>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-icon name="alarm" item-start></ion-icon>\n            <h2>Horario Llegada</h2>\n            <p>17:00 hrs.</p>\n          </ion-item>\n        </ion-row>\n\n      <ion-row>\n        <ion-item>\n        <ion-icon name="people" item-start ></ion-icon>\n          <h2>Número de personas</h2>\n          <p>3</p>\n        </ion-item>\n      </ion-row>\n\n    <br>\n      <ion-row>\n        <ion-item>\n          <ion-icon ion-text class="text-primary" name="contact" item-star>\n\n          Conductor\n\n          </ion-icon>\n          </ion-item>\n          <ion-item >\n              <ion-avatar item-start>\n                <img src="assets/imgs/img.jpg">\n              </ion-avatar>\n              <h2>Eduardo 21 años</h2>\n              <p>Automovil Volkswagen</p>\n              <span ion-text class="text-primary" tappable (click)="launchCardescription()">  Más </span>\n            </ion-item>\n      </ion-row>\n    <br>\n    <ion-row>\n      <ion-item >\n          <ion-avatar item-start>\n            <img src="assets/imgs/uber.jpg">\n          </ion-avatar>\n          <h2>Empresa</h2>\n          <p>Uber</p>\n          <span ion-text class="text-primary" tappable (click)="launchCompanydescrip()">  Más </span>\n        </ion-item>\n    </ion-row>\n\n      <ion-row>\n        <ion-item>\n        <ion-icon name="chatbubbles" item-start></ion-icon>\n          <h2>Chat</h2>\n        </ion-item>\n    <ion-card>\n      <ion-card-content>\n        <p align="rigth">Puntos intermedios para el viaje, favor de comentar aqui</p>\n      </ion-card-content>\n\n    </ion-card>\n      </ion-row>\n      <button ion-button outline tappable (click)="booktrav()">Reservar Viaje</button>\n\n    </ion-grid>\n\n</ion-card-content>\n'/*ion-inline-end:"C:\Users\Faby Martiez\Documents\ArcontWay\App\ArcontWay\src\pages\tripdesc\tripdesc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], TripdescPage);
    return TripdescPage;
}());

//# sourceMappingURL=tripdesc.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Generated class for the ApiRestTravelerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TravelerProvider = /** @class */ (function () {
    function TravelerProvider(http) {
        this.http = http;
        //private url: string = 'http://192.168.3.71:3000/';
        //private url: string = 'http://localhost:3000/';
        this.url = 'http://192.168.100.228:3000/';
    }
    TravelerProvider.prototype.sendRegister = function (user, token) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.url + 'travelers', JSON.stringify(user), httpOptions);
    };
    TravelerProvider.prototype.getData = function (id) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                //'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(this.url + 'travelers?id=' + id, httpOptions);
    };
    TravelerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TravelerProvider);
    return TravelerProvider;
}());

//# sourceMappingURL=traveler.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map