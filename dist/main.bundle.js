webpackJsonp([1,4],{

/***/ 274:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 274;


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(384);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/epstarr/Documents/GitHub/duelcrest/src/main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'my-app',
            template: "\n  <h1>Choose Your Heroes</h1>\n  <!-- Insert template from hero.component -->\n  <hero></hero>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/epstarr/Documents/GitHub/duelcrest/src/app.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_hero_component__ = __webpack_require__(381);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__components_hero_component__["a" /* HeroComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/epstarr/Documents/GitHub/duelcrest/src/app.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hero_service__ = __webpack_require__(383);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroComponent = (function () {
    //Inject HeroService as heroSerivce private variable
    function HeroComponent(heroService) {
        this.heroService = heroService;
    }
    ;
    //Set heroes property to equal heroes gathered from getHeroes service
    HeroComponent.prototype.getHeroes = function () {
        this.heroes = this.heroService.getHeroes();
    };
    //Call getHeroes on app init
    HeroComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    ;
    HeroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'hero',
            template: __webpack_require__(440),
            styles: [__webpack_require__(438)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */]) === 'function' && _a) || Object])
    ], HeroComponent);
    return HeroComponent;
    var _a;
}());
//# sourceMappingURL=/Users/epstarr/Documents/GitHub/duelcrest/src/hero.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEROES; });
//File containing hero data to be processed through the heroService service
//define HEROES as class Hero array and define data in array
//Allow for export to other areas of the app
var HEROES = [
    { name: 'Abel', hp: 44, atk: 41, spd: 27, def: 25, res: 25, weaponMight: 8 },
    { name: 'Lucina', hp: 44, atk: 41, spd: 27, def: 25, res: 25, weaponMight: 33 }
];
//# sourceMappingURL=/Users/epstarr/Documents/GitHub/duelcrest/src/heroes.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__heroes__ = __webpack_require__(382);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Allow for the injecting of other dependencies into service
var HeroService = (function () {
    function HeroService() {
    }
    //Define the getHeroes service as class Hero and return the list of hero data to what calls getHeroes
    HeroService.prototype.getHeroes = function () {
        return __WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* HEROES */];
    };
    HeroService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], HeroService);
    return HeroService;
}());
//# sourceMappingURL=/Users/epstarr/Documents/GitHub/duelcrest/src/hero.service.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/epstarr/Documents/GitHub/duelcrest/src/environment.js.map

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(179)();
// imports


// module
exports.push([module.i, ".hero-wrapper {\n\twidth: 22%; \n\tmax-width: 150px; \n\tmargin-left: 10px; \n\tfloat: left;\n\tbackground-color: #eee;\n}\n.hero-portrait {\n\twidth: 100%;\n\theight: auto;\n}\n.hero-select {\n\twidth: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-wrapper\">\n<select name=\"heroSelect\" class=\"hero-select\" [(ngModel)]=\"selectedHero1\"> <!-- Take value from selected option and put it in interpolated string selectedHero-->\n    <option *ngFor=\"let h of heroes\" [ngValue]=\"h\">{{h.name}}</option> <!-- For each hero in HEROES, show hero name in option and send the objects to the ngModel -->\n  </select>\n  <div *ngIf=\"selectedHero1\">  <!-- Show content only if selectedHero holds data -->\n  <img src=\"../assets/images/Icon_Portrait_{{selectedHero1.name}}.png\" class=\"hero-portrait\"/>\n  <p>HP: {{selectedHero1.hp}}<br/>\n  Atk: {{selectedHero1.atk + selectedHero1.weaponMight}}</p>\n  </div>\n  </div>\n  \n  <div class=\"hero-wrapper\" >\n  <select name=\"heroSelect\" class=\"hero-select\" [(ngModel)]=\"selectedHero2\"> <!-- Take value from selected option and put it in interpolated string selectedHero-->\n    <option *ngFor=\"let h of heroes\" [ngValue]=\"h\">{{h.name}}</option> <!-- For each hero in HEROES, show hero name in option and send the objects to the ngModel -->\n  </select>\n  <div *ngIf=\"selectedHero2\">  <!-- Show content only if selectedHero holds data -->\n  <img src=\"../assets/images/Icon_Portrait_{{selectedHero2.name}}.png\" class=\"hero-portrait\"/>\n  <p>HP: {{selectedHero2.hp}}<br/>\n  Atk: {{selectedHero2.atk + selectedHero2.weaponMight}}</p>\n  </div>\n  </div>\n   <div class=\"hero-wrapper\" >\n  <select name=\"heroSelect\" class=\"hero-select\" [(ngModel)]=\"selectedHero3\"> <!-- Take value from selected option and put it in interpolated string selectedHero-->\n    <option *ngFor=\"let h of heroes\" [ngValue]=\"h\">{{h.name}}</option> <!-- For each hero in HEROES, show hero name in option and send the objects to the ngModel -->\n  </select>\n  <div *ngIf=\"selectedHero3\">  <!-- Show content only if selectedHero holds data -->\n  <img src=\"../assets/images/Icon_Portrait_{{selectedHero3.name}}.png\" class=\"hero-portrait\"/>\n  <p>HP: {{selectedHero3.hp}}<br/>\n  Atk: {{selectedHero3.atk + selectedHero3.weaponMight}}</p>\n  </div>\n  </div>\n   <div class=\"hero-wrapper\" >\n  <select name=\"heroSelect\" class=\"hero-select\" [(ngModel)]=\"selectedHero4\"> <!-- Take value from selected option and put it in interpolated string selectedHero-->\n    <option *ngFor=\"let h of heroes\" [ngValue]=\"h\">{{h.name}}</option> <!-- For each hero in HEROES, show hero name in option and send the objects to the ngModel -->\n  </select>\n  <div *ngIf=\"selectedHero4\">  <!-- Show content only if selectedHero holds data -->\n  <img src=\"../assets/images/Icon_Portrait_{{selectedHero4.name}}.png\" class=\"hero-portrait\"/>\n  <p>HP: {{selectedHero4.hp}}<br/>\n  Atk: {{selectedHero4.atk + selectedHero4.weaponMight}}</p>\n  </div>\n  </div>\n  <div style=\"clear: both;\"></div>\n  <h3>Full selectedHero1 JSON Data</h3>\n  <p>{{selectedHero1 | json}}</p>"

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(275);


/***/ })

},[453]);
//# sourceMappingURL=main.bundle.js.map