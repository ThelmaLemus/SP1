webpackJsonp([0],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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
    function EventServices(afDB, alertCtrl) {
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.events = [];
        this.events1 = [];
    }
    EventServices.prototype.getEvents = function (uid) {
        return this.afDB.list('users/' + uid + '/events/');
    };
    EventServices.prototype.getEventF = function (uid, eid) {
        return this.afDB.object('users/' + uid + '/events/' + eid);
    };
    EventServices.prototype.createEventF = function (uid, event) {
        this.afDB.database.ref('users/' + uid + '/events/' + event.id).set(event);
    };
    /**
     * deleteEvent
     */
    EventServices.prototype.deleteEvent = function (event) {
        this.afDB.database.ref('events/' + event.id).remove();
    };
    EventServices.prototype.dalert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    EventServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], EventServices);
    return EventServices;
    var _a, _b;
}());

//# sourceMappingURL=events.services.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro1_registro1__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vista_diaria_vista_diaria__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__ = __webpack_require__(99);
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
    function HomePage(navCtrl, usersService, afDB, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.usersService = usersService;
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.ok = 0;
        this.null = 0;
        this.wrong = 0;
        this.users = [];
        this.id = null;
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
        if (this.username != null || this.password != null) {
            for (var i = 0; i < this.users.length; i++) {
                if (this.users[i].username == this.username && this.users[i].password == this.password && i < this.users.length) {
                    this.ok++;
                    this.id = this.users[i].id;
                    // break;
                }
                else if (i < this.users.length) {
                    this.wrong++;
                    // break;
                }
            }
        }
        else {
            this.usersService.dalert("Error", "Favor ingresar un usuario y una contraseña");
        }
        // debugger
        if (this.ok == 1) {
            // console.log('ok');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__vista_diaria_vista_diaria__["a" /* VistaDiariaPage */], { uid: this.id });
        }
        else if (this.null != 0) {
            console.log('null');
        }
        else if (this.wrong == this.users.length) {
            // console.log('wrong');
            console.log("Usuario o contraseña incorrecta");
            this.usersService.dalert("Error", "Usuario o contraseña incorrectos");
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Erick Cutuc\Music\SP1\src\pages\home\home.html"*/'<ion-header>\n\n    <!-- <script defer src="https://use.fontawesome.com/releases/v5.8.2/js/all.js" integrity="sha384-DJ25uNYET2XCl5ZF++U8eNxPWqcKohUUBUpKGlNLMchM7q4Wjg2CUpjHLaL8yYPH" crossorigin="anonymous"></script> -->\n\n    \n\n    <ion-navbar>\n\n    <ion-title>\n\n      Inicio\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n\n\n  <!-- <button ion-button (click) ="goWel()">Ir a wel</button> -->\n\n  <!-- <br><br><br> -->\n\n\n\n  <img class="icon" src="assets/imgs/calendar.svg.png">\n\n  <!-- <br> -->\n\n\n\n  <ion-list padding>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="username"></ion-input>\n\n    </ion-item>\n\n \n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  \n\n  <div padding>\n\n      <button ion-button block (click)="iniciarSesion()">Iniciar sesión</button>\n\n      <button ion-button block (click)="registrarse()">Registro</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Erick Cutuc\Music\SP1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaDiariaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_events_services__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crear_evento_crear_evento__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vista_mensual_vista_mensual__ = __webpack_require__(295);
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
 * Generated class for the VistaDiariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VistaDiariaPage = /** @class */ (function () {
    function VistaDiariaPage(navCtrl, navParams, eventServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventServices = eventServices;
        this.all_events = [];
        this.op = null;
        this.rep = null;
        this.events1 = [];
        this.uid = null;
        this.eid = null;
        this.day = null;
        this.month = null;
        this.year = null;
        this.aux = null;
        this.aux2 = null;
        this.theDate = null;
        this.theDate2 = null;
        this.sday = null;
        this.smonth = null;
        this.syear = null;
        this.aday = null;
        this.amonth = null;
        this.ayear = null;
        this.fday = null;
        this.fmonth = null;
        this.fyear = null;
        this.uid = navParams.get('uid');
        this.op = navParams.get('op');
        this.day = navParams.get('day');
        this.month = navParams.get('month');
        this.year = navParams.get('year');
        // debugger
        this.validations();
        // this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
    VistaDiariaPage.prototype.ionViewWillEnter = function () {
        this.rep = this.navParams.get('rep');
        if (this.rep != undefined)
            this.events1 = [];
    };
    VistaDiariaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VistaDiariaPage');
    };
    VistaDiariaPage.prototype.editarEvento = function (eid, dstartDate) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__crear_evento_crear_evento__["a" /* CrearEventoPage */], { uid: this.uid, eid: eid, dstartDate: dstartDate });
    };
    VistaDiariaPage.prototype.newEvent = function (uid) {
        if (this.day == null || this.month == null || this.year == null) {
            this.theDate2 = new Date();
            this.day = this.theDate2.getDate();
            this.day = this.theDate2.getDate();
            this.month = this.theDate2.getMonth() + 1;
            this.month = this.theDate2.getMonth() + 1;
            this.year = this.theDate2.getFullYear();
            this.year = this.theDate2.getFullYear();
            this.month = this.month.toString();
            this.day = this.day.toString();
            if (this.month.length == 1)
                this.month = "0" + this.month;
            if (this.day.length == 1)
                this.day = "0" + this.day;
        }
        else {
            this.month = this.month.toString();
            this.day = this.day.toString();
            if (this.month.length == 1)
                this.month = "0" + this.month;
            if (this.day.length == 1)
                this.day = "0" + this.day;
            this.theDate2 = new Date(this.year, this.month, this.day);
        }
        this.aux = this.year + "-" + this.month + "-" + this.day;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__crear_evento_crear_evento__["a" /* CrearEventoPage */], { uid: this.uid, date: this.aux });
    };
    VistaDiariaPage.prototype.monthly_view = function () {
        if (this.op == 1) {
            this.navCtrl.pop();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__vista_mensual_vista_mensual__["a" /* VistaMensualPage */], { uid: this.uid });
        }
    };
    VistaDiariaPage.prototype.validations = function () {
        var _this = this;
        var isValid = null;
        if (this.day == null || this.month == null || this.year == null) {
            this.theDate = new Date();
            this.day = this.theDate.getDate();
            this.month = this.theDate.getMonth() + 1;
            this.year = this.theDate.getFullYear();
            this.month = this.month.toString();
            this.day = this.day.toString();
            if (this.month.length == 1)
                this.month = "0" + this.month;
            if (this.day.length == 1)
                this.day = "0" + this.day;
        }
        else {
            this.month = this.month.toString();
            this.day = this.day.toString();
            if (this.month.length == 1)
                this.month = "0" + this.month;
            if (this.day.length == 1)
                this.day = "0" + this.day;
            this.theDate = new Date(this.year, this.month, this.day);
        }
        this.aux = this.year + "-" + this.month + "-" + this.day;
        this.theDate = this.theDate.toDateString();
        this.eventServices.getEvents(this.uid).valueChanges().subscribe(function (events) {
            _this.all_events = events;
            if (_this.all_events.length > 0) {
                for (var i = 0; i < _this.all_events.length; i++) {
                    isValid = _this.valid_range(_this.all_events[i].startDate, _this.aux, _this.all_events[i].endDate);
                    if (isValid)
                        _this.events1.push(_this.all_events[i]);
                    // debugger
                }
            }
        });
    };
    VistaDiariaPage.prototype.valid_range = function (startDate, aux, endDate) {
        //get the day, month and year from each date
        // debugger
        this.sday = startDate.substr(8, 2);
        this.smonth = startDate.substr(5, 2);
        this.syear = startDate.substr(0, 4);
        this.fday = endDate.substr(8, 9);
        this.fmonth = endDate.substr(5, 2);
        this.fyear = endDate.substr(0, 4);
        this.aday = aux.substr(8, 2);
        this.amonth = aux.substr(5, 2);
        this.ayear = aux.substr(0, 4);
        //parsing each string date to integer
        this.sday = parseInt(this.sday, 10);
        this.smonth = parseInt(this.smonth, 10);
        this.syear = parseInt(this.syear, 10);
        this.fday = parseInt(this.fday, 10);
        this.fmonth = parseInt(this.fmonth, 10);
        this.fyear = parseInt(this.fyear, 10);
        this.aday = parseInt(this.aday, 10);
        this.amonth = parseInt(this.amonth, 10);
        this.ayear = parseInt(this.ayear, 10);
        // debugger
        if (startDate == aux) {
            return true;
        }
        else if (this.sday <= this.aday && this.aday <= this.fday)
            if (this.smonth <= this.amonth && this.amonth <= this.fmonth)
                if (this.syear <= this.ayear && this.ayear <= this.fyear)
                    return true;
    };
    VistaDiariaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vista-diaria',template:/*ion-inline-start:"C:\Users\Erick Cutuc\Music\SP1\src\pages\vista-diaria\vista-diaria.html"*/'<!--\n\n  Generated template for the VistaDiariaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{theDate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div class="newEvent">\n\n		<button class="navbutton" icon-only color="light" (click)="monthly_view()">\n\n	  		<ion-icon class="icons" name="md-calendar"></ion-icon>\n\n		</button>\n\n		<button class="navbutton" icon-only color="light" (click)="newEvent()">\n\n	  		<ion-icon class="icons" name="add"></ion-icon>\n\n		</button>\n\n	</div>\n\n	<br><br>\n\n	\n\n	<div class="event_list">\n\n		<div class="item_event_list" *ngFor="let event of events1">\n\n			<ion-card class="reales" (click)="editarEvento(event.id, event.dstartDate)">\n\n				<ion-card-header>\n\n					<ion-card-title >\n\n						{{ event.title }}\n\n					</ion-card-title>\n\n				</ion-card-header>\n\n				\n\n				<ion-card-content>\n\n					{{ event.dstartDate }}\n\n				</ion-card-content>\n\n			</ion-card>\n\n		</div>\n\n	</div>\n\n	\n\n	<ion-label>\n\n		Sugerencias\n\n	</ion-label>\n\n\n\n	<ion-item *ngFor="let event of events1">\n\n		<ion-row>\n\n	    	<ion-col col-10>\n\n	    		<ion-card class="sugerencias">\n\n					<ion-card-header>\n\n			    		<ion-card-title >\n\n			    			{{ event.title }}\n\n			    		</ion-card-title>\n\n					</ion-card-header>\n\n\n\n					<ion-card-content>\n\n				    	{{ event.startDate }}\n\n					</ion-card-content>\n\n				</ion-card>\n\n	    	</ion-col>\n\n	    	<ion-col col-2 align-self-left text-center>\n\n	    		<ion-row>\n\n		    		<button class="simbolo" ion-button icon-only outline item-right clear>\n\n		        		<ion-icon name="checkmark-circle"></ion-icon>\n\n		        	</button>\n\n		        </ion-row>\n\n		        <ion-row>\n\n		        	<button class="simbolo" ion-button icon-only outline item-right clear>\n\n		        		<ion-icon name="close-circle"></ion-icon>\n\n		       		</button>\n\n		       	</ion-row>\n\n	    	</ion-col>\n\n		</ion-row>\n\n	</ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Erick Cutuc\Music\SP1\src\pages\vista-diaria\vista-diaria.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_events_services__["a" /* EventServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_events_services__["a" /* EventServices */]) === "function" && _c || Object])
    ], VistaDiariaPage);
    return VistaDiariaPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=vista-diaria.js.map

/***/ }),

/***/ 228:
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
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bienvenido/bienvenido.module": [
		270
	],
	"../pages/crear-evento/crear-evento.module": [
		296
	],
	"../pages/registro1/registro1.module": [
		297
	],
	"../pages/registro2/registro2.module": [
		298
	],
	"../pages/ver-evento/ver-evento.module": [
		299
	],
	"../pages/vista-diaria/vista-diaria.module": [
		300
	],
	"../pages/vista-mensual/vista-mensual.module": [
		301
	],
	"../pages/wel/wel.module": [
		302
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
webpackAsyncContext.id = 269;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoPageModule", function() { return BienvenidoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bienvenido__ = __webpack_require__(499);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bienvenido__["a" /* BienvenidoPage */]),
            ],
        })
    ], BienvenidoPageModule);
    return BienvenidoPageModule;
}());

//# sourceMappingURL=bienvenido.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registro1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro2_registro2__ = __webpack_require__(293);
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
            selector: 'page-registro1',template:/*ion-inline-start:"C:\Users\Erick Cutuc\Music\SP1\src\pages\registro1\registro1.html"*/'<!--\n\n  Generated template for the Registro1Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<h3>Registro</h3>\n\n\n\n	<ion-list>\n\n	    <ion-item>\n\n	      <ion-label floating>Nombre</ion-label>\n\n	      <ion-input type="text" [(ngModel)]="user.nombre"></ion-input>\n\n	    </ion-item>\n\n\n\n	    <ion-item>\n\n	      <ion-label floating>Usuario</ion-label>\n\n	      <ion-input type="text"[(ngModel)]="user.username"></ion-input>\n\n	    </ion-item>\n\n\n\n	    <ion-item>\n\n	      <ion-label floating>Correo</ion-label>\n\n	      <ion-input type="text" [(ngModel)]="user.correo"></ion-input>\n\n	    </ion-item>\n\n\n\n	    <ion-item>\n\n	      <ion-label floating>Contraseña</ion-label>\n\n	      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n	    </ion-item>\n\n\n\n	    <ion-item>\n\n	      <ion-label floating>Confirmar contraseña</ion-label>\n\n	      <ion-input type="password" [(ngModel)]="password2"></ion-input>\n\n	    </ion-item>\n\n\n\n	</ion-list>\n\n	<p>{{nombre}}</p>\n\n	<div padding>\n\n			<button ion-button (click)="addUser()">Continuar</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Erick Cutuc\Music\SP1\src\pages\registro1\registro1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]])
    ], Registro1Page);
    return Registro1Page;
}());

//# sourceMappingURL=registro1.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registro2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-registro2',template:/*ion-inline-start:"C:\Users\Erick Cutuc\Music\SP1\src\pages\registro2\registro2.html"*/'<!--\n\n  Generated template for the Registro2Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<h3>Registro</h3>\n\n\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label floating>Sexo</ion-label>\n\n			<ion-select [(ngModel)]="user.sexo">\n\n				<ion-option value="hombre">\n\n					Hombre\n\n				</ion-option>\n\n				<ion-option value="mujer">\n\n					Mujer\n\n				</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n		  <ion-label floating>Fecha de nacimiento</ion-label>\n\n		  <ion-datetime displayFormat="DD/MMM/YYYY" pickerFormat="DD/MMM/YYYY" [(ngModel)]="user.myDate"></ion-datetime>\n\n		</ion-item>\n\n\n\n		<br>\n\n\n\n	    <ion-item>\n\n		    <ion-label color="gris">Trabajas</ion-label>\n\n		    <ion-checkbox [(ngModel)]="user.trabaja"></ion-checkbox>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n		    <ion-label color="gris">Estudias</ion-label>\n\n		    <ion-checkbox [(ngModel)]="user.estudia"></ion-checkbox>\n\n		</ion-item>\n\n\n\n	</ion-list>\n\n\n\n	<div padding>\n\n    	<button ion-button block (click)="continuar2()">Continuar</button>\n\n	</div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Erick Cutuc\Music\SP1\src\pages\registro2\registro2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]])
    ], Registro2Page);
    return Registro2Page;
}());

//# sourceMappingURL=registro2.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearEventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_events_services__ = __webpack_require__(114);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventServices = eventServices;
        this.day = null;
        this.month = null;
        this.year = null;
        this.sday = null;
        this.smonth = null;
        this.syear = null;
        this.shour = null;
        this.sminute = null;
        this.theDate2 = null;
        this.aday = null;
        this.amonth = null;
        this.ayear = null;
        this.fday = null;
        this.fmonth = null;
        this.fyear = null;
        this.fhour = null;
        this.fminute = null;
        this.sbackDate = null;
        this.ebackDate = null;
        this.event = {
            id: null,
            uid: null,
            title: null,
            startDate: null,
            dstartDate: null,
            endDate: null,
            location: null,
            allday: null,
            repeat: "no",
            reminder: "no",
            description: null
        };
        this.uid = null;
        this.eid = null;
        this.aux = null;
        this.daux = null;
        this.uid = navParams.get('uid');
        this.eid = navParams.get('eid');
        this.aux = navParams.get('date');
        // this.daux = navParams.get('dstartDate');
        if (this.aux != undefined) {
            this.event.startDate = this.aux + "T00:00:00Z";
        }
        // else
        // {
        // 	this.aux = this.daux.substr(6,4) +"-"+ this.daux.substr(3,2) + "-" + this.daux.substr(0,2);
        // }
        // this.daux = this.aux.substr(8,9) + "-" + this.aux.substr(5,2) + "-" +this.aux.substr(0,4) ;
        if (this.eid != undefined) {
            eventServices.getEventF(this.uid, this.eid).valueChanges()
                .subscribe(function (event) {
                _this.event = event;
                _this.sbackDate = _this.event.startDate;
                _this.ebackDate = _this.event.endDate;
            });
            this.validateAllDay();
        }
    }
    CrearEventoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearEventoPage');
    };
    CrearEventoPage.prototype.disableTime = function () {
        var x = document.getElementById("Time");
        if (x.style.display === "none" || this.event.allday == false) {
            x.style.display = "block";
        }
        else if (x.style.display != "none" || this.event.allday == true) {
            if (this.aux != undefined) {
                this.event.startDate = this.aux + "T00:00:00Z";
                this.event.endDate = this.aux + "T23:59:59Z";
            }
            else {
                this.event.startDate = this.event.startDate.substr(0, 10) + "T00:00:00Z";
                this.event.endDate = this.event.endDate.substr(0, 10) + "T23:59:59Z";
            }
            x.style.display = "none";
        }
    };
    CrearEventoPage.prototype.validateAllDay = function () {
        // console.log(this.event.allday);
        var x = document.getElementById("Time");
        if (this.event.allday == false) {
            x.style.display = "block";
        }
        else if (this.event.allday == true) {
            x.style.display = "none";
        }
    };
    CrearEventoPage.prototype.validateTime = function () {
        this.sday = this.event.startDate.substr(8, 2);
        this.smonth = this.event.startDate.substr(5, 2);
        this.syear = this.event.startDate.substr(0, 4);
        this.shour = this.event.startDate.substr(11, 2);
        this.sminute = this.event.startDate.substr(14, 2);
        this.fday = this.event.endDate.substr(8, 2);
        this.fmonth = this.event.endDate.substr(5, 2);
        this.fyear = this.event.endDate.substr(0, 4);
        this.fhour = this.event.endDate.substr(11, 2);
        this.fminute = this.event.endDate.substr(14, 2);
        this.sday = parseInt(this.sday, 10);
        this.smonth = parseInt(this.smonth, 10);
        this.syear = parseInt(this.syear, 10);
        this.shour = parseInt(this.shour, 10);
        this.sminute = parseInt(this.sminute, 10);
        this.fday = parseInt(this.fday, 10);
        this.fmonth = parseInt(this.fmonth, 10);
        this.fyear = parseInt(this.fyear, 10);
        this.fhour = parseInt(this.fhour, 10);
        this.fminute = parseInt(this.fminute, 10);
        if (this.sday > this.fday || this.smonth > this.fmonth || this.syear > this.fyear) {
            this.eventServices.dalert("Error", "Elija un rango de fechas válido");
            return false;
        }
        else {
            if (this.sday == this.fday && this.smonth == this.fmonth && this.syear == this.fyear) {
                if (this.shour < this.fhour) {
                    return true;
                }
                else {
                    this.eventServices.dalert("Error", "Elija un rango de horas válido");
                    return false;
                }
            }
            else {
                return true;
            }
        }
        // console.log(this.event.endDate);
    };
    CrearEventoPage.prototype.crearEvento = function () {
        if (this.eid != undefined) {
            this.editEvent();
        }
        else {
            this.newEvent();
        }
    };
    CrearEventoPage.prototype.newEvent = function () {
        this.event.id = 'e' + Date.now();
        if (this.event.title == null ||
            this.event.startDate == null ||
            this.event.endDate == null ||
            this.event.reminder == null) {
            this.eventServices.dalert("Error", "Por favor llene todos los campos");
        }
        else {
            this.event.dstartDate = this.event.startDate.substr(8, 2) + "-" + this.event.startDate.substr(5, 2) + "-" + this.event.startDate.substr(0, 4);
            // this.event.endDate = this.event.endDate.substr(8, 9) + "-" + this.event.endDate.substr(5, 2) + "-" + this.event.endDate.substr(0, 4);
            this.eventServices.createEventF(this.uid, this.event);
            this.navCtrl.getPrevious().data.rep = 1;
            this.navCtrl.pop();
        }
    };
    CrearEventoPage.prototype.editEvent = function () {
        if (this.event.title == "" ||
            this.event.startDate == "" ||
            this.event.endDate == "" ||
            this.event.reminder == "") {
            this.eventServices.dalert("Error", "Por favor llene todos los campos");
        }
        else {
            if (this.validateTime()) {
                this.event.dstartDate = this.event.startDate.substr(8, 2) + "-" + this.event.startDate.substr(5, 2) + "-" + this.event.startDate.substr(0, 4);
                this.eventServices.createEventF(this.uid, this.event);
                debugger;
                this.navCtrl.getPrevious().data.rep = 1;
                this.navCtrl.pop();
            }
        }
    };
    CrearEventoPage.prototype.ionViewWillEnter = function () {
        this.validateAllDay();
    };
    CrearEventoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crear-evento',template:/*ion-inline-start:"C:\Users\Erick Cutuc\Music\SP1\src\pages\crear-evento\crear-evento.html"*/'<!--\n\n  Generated template for the VerEventoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n  	<ion-title>Nuevo evento</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div class="top">\n\n		<div class="palette">\n\n			<i class="ico-gray fas fa-palette fa-2x"></i> \n\n		</div>\n\n	</div>\n\n	<div class="form_cei">\n\n\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray far fa-edit fa-lg"></i>\n\n			</div>\n\n			<ion-item>\n\n				<ion-label floating>Título</ion-label>\n\n				<ion-input type="text" [(ngModel)]="event.title"></ion-input>	 \n\n			</ion-item>\n\n		</div>\n\n		\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray fas fa-map-marker-alt fa-lg"></i>\n\n			</div>\n\n			<ion-item>\n\n				<ion-label floating>Dirección</ion-label>\n\n				<ion-input type="text" [(ngModel)]="event.location"></ion-input>\n\n			</ion-item>\n\n		</div>\n\n		\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray fas fa-clock fa-lg"></i>\n\n			</div>\n\n			<ion-item style="display:flex; justify-content: space-around;">\n\n				<ion-input style="display:none;"></ion-input>\n\n				<ion-label style="margin-top: 20px;" ><span>Todo el día</span> </ion-label>\n\n				<ion-checkbox item-right style="margin-top: 15px;" floating (ionChange)="disableTime()" [(ngModel)]="event.allday"></ion-checkbox>\n\n			</ion-item>\n\n		</div>\n\n\n\n		<div id="Time">\n\n			<div class="citem">\n\n				<div class="icon-center">\n\n					<i class="ico-gray fas fa-calendar fa-lg"></i>\n\n				</div>\n\n				<ion-item>\n\n					<ion-label floating>Fecha inicial</ion-label>\n\n					<ion-datetime max="2030-12-31" displayFormat="DD/MMM/YY hh:mm:a" pickerFormat="DD/MMM/YY hh:mm:a" [(ngModel)]="event.startDate"></ion-datetime>\n\n				</ion-item>\n\n			</div>\n\n			\n\n			<div class="citem">\n\n				<div class="icon-center">\n\n					<i class="ico-gray fas fa-calendar fa-lg"></i>\n\n				</div>\n\n				<ion-item>\n\n					<ion-label floating>Fecha final</ion-label>\n\n					<ion-datetime max="2030-12-31" displayFormat="DD/MMM/YY hh:mm:a" pickerFormat="DD/MMM/YY hh:mm:a" (ionChange)="validateTime()" [(ngModel)]="event.endDate"></ion-datetime>\n\n				</ion-item>\n\n			</div>\n\n		</div>\n\n	\n\n	\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray fas fa-retweet fa-lg"></i>\n\n			</div>\n\n			<ion-item>\n\n				<ion-label floating>Repetición</ion-label>\n\n				<ion-select [(ngModel)]="event.repeat"> \n\n					<ion-option value="no">\n\n						No se repite\n\n					</ion-option>\n\n					<ion-option value="dias">\n\n						Todos los días\n\n					</ion-option>\n\n					<ion-option value="semanas">\n\n						Todas las semanas\n\n					</ion-option>\n\n					<ion-option value="meses">\n\n						Todos los meses\n\n					</ion-option>\n\n					<ion-option value="años">\n\n						Todos los años\n\n					</ion-option>\n\n					<!-- <ion-option value="mujer">\n\n						Personalización\n\n					</ion-option> -->\n\n				</ion-select>\n\n			</ion-item>\n\n		</div>\n\n\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray fas fa-bell fa-lg"></i>\n\n			</div>\n\n			<ion-item>\n\n				<ion-label floating>Recordatorio</ion-label>\n\n				<ion-select [(ngModel)]="event.reminder">\n\n					<ion-input type="number" [(ngModel)]="event.tiempoAntes"></ion-input>\n\n					<ion-option value="no">\n\n						Sin recordatorio\n\n					</ion-option>\n\n					<ion-option value="minutos">\n\n						Minutos antes\n\n					</ion-option>\n\n					<ion-option value="horas">\n\n						Horas antes\n\n					</ion-option>\n\n					<ion-option value="dias">\n\n						Días antes\n\n					</ion-option>\n\n					<ion-option value="semanas">\n\n						Semanas antes\n\n					</ion-option>\n\n					<!-- <ion-option value="mujer">\n\n						Personalización\n\n					</ion-option> -->\n\n				</ion-select>\n\n			</ion-item>\n\n		</div>\n\n	\n\n		<div class="citem">\n\n			<div class="icon-center">\n\n				<i class="ico-gray fas fa-align-justify fa-lg"></i>\n\n			</div>\n\n			<ion-item>\n\n					<ion-label floating>Descripción</ion-label>\n\n				<ion-textarea [(ngModel)]="event.description"></ion-textarea>\n\n			</ion-item>\n\n		</div>\n\n		\n\n	</div>\n\n\n\n	<br><br>\n\n	\n\n	<div padding>\n\n		<button ion-button block (click)="crearEvento()">Guardar</button>\n\n	</div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Erick Cutuc\Music\SP1\src\pages\crear-evento\crear-evento.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_events_services__["a" /* EventServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_events_services__["a" /* EventServices */]) === "function" && _c || Object])
    ], CrearEventoPage);
    return CrearEventoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=crear-evento.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaMensualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vista_diaria_vista_diaria__ = __webpack_require__(177);
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
 * Generated class for the VistaMensualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VistaMensualPage = /** @class */ (function () {
    function VistaMensualPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.uid = null;
        this.date = new Date();
        this.monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        this.uid = this.navParams.get('uid');
        // this.op = this.navParams.get('op');
        this.getDaysOfMonth();
    }
    VistaMensualPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VistaMensualPage');
    };
    VistaMensualPage.prototype.getDaysOfMonth = function () {
        // debugger
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        // debugger
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth() && this.date.getFullYear() === new Date().getFullYear()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var i = 0; i < thisNumOfDays; i++) {
            this.daysInThisMonth.push(i + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
        for (var i = 0; i < (6 - lastDayThisMonth); i++) {
            this.daysInNextMonth.push(i + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
                this.daysInNextMonth.push(i);
            }
        }
    };
    VistaMensualPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    VistaMensualPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    VistaMensualPage.prototype.vista_diaria = function (day, month, year) {
        // debugger
        if (day == new Date().getDate().toString()) {
            this.navCtrl.pop();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__vista_diaria_vista_diaria__["a" /* VistaDiariaPage */], { uid: this.uid, op: 1, day: day, month: (month + 1), year: year });
        }
    };
    VistaMensualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vista-mensual',template:/*ion-inline-start:"C:\Users\Erick Cutuc\Music\SP1\src\pages\vista-mensual\vista-mensual.html"*/'<!--\n\n  Generated template for the VistaMensualPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      My Calendar App\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  <div class="all">\n\n    <div class="calendar-header">\n\n      <ion-row class="calendar-month">\n\n        <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n\n        <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n\n        <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <div class="calendar-body">\n\n      <ion-grid>\n\n        <ion-row class="calendar-weekday">\n\n          <ion-col>DOM</ion-col>\n\n          <ion-col>LUN</ion-col>\n\n          <ion-col>MAR</ion-col>\n\n          <ion-col>MIÉ</ion-col>\n\n          <ion-col>JUE</ion-col>\n\n          <ion-col>VIE</ion-col>\n\n          <ion-col>SÁB</ion-col>\n\n        </ion-row>\n\n        <ion-row class="calendar-date">\n\n          <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month" (click)="vista_diaria(lastDay, this.date.getMonth(), currentYear)">{{lastDay}}</ion-col>\n\n          <ion-col col-1 class="everyDay" *ngFor="let day of daysInThisMonth" (click)="vista_diaria(day, this.date.getMonth(), currentYear)">\n\n            <span class="currentDate"  *ngIf="currentDate === day; else otherDate">{{day}}</span>\n\n            <ng-template #otherDate class="otherDate">{{day}}</ng-template>\n\n          </ion-col>\n\n          <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month" (click)="vista_diaria(nextDay, this.date.getMonth(), currentYear)">{{nextDay}}</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Erick Cutuc\Music\SP1\src\pages\vista-mensual\vista-mensual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], VistaMensualPage);
    return VistaMensualPage;
}());

//# sourceMappingURL=vista-mensual.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEventoPageModule", function() { return CrearEventoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crear_evento__["a" /* CrearEventoPage */]),
            ],
        })
    ], CrearEventoPageModule);
    return CrearEventoPageModule;
}());

//# sourceMappingURL=crear-evento.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registro1PageModule", function() { return Registro1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro1__ = __webpack_require__(292);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro1__["a" /* Registro1Page */]),
            ],
        })
    ], Registro1PageModule);
    return Registro1PageModule;
}());

//# sourceMappingURL=registro1.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registro2PageModule", function() { return Registro2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro2__ = __webpack_require__(293);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro2__["a" /* Registro2Page */]),
            ],
        })
    ], Registro2PageModule);
    return Registro2PageModule;
}());

//# sourceMappingURL=registro2.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerEventoPageModule", function() { return VerEventoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ver_evento__ = __webpack_require__(585);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerEventoPageModule = /** @class */ (function () {
    function VerEventoPageModule() {
    }
    VerEventoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ver_evento__["a" /* VerEventoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ver_evento__["a" /* VerEventoPage */]),
            ],
        })
    ], VerEventoPageModule);
    return VerEventoPageModule;
}());

//# sourceMappingURL=ver-evento.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistaDiariaPageModule", function() { return VistaDiariaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vista_diaria__ = __webpack_require__(177);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vista_diaria__["a" /* VistaDiariaPage */]),
            ],
        })
    ], VistaDiariaPageModule);
    return VistaDiariaPageModule;
}());

//# sourceMappingURL=vista-diaria.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistaMensualPageModule", function() { return VistaMensualPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vista_mensual__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VistaMensualPageModule = /** @class */ (function () {
    function VistaMensualPageModule() {
    }
    VistaMensualPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vista_mensual__["a" /* VistaMensualPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vista_mensual__["a" /* VistaMensualPage */]),
            ],
        })
    ], VistaMensualPageModule);
    return VistaMensualPageModule;
}());

//# sourceMappingURL=vista-mensual.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelPageModule", function() { return WelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wel__ = __webpack_require__(586);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wel__["a" /* WelPage */]),
            ],
        })
    ], WelPageModule);
    return WelPageModule;
}());

//# sourceMappingURL=wel.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(473);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_wel_wel_module__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_users_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_events_services__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_registro1_registro1_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_registro2_registro2_module__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_bienvenido_bienvenido_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_vista_diaria_vista_diaria_module__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_crear_evento_crear_evento_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ver_evento_ver_evento_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_vista_mensual_vista_mensual_module__ = __webpack_require__(301);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bienvenido/bienvenido.module#BienvenidoPageModule', name: 'BienvenidoPage', segment: 'bienvenido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crear-evento/crear-evento.module#CrearEventoPageModule', name: 'CrearEventoPage', segment: 'crear-evento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro1/registro1.module#Registro1PageModule', name: 'Registro1Page', segment: 'registro1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro2/registro2.module#Registro2PageModule', name: 'Registro2Page', segment: 'registro2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-evento/ver-evento.module#VerEventoPageModule', name: 'VerEventoPage', segment: 'ver-evento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vista-diaria/vista-diaria.module#VistaDiariaPageModule', name: 'VistaDiariaPage', segment: 'vista-diaria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vista-mensual/vista-mensual.module#VistaMensualPageModule', name: 'VistaMensualPage', segment: 'vista-mensual', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wel/wel.module#WelPageModule', name: 'WelPage', segment: 'wel', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__pages_wel_wel_module__["WelPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_registro1_registro1_module__["Registro1PageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_registro2_registro2_module__["Registro2PageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_bienvenido_bienvenido_module__["BienvenidoPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_vista_diaria_vista_diaria_module__["VistaDiariaPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_vista_mensual_vista_mensual_module__["VistaMensualPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_crear_evento_crear_evento_module__["CrearEventoPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_ver_evento_ver_evento_module__["VerEventoPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__services_events_services__["a" /* EventServices */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__services_users_service__["a" /* UsersService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BienvenidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(161);
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
            selector: 'page-bienvenido',template:/*ion-inline-start:"C:\Users\Erick Cutuc\Music\SP1\src\pages\bienvenido\bienvenido.html"*/'<!--\n\n  Generated template for the BienvenidoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>bienvenido</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<h2>¡Bienvenido!</h2>\n\n\n\n	<h3>Ahora puedes iniciar sesión</h3>\n\n\n\n	<div padding>\n\n    	<button ion-button block (click)="regresar_a_inicio()">Iniciar sesión</button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Erick Cutuc\Music\SP1\src\pages\bienvenido\bienvenido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BienvenidoPage);
    return BienvenidoPage;
}());

//# sourceMappingURL=bienvenido.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerEventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_events_services__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { FirebaseService } from '../../services/firebase.service';
/**
 * Generated class for the VerEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerEventoPage = /** @class */ (function () {
    function VerEventoPage(navCtrl, navParams, eventServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = { id: null,
            title: null,
            fecha: null,
            hora: null,
            descripcion: null,
            direccion: null,
            recordatorio: null,
            repeticion: null };
        this.eid = null;
        this.uid = null;
        this.uid = navParams.get('uid');
        this.eid = navParams.get('eid');
        // this.event = eventsService.getEvent(this.id);
    }
    VerEventoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerEventoPage');
    };
    VerEventoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-evento',template:/*ion-inline-start:"C:\Users\Erick Cutuc\Music\SP1\src\pages\ver-evento\ver-evento.html"*/'<!--\n\n  Generated template for the VerEventoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<ion-item>\n\n		<!-- FALTA MOSTRAR EL COLOR DEL EVENTO QUE ESCOGIÓ -->\n\n		<h1>{{ event.title }}</h1>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<!-- 512*512 -->\n\n	    <ion-avatar item-start>\n\n	      <img src="assets/imgs/reloj.png">\n\n	    </ion-avatar>\n\n	    <h3>{{ event.startDate }}</h3>\n\n	    <h3>{{ event.endDate }}</h3>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<ion-label>Descripción</ion-label>\n\n	</ion-item>\n\n	<ion-item>\n\n		<h3>{{ event.description }}</h3>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<!-- 512*512 -->\n\n	    <ion-avatar item-start>\n\n	      <img src="assets/icon/address.svg">\n\n	    </ion-avatar>\n\n	    <h3>{{ event.location }}</h3>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<!-- 512*512 -->\n\n	    <ion-avatar item-start>\n\n	      <img src="assets/imgs/alarm.png">\n\n	    </ion-avatar>\n\n	    <h3>{{ event.reminder }}</h3>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<!-- 512*512 -->\n\n	    <ion-avatar item-start>\n\n	      <img src="assets/icon/repeat.svg">\n\n	    </ion-avatar>\n\n	    <h3>{{ event.repeat }}</h3>\n\n	</ion-item>\n\n\n\n	<br><br>\n\n	\n\n	<div class="boton">\n\n		<button ion-button icon-only color="light">\n\n	  		<ion-icon name="create"></ion-icon>\n\n		</button>\n\n	</div>\n\n	\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Erick Cutuc\Music\SP1\src\pages\ver-evento\ver-evento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_events_services__["a" /* EventServices */]])
    ], VerEventoPage);
    return VerEventoPage;
}());

//# sourceMappingURL=ver-evento.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-wel',template:/*ion-inline-start:"C:\Users\Erick Cutuc\Music\SP1\src\pages\wel\wel.html"*/'<!--\n\n  Generated template for the WelPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ viewTitle}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Nombre</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.nombre" ></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Correo</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.correo" ></ion-input>\n\n  </ion-item>\n\n  <br><br>\n\n  <button ion-button block>Block Button</button>\n\n  <br><br><br>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Erick Cutuc\Music\SP1\src\pages\wel\wel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]])
    ], WelPage);
    return WelPage;
}());

//# sourceMappingURL=wel.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(161);
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
    // rootPage:any = VistaDiariaPage;
    // rootPage:any = VistaMensualPage;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Erick Cutuc\Music\SP1\src\app\app.html"*/'<ion-nav [root]="rootPage">\n\n    <script type="text/javascript" src="date.js"></script>\n\n    <script type="text/javascript" src="date-de-DE.js"></script>\n\n</ion-nav>\n\n'/*ion-inline-end:"C:\Users\Erick Cutuc\Music\SP1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
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
    function UsersService(afDB, alertCtrl, afAuth) {
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.users = [];
        this.users1 = [];
    }
    UsersService.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider());
    };
    UsersService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
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
        this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then(function (response) {
            console.log("Usuario creado");
        })
            .catch(function (error) {
            console.log("entró");
            console.log('Error: ', error);
        });
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
    UsersService.prototype.dalert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
    ], UsersService);
    return UsersService;
    var _a, _b, _c;
}());

//# sourceMappingURL=users.service.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map