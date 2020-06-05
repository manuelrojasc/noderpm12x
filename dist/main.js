(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./persona/persona.module": [
		"./src/app/persona/persona.module.ts",
		1,
		"persona-persona-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/HelperClass/SweetAlertMensaje.ts":
/*!**************************************************!*\
  !*** ./src/app/HelperClass/SweetAlertMensaje.ts ***!
  \**************************************************/
/*! exports provided: sweetAlertMensaje */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sweetAlertMensaje", function() { return sweetAlertMensaje; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

var sweetAlertMensaje = /** @class */ (function () {
    function sweetAlertMensaje() {
    }
    sweetAlertMensaje.getMensajeTransaccionExitosa = function () {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
            title: "Operacion Exitosa",
            position: "top-end",
            type: "success",
            timer: 2000,
            showConfirmButton: false
        });
    };
    sweetAlertMensaje.getMensajeTransaccionErronea = function (error) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
            title: "Error",
            type: "error",
            text: error,
            showConfirmButton: true
        });
    };
    sweetAlertMensaje.getMensajeLogin = function () {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000
        });
    };
    sweetAlertMensaje.getMensajeDelete = function (title) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
            title: title,
            type: "warning",
            showCancelButton: true
        });
    };
    sweetAlertMensaje.getMessageInfo = function (title, html) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
            title: title,
            type: "info",
            html: html,
            showCancelButton: true
        });
    };
    sweetAlertMensaje.getMessageNotifiction = function (title, body, url, urlImage) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
            type: "warning",
            html: "\n      <h1>" + title + "</h1>\n      <img src=" + urlImage + "/>\n      <a href=" + url + ">Go!</a>"
        });
    };
    return sweetAlertMensaje;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(db, swUpdate) {
        this.swUpdate = swUpdate;
        this.title = "firechat";
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe({
                next: function () {
                    if (confirm("Hay una nueva version disponible.Desae Instalarlo?")) {
                        window.location.reload();
                    }
                }
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _app_rounting_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.rounting.module */ "./src/app/app.rounting.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common_locales_es_PY__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/es-PY */ "./node_modules/@angular/common/locales/es-PY.js");
/* harmony import */ var _angular_common_locales_es_PY__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_PY__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/es-AR */ "./node_modules/@angular/common/locales/es-AR.js");
/* harmony import */ var _angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_es_PY__WEBPACK_IMPORTED_MODULE_11___default.a, "es");
Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default.a, "pt");
Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_13___default.a, "en");
Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_14___default.a, "es-Ar");
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["fas"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_15__["NgxPermissionsModule"].forRoot(),
                _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_20__["AngularFireMessagingModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_22__["AngularFireStorageModule"],
                //AngularFirestoreModule.enablePersistence(),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _app_rounting_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__["ServiceWorkerModule"].register("ngsw-worker.js", {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
                })
            ],
            exports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]],
            providers: [
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__["AngularFirestore"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: "es-Ar" },
                _services_file_service__WEBPACK_IMPORTED_MODULE_17__["FileService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.rounting.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.rounting.module.ts ***!
  \****************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    {
        path: "persona/:id/area/:idarea", loadChildren: "./persona/persona.module#PersonaModule"
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login-box {\r\n  width: 320px;\r\n  height: 480px;\r\n  background:url('fondo.jpg') no-repeat center top;\r\n  color: #fff;\r\n  top: 50%;\r\n  left: 50%;\r\n  position: absolute;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  box-sizing: border-box;\r\n  padding: 70px 30px;\r\n}\r\n\r\n.login-box .avatar {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: -50px;\r\n  left: calc(50% - 50px);\r\n}\r\n\r\n.login-box h1 {\r\n  margin: 0;\r\n  padding: 0 0 20px;\r\n  text-align: center;\r\n  font-size: 22px;\r\n}\r\n\r\n.login-box label {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: bold;\r\n  display: block;\r\n}\r\n\r\n.login-box input {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.login-box select{\r\n  border: none;\r\n  background: transparent;\r\n  height: 40px;\r\n  outline:none;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  line-height: 10px;\r\n}\r\n\r\n.login-box button {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  border: none;\r\n  outline: none;\r\n  height: 40px;\r\n  background: #b80f22;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.login-box button:hover {\r\n  cursor: pointer;\r\n  background: #ffc107;\r\n  color: #000;\r\n}\r\n\r\n.login-box a {\r\n  text-decoration: none;\r\n  font-size: 12px;\r\n  line-height: 20px;\r\n  color: darkgrey;\r\n}\r\n\r\n.login-box a:hover {\r\n  color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\r\n  <img src=\"../../assets/img_login/logo.png\" class=\"avatar\" alt=\"Avatar Image\">\r\n  <h1>Iniciar Sesión</h1>\r\n  <form [formGroup]=\"user\" (ngSubmit)=\"logIn()\">\r\n    <div class=\"field\">\r\n      <p class=\"control has-icons-left has-icons-right\">\r\n        <input type=\"email\" formControlName=\"email\" class=\"input\" id=\"username\" placeholder=\"ingrese su correo\">\r\n        <span class=\"icon is-small is-left\">\r\n          <i class=\"fas fa-envelope\"></i>\r\n        </span>\r\n      </p>\r\n      <article class=\"message is-danger\" *ngIf=\"(user.dirty|| user.touched ) && user.invalid \">\r\n        <div class=\"message-body\">\r\n          <span *ngIf=\"user.get('email').hasError('required')\">Ingrese su correo</span>\r\n          <span *ngIf=\"user.get('email').hasError('email')\">Ingrese un correo Valido</span>\r\n        </div>\r\n      </article>\r\n    </div>\r\n    <div class=\"field\">\r\n      <p class=\"control has-icons-left has-icons-right\">\r\n        <input type=\"password\" class=\"input\" formControlName=\"password\" placeholder=\"ingrese contraseña\">\r\n        <span class=\"icon is-small is-left\">\r\n          <i class=\"fas fa-lock\"></i>\r\n        </span>\r\n\r\n      </p>\r\n      <article class=\"message is-danger\" *ngIf=\"(user.dirty|| user.touched ) && user.invalid \">\r\n        <div class=\"message-body\">\r\n          <span *ngIf=\"user.get('password').hasError('required')\">Ingrese su contraseña</span>\r\n        </div>\r\n      </article>\r\n    </div>\r\n    <button type=\"submit\" [disabled]=\"!user.valid\">Ingresar</button>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _HelperClass_SweetAlertMensaje__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HelperClass/SweetAlertMensaje */ "./src/app/HelperClass/SweetAlertMensaje.ts");
/* harmony import */ var _services_persona_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/persona.service */ "./src/app/services/persona.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, personaService, router) {
        this.authService = authService;
        this.personaService = personaService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        sessionStorage.clear();
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
        this.authService.getAuth().auth.onAuthStateChanged(function (userLoged) {
            if (userLoged) {
                _this.emailLoged = userLoged.email;
            }
        });
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.authService.onLogin(this.user.get("email").value, this.user.get("password").value).subscribe(function (respuesta) {
            if (respuesta) {
                _this.personaService.getPersonaFindCorreo(_this.authService.getAuth().auth.currentUser.email).subscribe(function (persona) {
                    _HelperClass_SweetAlertMensaje__WEBPACK_IMPORTED_MODULE_3__["sweetAlertMensaje"].getMensajeTransaccionExitosa();
                    _this.router.navigateByUrl("/persona/" + persona[0].id + "/area/" + persona[0].area.id + "/map");
                });
            }
            else {
                _HelperClass_SweetAlertMensaje__WEBPACK_IMPORTED_MODULE_3__["sweetAlertMensaje"].getMensajeTransaccionErronea("La contraseña es invalida o el usuario no se encuentra registrado");
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_persona_service__WEBPACK_IMPORTED_MODULE_4__["PersonaService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.onLogin = function (email, password) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (respuesta) {
                sessionStorage.setItem("loget", respuesta.user.uid);
                observer.next(true);
                observer.complete();
            }).catch(function (error) {
                observer.next(false);
            });
        });
    };
    AuthService.prototype.onCreateUserWithEmailAndPassword = function (email, password) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.afAuth.auth.signOut().then(function () {
                sessionStorage.removeItem("loget");
                observer.next(true);
            }).catch(function (error) {
                observer.next(false);
            });
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth;
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.afAuth.auth.currentUser;
    };
    AuthService.prototype.isLogged = function () {
        if (this.afAuth.auth.currentUser) {
            return true;
        }
        return false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/file.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileService = /** @class */ (function () {
    function FileService(storage) {
        this.storage = storage;
        this.emitUrlPhoto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FileService.prototype.uploadFile = function (file, binder) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (Observer) {
            var path = binder + "/" + new Date().getTime() + "_" + file.name;
            var fileRef = _this.storage.ref(path);
            var task = fileRef.put(file).then(function (result) {
                fileRef.getDownloadURL().subscribe(function (url) {
                    var fileReturn = { name: file.name, url: url, id: path, estado: true };
                    Observer.next(fileReturn);
                    Observer.complete();
                });
            });
        });
    };
    FileService.prototype.downloadFile = function () {
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/services/persona.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/persona.service.ts ***!
  \*********************************************/
/*! exports provided: PersonaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaService", function() { return PersonaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonaService = /** @class */ (function () {
    function PersonaService(afs) {
        this.afs = afs;
        this.personaCollection = this.afs.collection('persona');
    }
    PersonaService.prototype.save = function (persona) {
        this.personaCollection.add(persona);
    };
    PersonaService.prototype.update = function (persona) {
        this.getCollectionPersona().doc(persona.id).update(persona);
    };
    PersonaService.prototype.getCollectionPersona = function () {
        return this.afs.collection("persona");
    };
    PersonaService.prototype.getPersonaFindId = function (idPersona) {
        return this.afs.collection("persona").doc(idPersona).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (documentoAction) {
            var personaData = documentoAction.payload.data();
            personaData.id = documentoAction.payload.id;
            return personaData;
        }));
        /*pipe(switchMap((persona) => {
          persona.areaRef.get().then(datosArea => persona.area = datosArea.data() as area)
          persona.tipoPersonaRef.get().then(datosTipoPersona => persona.tipoPersona = datosTipoPersona.data() as tipoPersona)
            }))*/
    };
    PersonaService.prototype.getPersonaFindCorreo = function (correo) {
        return this.afs.collection("persona", function (ref) { return ref.where("email", "==", correo).limit(1); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (documentPerson) {
            var personData = documentPerson.payload.doc.data();
            personData.id = documentPerson.payload.doc.id;
            return personData;
        }); }));
    };
    PersonaService.prototype.getActividadesFindIdPersona = function (idPersona) {
        return this.getCollectionPersona().doc(idPersona).collection("actividad_persona").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (i) {
            var id = i.payload.doc.id;
            var data = i.payload.doc.data();
            return __assign({ id: id }, data);
        }); }));
    };
    PersonaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], PersonaService);
    return PersonaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDjFjprtCLUmkUGPkDCGvpdRljJ26_p3sY',
        authDomain: 'angular-1ca2a.firebaseapp.com',
        databaseURL: 'https://angular-1ca2a.firebaseio.com',
        projectId: 'angular-1ca2a',
        storageBucket: 'angular-1ca2a.appspot.com',
        messagingSenderId: '686241214777'
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MARC\Desktop\Firechat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map