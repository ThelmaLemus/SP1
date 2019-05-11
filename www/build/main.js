webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro1_registro1__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vista_diaria_vista_diaria__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, usersService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.usersService = usersService;
        this.users = [];
        this.user = { id: null, nombre: null, username: null, correo: null, password: null, sexo: "", myDate: "", trabaja: null, estudia: null };
        this.username = null;
        this.password = null;
        usersService.getUsers().valueChanges()
            .subscribe(function (users) {
            _this.users = users;
            // debugger 
        });
    }
    HomePage.prototype.iniciarSesion = function () {
        // debugger
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].username == this.username && this.users[i].password == this.password) {
                console.log("Inició sesión correctamente");
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__vista_diaria_vista_diaria__["a" /* VistaDiariaPage */]);
                break;
            }
            else if (this.username == null || this.password == null) {
                alert("Por favor ingrese un usuario y una contrasña");
                break;
            }
            else {
                alert("Usuario o contraseña incorrectos");
                break;
            }
        }
    };
    HomePage.prototype.editarUsuario = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registro1_registro1__["a" /* Registro1Page */], { id: id, edited: 1 });
    };
    HomePage.prototype.registrarse = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registro1_registro1__["a" /* Registro1Page */]);
    };
    HomePage.prototype.dddd = function (id) {
        var _this = this;
        this.usersService.getUserF(id).valueChanges()
            .subscribe(function (user) {
            _this.user = user;
        });
        this.usersService.deleteUser(this.user);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\home\home.html"*/'<ion-header>\n\n    <!-- <script defer src="https://use.fontawesome.com/releases/v5.8.2/js/all.js" integrity="sha384-DJ25uNYET2XCl5ZF++U8eNxPWqcKohUUBUpKGlNLMchM7q4Wjg2CUpjHLaL8yYPH" crossorigin="anonymous"></script> -->\n\n    \n\n    <ion-navbar>\n\n    <ion-title>\n\n      Inicio\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n\n\n  <!-- <button ion-button (click) ="goWel()">Ir a wel</button> -->\n\n  <!-- <br><br><br> -->\n\n\n\n  <img class="icon" src="assets/imgs/calendar.svg.png">\n\n  <!-- <br> -->\n\n\n\n  <ion-list padding>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="username"></ion-input>\n\n    </ion-item>\n\n \n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  \n\n  <div padding>\n\n      <button ion-button block (click)="iniciarSesion()">Iniciar sesión</button>\n\n      <button ion-button block (click)="registrarse()">Registro</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 227:
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
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bienvenido/bienvenido.module": [
		269
	],
	"../pages/crear-evento/crear-evento.module": [
		295
	],
	"../pages/registro1/registro1.module": [
		296
	],
	"../pages/registro2/registro2.module": [
		297
	],
	"../pages/vista-diaria/vista-diaria.module": [
		298
	],
	"../pages/wel/wel.module": [
		299
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 268;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoPageModule", function() { return BienvenidoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bienvenido__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BienvenidoPageModule = /** @class */ (function () {
    function BienvenidoPageModule() {
    }
    BienvenidoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bienvenido__["a" /* BienvenidoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bienvenido__["a" /* BienvenidoPage */]),
            ],
        })
    ], BienvenidoPageModule);
    return BienvenidoPageModule;
}());

//# sourceMappingURL=bienvenido.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registro1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro2_registro2__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__(77);
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
 * Generated class for the Registro1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Registro1Page = /** @class */ (function () {
    function Registro1Page(navCtrl, navParams, usersService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersService = usersService;
        this.user = { id: null, nombre: null, username: null, correo: null, password: null, sexo: "", myDate: "", trabaja: null, estudia: null };
        this.password2 = '';
        this.id = null;
        this.edited = 0;
        this.id = navParams.get('id');
        // this.id =  1;
        if (this.id != undefined) {
            usersService.getUserF(this.id).valueChanges()
                .subscribe(function (user) {
                _this.user = user;
            });
        }
    }
    Registro1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Registro1Page');
    };
    Registro1Page.prototype.addUser = function () {
        if (this.user.id != undefined && this.user.id != 0) {
            // console.log("entro: " + this.user.id);
            this.editUser();
        }
        else {
            // console.log("user " + this.user);
            this.newUser();
        }
    };
    Registro1Page.prototype.newUser = function () {
        this.user.id = Date.now();
        if (this.user.nombre == null || this.user.username == null || this.user.correo == null || this.user.password == null || this.password2 == null) {
            alert("Por favor llene los campos");
        }
        else if (this.user.password != this.password2) {
            alert("Las contraseñas no coinciden");
        }
        else {
            // console.log("Nombre: " + this.user.nombre);
            // console.log("Username: " + this.user.username);
            // console.log("Correo: " + this.user.correo);
            // console.log("Password: " + this.user.password);
            // this.user.sexo="";
            // this.user.myDate="";
            this.usersService.createUser(this.user);
            // console.log("Id: " + this.user.id);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registro2_registro2__["a" /* Registro2Page */], { id: this.user.id, edited: 0 });
        }
    };
    Registro1Page.prototype.editUser = function () {
        if (this.user.nombre == "" || this.user.username == "" || this.user.correo == "" || this.user.password == "" || this.password2 == "") {
            alert("Por favor llene los campos");
        }
        else if (this.user.password != this.password2) {
            alert("Las contraseñas no coinciden");
        }
        else {
            this.usersService.editUserF(this.user);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registro2_registro2__["a" /* Registro2Page */], { id: this.user.id, edited: 1 });
        }
    };
    Registro1Page.prototype.deleteUser = function () {
        this.navCtrl.pop();
        this.usersService.deleteUser(this.user);
    };
    Registro1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro1',template:/*ion-inline-start:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\registro1\registro1.html"*/'<!--\n\n  Generated template for the Registro1Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<h3>Registro</h3>\n\n\n\n	<ion-list>\n\n	    <ion-item>\n\n	      <ion-label floating>Nombre</ion-label>\n\n	      <ion-input type="text" [(ngModel)]="user.nombre"></ion-input>\n\n	    </ion-item>\n\n\n\n	    <ion-item>\n\n	      <ion-label floating>Usuario</ion-label>\n\n	      <ion-input type="text"[(ngModel)]="user.username"></ion-input>\n\n	    </ion-item>\n\n\n\n	    <ion-item>\n\n	      <ion-label floating>Correo</ion-label>\n\n	      <ion-input type="text" [(ngModel)]="user.correo"></ion-input>\n\n	    </ion-item>\n\n\n\n	    <ion-item>\n\n	      <ion-label floating>Contraseña</ion-label>\n\n	      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n	    </ion-item>\n\n\n\n	    <ion-item>\n\n	      <ion-label floating>Confirmar contraseña</ion-label>\n\n	      <ion-input type="password" [(ngModel)]="password2"></ion-input>\n\n	    </ion-item>\n\n\n\n	</ion-list>\n\n	<p>{{nombre}}</p>\n\n	<div padding>\n\n			<button ion-button (click)="addUser()">Continuar</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\registro1\registro1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]])
    ], Registro1Page);
    return Registro1Page;
}());

//# sourceMappingURL=registro1.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registro2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(77);
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
 * Generated class for the Registro2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//DD/MM/YYYY
var Registro2Page = /** @class */ (function () {
    //  formattedDate;
    function Registro2Page(navCtrl, navParams, usersService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersService = usersService;
        this.id = null;
        this.edited = 0;
        this.user = { id: null, nombre: null, username: null, correo: null, password: null, sexo: null, myDate: null, trabaja: null, estudia: null };
        this.user1 = { id: null, nombre: null, username: null, correo: null, password: null, sexo: null, myDate: null, trabaja: null, estudia: null };
        this.id = navParams.get('id');
        this.edited = navParams.get('edited');
        // console.log("username: "+this.id);
        if (this.edited != 0) {
            usersService.getUserF(this.id).valueChanges()
                .subscribe(function (user) {
                _this.user = user;
            });
        }
        else {
            this.user = usersService.getUser(this.id);
        }
        // console.log("Idd: " + this.user);
    }
    Registro2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Registro2Page');
    };
    Registro2Page.prototype.continuar2 = function () {
        /* var mydate = new Date.get();
        var year = mydate.getFullYear().toString();
        var month = mydate.getMonth().toString();
        var day = mydate.getDate().toString();
    
        this.formattedDate = year + month + day;
        */
        // this.user.myDate = new Date().toISOString();
        if (this.user.sexo == undefined || this.user.myDate == undefined) {
            alert("Por favor llene los campos");
        }
        else {
            // this.user.myDate = this.user.myDate.toISOString();
            // console.log("sexo: " + this.user.nombre);
            // console.log("mydate: " + this.user.myDate);
            // console.log("trabajas: " + this.user.trabaja);
            // console.log("sexo: " + this.user.sexo);  
            this.usersService.createUserF(this.user);
            this.navCtrl.pop();
            this.navCtrl.pop();
        }
    };
    Registro2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro2',template:/*ion-inline-start:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\registro2\registro2.html"*/'<!--\n\n  Generated template for the Registro2Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<h3>Registro</h3>\n\n\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label floating>Sexo</ion-label>\n\n			<ion-select [(ngModel)]="user.sexo">\n\n				<ion-option value="hombre">\n\n					Hombre\n\n				</ion-option>\n\n				<ion-option value="mujer">\n\n					Mujer\n\n				</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n		  <ion-label floating>Fecha de nacimiento</ion-label>\n\n		  <ion-datetime displayFormat="DD/MMM/YYYY" pickerFormat="DD/MMM/YYYY" [(ngModel)]="user.myDate"></ion-datetime>\n\n		</ion-item>\n\n\n\n		<br>\n\n\n\n	    <ion-item>\n\n		    <ion-label color="gris">Trabajas</ion-label>\n\n		    <ion-checkbox [(ngModel)]="user.trabaja"></ion-checkbox>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n		    <ion-label color="gris">Estudias</ion-label>\n\n		    <ion-checkbox [(ngModel)]="user.estudia"></ion-checkbox>\n\n		</ion-item>\n\n\n\n	</ion-list>\n\n\n\n	<div padding>\n\n    	<button ion-button block (click)="continuar2()">Continuar</button>\n\n	</div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\registro2\registro2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]])
    ], Registro2Page);
    return Registro2Page;
}());

//# sourceMappingURL=registro2.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaDiariaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crear_evento_crear_evento__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { VerEventoPage } from '../ver-evento/ver-evento';
// import { CrearEventoPage } from '../crear-evento/crear-evento';
/**
 * Generated class for the VistaDiariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VistaDiariaPage = /** @class */ (function () {
    function VistaDiariaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = [];
    }
    VistaDiariaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VistaDiariaPage');
    };
    VistaDiariaPage.prototype.verEvento = function (id) {
    };
    VistaDiariaPage.prototype.newEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__crear_evento_crear_evento__["a" /* CrearEventoPage */]);
    };
    VistaDiariaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vista-diaria',template:/*ion-inline-start:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\vista-diaria\vista-diaria.html"*/'<!--\n\n  Generated template for the VistaDiariaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Calendario</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div class="boton">\n\n		<button ion-button icon-only color="light" (click)="newEvent()">\n\n	  		<ion-icon name="add"></ion-icon>\n\n		</button>\n\n	</div>\n\n	<!-- <div style="color:gray;">\n\n		<i class="fas fa-palette">d</i>\n\n	</div>  -->\n\n\n\n	<ion-item *ngFor="let event of events">\n\n		<ion-card class="reales" (click)="verEvento(event.id)">\n\n			<ion-card-header>\n\n		    	<ion-card-title >\n\n		    		{{ event.title }}\n\n		    	</ion-card-title>\n\n			</ion-card-header>\n\n			\n\n			<ion-card-content>\n\n		    	{{ event.hora }}\n\n			</ion-card-content>\n\n		</ion-card>\n\n	</ion-item>\n\n\n\n	<ion-label>\n\n		Sugerencias\n\n	</ion-label>\n\n\n\n	<ion-item *ngFor="let event of events">\n\n		<ion-row>\n\n	    	<ion-col col-10>\n\n	    		<ion-card class="sugerencias">\n\n					<ion-card-header>\n\n			    		<ion-card-title >\n\n			    			{{ event.title }}\n\n			    		</ion-card-title>\n\n					</ion-card-header>\n\n\n\n					<ion-card-content>\n\n				    	{{ event.hora }}\n\n					</ion-card-content>\n\n				</ion-card>\n\n	    	</ion-col>\n\n	    	<ion-col col-2 align-self-left text-center>\n\n	    		<ion-row>\n\n		    		<button class="simbolo" ion-button icon-only outline item-right clear>\n\n		        		<ion-icon name="checkmark-circle"></ion-icon>\n\n		        	</button>\n\n		        </ion-row>\n\n		        <ion-row>\n\n		        	<button class="simbolo" ion-button icon-only outline item-right clear>\n\n		        		<ion-icon name="close-circle"></ion-icon>\n\n		       		</button>\n\n		       	</ion-row>\n\n	    	</ion-col>\n\n		</ion-row>\n\n	</ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\vista-diaria\vista-diaria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], VistaDiariaPage);
    return VistaDiariaPage;
}());

//# sourceMappingURL=vista-diaria.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearEventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_events_services__ = __webpack_require__(612);
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
 * Generated class for the CrearEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearEventoPage = /** @class */ (function () {
    function CrearEventoPage(navCtrl, navParams, eventServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventServices = eventServices;
        this.event = {
            id: null,
            title: null,
            startDate: null,
            endDate: null,
            descripcion: null,
            direccion: null,
            recordatorio: null,
            repeticion: null
        };
        this.id = null;
        this.id = navParams.get('id');
    }
    CrearEventoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearEventoPage');
    };
    CrearEventoPage.prototype.disableTime = function () {
        console.log("deshabilitado");
    };
    CrearEventoPage.prototype.guardarEvento = function () {
    };
    CrearEventoPage.prototype.newEvent = function () {
        this.event.id = Date.now();
        if (this.event.title == null ||
            this.event.sdate == null ||
            this.event.edate == null ||
            this.event.password == null ||
            this.password2 == null) {
            alert("Por favor llene los campos");
        }
        else if (this.event.password != this.password2) {
            alert("Las contraseñas no coinciden");
        }
        else {
            // console.log("Nombre: " + this.event.nombre);
            // console.log("Username: " + this.eventname);
            // console.log("Correo: " + this.event.correo);
            // console.log("Password: " + this.event.password);
            // this.event.sexo="";
            // this.event.myDate="";
            this.eventsService.createUser(this.event);
            // console.log("Id: " + this.event.id);
            this.navCtrl.push(Registro2Page, { id: this.event.id, edited: 0 });
        }
    };
    CrearEventoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crear-evento',template:/*ion-inline-start:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\crear-evento\crear-evento.html"*/'<!--\n\n  Generated template for the VerEventoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n  	<ion-title>Nuevo evento</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div class="top">\n\n		<div class="palette">\n\n			<i class="ico-gray fas fa-palette fa-2x"></i> \n\n		</div>\n\n	</div>\n\n	<div class="form_cei">\n\n\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray far fa-edit fa-lg"></i>\n\n			</div>\n\n			<ion-item>\n\n				<ion-label floating>Título</ion-label>\n\n				<ion-input type="text" [(ngModel)]="event.title"></ion-input>	 \n\n			</ion-item>\n\n		</div>\n\n		\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray fas fa-map-marker-alt fa-lg"></i>\n\n			</div>\n\n			<ion-item>\n\n				<ion-label floating>Dirección</ion-label>\n\n				<ion-input type="text" [(ngModel)]="event.location"></ion-input>\n\n			</ion-item>\n\n		</div>\n\n	\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray fas fa-clock fa-lg"></i>\n\n			</div>\n\n			<ion-item style="display:flex; justify-content: space-around;">\n\n				<ion-input style="display:none;"></ion-input>\n\n				<ion-label style="margin-top: 20px;" ><span>Todo el día</span> </ion-label>\n\n				<ion-checkbox item-right style="margin-top: 15px;" floating (ionChange)="disableTime()"></ion-checkbox>\n\n			</ion-item>\n\n		</div>\n\n	\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray fas fa-calendar fa-lg"></i>\n\n			</div>\n\n			<ion-item>\n\n				<ion-label floating>Fecha inicial</ion-label>\n\n				<ion-datetime displayFormat="DD/MMM/YYYY" pickerFormat="DD/MMM/YYYY" [(ngModel)]="event.startDate"></ion-datetime>\n\n			</ion-item>\n\n		</div>\n\n		\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray fas fa-calendar fa-lg"></i>\n\n			</div>\n\n			<ion-item>\n\n				<ion-label floating>Fecha final</ion-label>\n\n				<ion-datetime displayFormat="DD/MMM/YYYY" pickerFormat="DD/MMM/YYYY" [(ngModel)]="event.endDate"></ion-datetime>\n\n			</ion-item>\n\n		</div>\n\n	\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray fas fa-retweet fa-lg"></i>\n\n			</div>\n\n			<ion-item>\n\n				<ion-label floating>Repetición</ion-label>\n\n				<ion-select [(ngModel)]="event.repeat">\n\n					<ion-option value="no">\n\n						No se repite\n\n					</ion-option>\n\n					<ion-option value="dias">\n\n						Todos los días\n\n					</ion-option>\n\n					<ion-option value="semanas">\n\n						Todas las semanas\n\n					</ion-option>\n\n					<ion-option value="meses">\n\n						Todos los meses\n\n					</ion-option>\n\n					<ion-option value="años">\n\n						Todos los años\n\n					</ion-option>\n\n					<!-- <ion-option value="mujer">\n\n						Personalización\n\n					</ion-option> -->\n\n				</ion-select>\n\n			</ion-item>\n\n		</div>\n\n\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray fas fa-bell fa-lg"></i>\n\n			</div>\n\n			<ion-item>\n\n				<ion-label floating>Recordatorio</ion-label>\n\n				<ion-select [(ngModel)]="event.remind">\n\n					<ion-input type="number" [(ngModel)]="event.tiempoAntes"></ion-input>\n\n					<ion-option value="no">\n\n						Sin recordatorio\n\n					</ion-option>\n\n					<ion-option value="minutos">\n\n						Minutos antes\n\n					</ion-option>\n\n					<ion-option value="horas">\n\n						Horas antes\n\n					</ion-option>\n\n					<ion-option value="dias">\n\n						Días antes\n\n					</ion-option>\n\n					<ion-option value="semanas">\n\n						Semanas antes\n\n					</ion-option>\n\n					<!-- <ion-option value="mujer">\n\n						Personalización\n\n					</ion-option> -->\n\n				</ion-select>\n\n			</ion-item>\n\n		</div>\n\n	\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray fas fa-align-justify fa-lg"></i>\n\n			</div>\n\n			<ion-item>\n\n					<ion-label floating>Descripción</ion-label>\n\n				<ion-textarea [(ngModel)]="event.description"></ion-textarea>\n\n			</ion-item>\n\n		</div>\n\n		\n\n	</div>\n\n\n\n	<br><br>\n\n	\n\n	<div padding>\n\n		<button ion-button block (click)="crearEvento()">Guardar</button>\n\n	</div>\n\n	\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\crear-evento\crear-evento.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_events_services__["a" /* EventServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_events_services__["a" /* EventServices */]) === "function" && _c || Object])
    ], CrearEventoPage);
    return CrearEventoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=crear-evento.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEventoPageModule", function() { return CrearEventoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crear_evento__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrearEventoPageModule = /** @class */ (function () {
    function CrearEventoPageModule() {
    }
    CrearEventoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__crear_evento__["a" /* CrearEventoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crear_evento__["a" /* CrearEventoPage */]),
            ],
        })
    ], CrearEventoPageModule);
    return CrearEventoPageModule;
}());

//# sourceMappingURL=crear-evento.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registro1PageModule", function() { return Registro1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro1__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Registro1PageModule = /** @class */ (function () {
    function Registro1PageModule() {
    }
    Registro1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registro1__["a" /* Registro1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro1__["a" /* Registro1Page */]),
            ],
        })
    ], Registro1PageModule);
    return Registro1PageModule;
}());

//# sourceMappingURL=registro1.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registro2PageModule", function() { return Registro2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro2__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Registro2PageModule = /** @class */ (function () {
    function Registro2PageModule() {
    }
    Registro2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registro2__["a" /* Registro2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro2__["a" /* Registro2Page */]),
            ],
        })
    ], Registro2PageModule);
    return Registro2PageModule;
}());

//# sourceMappingURL=registro2.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistaDiariaPageModule", function() { return VistaDiariaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vista_diaria__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VistaDiariaPageModule = /** @class */ (function () {
    function VistaDiariaPageModule() {
    }
    VistaDiariaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vista_diaria__["a" /* VistaDiariaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vista_diaria__["a" /* VistaDiariaPage */]),
            ],
        })
    ], VistaDiariaPageModule);
    return VistaDiariaPageModule;
}());

//# sourceMappingURL=vista-diaria.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelPageModule", function() { return WelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wel__ = __webpack_require__(581);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelPageModule = /** @class */ (function () {
    function WelPageModule() {
    }
    WelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wel__["a" /* WelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wel__["a" /* WelPage */]),
            ],
        })
    ], WelPageModule);
    return WelPageModule;
}());

//# sourceMappingURL=wel.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(469);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_wel_wel_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_users_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_events_services__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_registro1_registro1_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_registro2_registro2_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_bienvenido_bienvenido_module__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_vista_diaria_vista_diaria_module__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_crear_evento_crear_evento_module__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { NgCalendarModule} from 'ionic2-calendar';
var firebaseConfig = {
    apiKey: "AIzaSyDn8wegOnXN1U1H5somDCmhseFclRcT0FU",
    authDomain: "multitask1030.firebaseapp.com",
    databaseURL: "https://multitask1030.firebaseio.com",
    storageBucket: "multitask1030.appspot.com",
    messagingSenderId: '963088475538'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bienvenido/bienvenido.module#BienvenidoPageModule', name: 'BienvenidoPage', segment: 'bienvenido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crear-evento/crear-evento.module#CrearEventoPageModule', name: 'CrearEventoPage', segment: 'crear-evento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro1/registro1.module#Registro1PageModule', name: 'Registro1Page', segment: 'registro1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro2/registro2.module#Registro2PageModule', name: 'Registro2Page', segment: 'registro2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vista-diaria/vista-diaria.module#VistaDiariaPageModule', name: 'VistaDiariaPage', segment: 'vista-diaria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wel/wel.module#WelPageModule', name: 'WelPage', segment: 'wel', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__pages_wel_wel_module__["WelPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_registro1_registro1_module__["Registro1PageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_registro2_registro2_module__["Registro2PageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_bienvenido_bienvenido_module__["BienvenidoPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_vista_diaria_vista_diaria_module__["VistaDiariaPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_crear_evento_crear_evento_module__["CrearEventoPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__services_events_services__["a" /* EventServices */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__services_users_service__["a" /* UsersService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BienvenidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(159);
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
 * Generated class for the BienvenidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BienvenidoPage = /** @class */ (function () {
    function BienvenidoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BienvenidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BienvenidoPage');
    };
    BienvenidoPage.prototype.regresar_a_inicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    BienvenidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bienvenido',template:/*ion-inline-start:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\bienvenido\bienvenido.html"*/'<!--\n\n  Generated template for the BienvenidoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>bienvenido</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<h2>¡Bienvenido!</h2>\n\n\n\n	<h3>Ahora puedes iniciar sesión</h3>\n\n\n\n	<div padding>\n\n    	<button ion-button block (click)="regresar_a_inicio()">Iniciar sesión</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\bienvenido\bienvenido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], BienvenidoPage);
    return BienvenidoPage;
}());

//# sourceMappingURL=bienvenido.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(77);
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
 * Generated class for the WelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelPage = /** @class */ (function () {
    function WelPage(navCtrl, navParams, usersService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usersService = usersService;
        this.user = { id: null, nombre: null, username: null, correo: null, password: null, password2: null, sexo: null, myDate: null, trabaja: null, estudia: null };
        this.id = null;
        this.id = navParams.get('id');
        this.user = usersService.getUser(this.id);
    }
    WelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelPage');
    };
    WelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wel',template:/*ion-inline-start:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\wel\wel.html"*/'<!--\n\n  Generated template for the WelPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ viewTitle}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Nombre</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.nombre" ></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Correo</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.correo" ></ion-input>\n\n  </ion-item>\n\n  <br><br>\n\n  <button ion-button block>Block Button</button>\n\n  <br><br><br>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IvanC\Documents\GitHub\SP1\src\pages\wel\wel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]])
    ], WelPage);
    return WelPage;
}());

//# sourceMappingURL=wel.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(159);
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
    // rootPage:any = CrearEventoPage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\IvanC\Documents\GitHub\SP1\src\app\app.html"*/'<ion-nav [root]="rootPage">\n\n    <script type="text/javascript" src="date.js"></script>\n\n    <script type="text/javascript" src="date-de-DE.js"></script>\n\n</ion-nav>\n\n'/*ion-inline-end:"C:\Users\IvanC\Documents\GitHub\SP1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventServices = /** @class */ (function () {
    function EventServices(afDB) {
        this.afDB = afDB;
        this.events = [];
        this.events1 = [];
    }
    EventServices.prototype.getEvents = function () {
        return this.afDB.list('events/');
    };
    EventServices.prototype.getEvent = function (id) {
        return this.events1.filter(function (e, i) { return e.id == id; })[0] || { id: null, nombre: null, username: null, correo: null, password: null, password2: null, sexo: null, myDate: null, trabaja: null, estudia: null };
        // return this.afDB.object('events/'+ id);
    };
    EventServices.prototype.getEventF = function (id) {
        return this.afDB.object('events/' + id);
    };
    EventServices.prototype.createEvent = function (event) {
        this.events1.push(event);
    };
    EventServices.prototype.createEventF = function (event) {
        this.afDB.database.ref('events/' + event.id).set(event);
    };
    EventServices.prototype.editEvent = function (event) {
        for (var i = 0; i < this.events.length; i++) {
            if (this.events[i].id == event.id) {
                this.events[i] = event;
            }
        }
    };
    /**
     * ecitEventF
     */
    EventServices.prototype.editEventF = function (event) {
        this.afDB.database.ref('events/' + event.id).set(event);
    };
    /**
     * deleteEvent
     */
    EventServices.prototype.deleteEvent = function (event) {
        this.afDB.database.ref('events/' + event.id).remove();
    };
    EventServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], EventServices);
    return EventServices;
}());

//# sourceMappingURL=events.services.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(afDB) {
        this.afDB = afDB;
        this.users = [];
        this.users1 = [];
    }
    UsersService.prototype.getUsers = function () {
        // return this.users;
        return this.afDB.list('users/');
    };
    UsersService.prototype.getUser = function (id) {
        return this.users1.filter(function (e, i) { return e.id == id; })[0] || { id: null, nombre: null, username: null, correo: null, password: null, password2: null, sexo: null, myDate: null, trabaja: null, estudia: null };
        // return this.afDB.object('users/'+ id);
    };
    UsersService.prototype.getUserF = function (id) {
        // return this.users.filter(function(e, i){return e.id == id})[0] || {id: null, nombre :null, username:null, correo:null, password:null, password2:null, sexo:null, myDate:null, trabaja:null, estudia:null};
        return this.afDB.object('users/' + id);
    };
    UsersService.prototype.createUser = function (user) {
        this.users1.push(user);
    };
    UsersService.prototype.createUserF = function (user) {
        this.afDB.database.ref('users/' + user.id).set(user);
    };
    UsersService.prototype.editUser = function (user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id == user.id) {
                this.users[i] = user;
            }
        }
    };
    /**
     * ecitUserF
     */
    UsersService.prototype.editUserF = function (user) {
        this.afDB.database.ref('users/' + user.id).set(user);
    };
    /**
     * deleteUser
     */
    UsersService.prototype.deleteUser = function (user) {
        this.afDB.database.ref('users/' + user.id).remove();
        // for (let i = 0; i < this.users.length; i++) {
        //     if (this.users1[i].id == user.id) {
        //         this.users1.splice(i,1);
        //     }
        // }
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], UsersService);
    return UsersService;
}());

//# sourceMappingURL=users.service.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map