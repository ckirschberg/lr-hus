webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!-- <mat-sidenav-container class=\"example-container\">\n  <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n  <mat-sidenav-content> -->\n    <app-house-plan></app-house-plan>\n  <!-- </mat-sidenav-content>\n</mat-sidenav-container> -->\n\n<!-- <div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div> -->\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calc_service__ = __webpack_require__("../../../../../src/app/calc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__house_plan_house_plan_component__ = __webpack_require__("../../../../../src/app/house-plan/house-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { BricksComponent } from './bricks/bricks.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__house_plan_house_plan_component__["a" /* HousePlanComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav__["a" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_expansion__["a" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_input__["a" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_slide_toggle__["a" /* MatSlideToggleModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__calc_service__["a" /* CalcService */], __WEBPACK_IMPORTED_MODULE_9__angular_material_expansion__["b" /* MatExpansionPanel */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/calc.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalcService = /** @class */ (function () {
    function CalcService() {
    }
    CalcService.prototype.bricksPrice = function (brick, house) {
        // (bricks price - brickStandardPrice) * house's totalBricksNeeded.
        return (brick.price - house.bricksInfo.brickPriceStandard) * house.bricksInfo.totalBricksNeeded;
    };
    CalcService.prototype.calcSquareMeter = function (floor, house) {
        return (floor.price - house.woodFloorInfo.woodFloorsPriceStandard) * house.woodFloorInfo.totalWoodFloorsNeeded;
    };
    CalcService.prototype.calcTotalPrice = function (house) {
        return (house.basePrice + house.bricksInfo.addOnPrice + house.woodFloorInfo.addOnPrice);
    };
    CalcService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CalcService);
    return CalcService;
}());



/***/ }),

/***/ "../../../../../src/app/house-plan/house-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\n  Christian og Michelles 233 kvm trempelhus.\n</h2>\n<mat-tab-group class=\"demo-tab-group\">\n  <mat-tab label=\"Hus\">\n    <div class=\"demo-tab-content\">\n      <h2>Oversigt</h2>\n\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\">\n          \n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Mursten\n              </mat-panel-title>\n              <mat-panel-description *ngIf=\"!house.bricksInfo.selectedBrick\">\n                Vælg mursten\n              </mat-panel-description>\n              <mat-panel-description *ngIf=\"house.bricksInfo.selectedBrick\">\n                {{house.bricksInfo.selectedBrick?.brand}} - {{house.bricksInfo.selectedBrick?.model}} \n              </mat-panel-description>\n              <mat-panel-description *ngIf=\"house.bricksInfo.selectedBrick\">\n                {{calcBricks(house.bricksInfo.selectedBrick) | currency:'DKK '}}\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <mat-slide-toggle color=\"primary\" [(ngModel)]=\"stdFilter\">Vis kun standard</mat-slide-toggle>\n\n            <div class=\"grid-container\">\n              <mat-card *ngFor=\"let brick of bricks\" class=\"example-card grid-item\">\n                <div *ngIf=\"!stdFilter || (stdFilter && brick.standard)\">\n                  <mat-card-header>\n                    <mat-card-title>{{brick.name}}</mat-card-title>\n                    <mat-card-subtitle>{{brick.model}}</mat-card-subtitle>\n                  </mat-card-header>\n                  <img mat-card-image src=\"{{brick.imageUrl}}\" alt=\"Photo of {{brick.name}}\">\n                  <mat-card-content>\n                    <p>\n                      {{brick.description}}\n                    </p>\n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button mat-raised-button class=\"buy-button\" color=\"primary\" \n                    (click)=\"selectBrick(brick)\">\n                      Vælg {{calcBricks(brick) | currency:'DKK '}}\n                    </button>\n                  </mat-card-actions>\n                </div>\n              </mat-card>\n            </div>\n        </mat-expansion-panel>\n\n\n\n\n\n\n\n\n\n        <!-- Trægulve -->\n        <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Trægulve\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!house.woodFloorInfo.selectedWoodFloor\">\n              Vælg trægulve\n            </mat-panel-description>\n            <mat-panel-description *ngIf=\"house.woodFloorInfo.selectedWoodFloor\">\n              {{house.woodFloorInfo.selectedWoodFloor?.brand}} - \n              {{house.woodFloorInfo.selectedWoodFloor?.model}} \n            </mat-panel-description>\n            <mat-panel-description *ngIf=\"house.woodFloorInfo.selectedWoodFloor\">\n              {{calcSquareMeter(house.woodFloorInfo.selectedWoodFloor) | currency:'DKK '}}\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n\n          <p>Her er endnu ingen billeder af trægulve, men de kunne indsættes.</p>\n          <p>Jeres hus indeholder ialt {{ house.woodFloorInfo.totalWoodFloorsNeeded }} kvm trægulv</p>\n          <div class=\"grid-container\">\n            <mat-card *ngFor=\"let woodFloor of woodFloors\" class=\"example-card grid-item\">\n              <div *ngIf=\"!stdFilter || (stdFilter && woodFloor.standard)\">\n                <mat-card-header>\n                  <mat-card-title>{{woodFloor.name}}</mat-card-title>\n                  <mat-card-subtitle>{{woodFloor.model}}</mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image src=\"{{woodFloor.imageUrl}}\" alt=\"Photo of {{woodFloor.name}}\">\n                <mat-card-content>\n                  <p>\n                    {{woodFloor.description}}\n                  </p>\n                </mat-card-content>\n                <mat-card-actions>\n                  <button mat-raised-button class=\"buy-button\" color=\"primary\" \n                  (click)=\"selectWoodFloor(woodFloor)\">\n                    Vælg {{calcSquareMeter(woodFloor) | currency:'DKK '}}\n                  </button>\n                </mat-card-actions>\n              </div>\n            </mat-card>\n          </div>\n        </mat-expansion-panel>\n\n\n        <!-- Fliser -->\n        <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Fliser\n            </mat-panel-title>\n            <mat-panel-description>\n              Vælg fliser\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <p>\n            Her kunne du vælge hvilke fliser der skal ligge på alle flise-gulve i huset. \n          </p>\n          <p>Jeres hus indeholder ialt 35,6 kvm fliser</p>\n        </mat-expansion-panel>\n\n\n        <!-- Trappe -->\n        <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Trappe\n            </mat-panel-title>\n            <mat-panel-description>\n              Vælg trappe\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <p>\n            Detaljer om trappen vælges her, hvis huset er mere end 1 plan.\n          </p>\n        </mat-expansion-panel>\n\n        <!-- Osv -->\n        <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Osv.\n            </mat-panel-title>\n            <mat-panel-description>\n              \n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <p>\n            Vælge ...\n          </p>\n        </mat-expansion-panel>\n\n\n      </mat-accordion>\n\n      <div class=\"result\">\n        Samlet pris kr. {{calc.calcTotalPrice(house) | currency:'DKK '}}\n      </div>\n      <div class=\"result\" >\n        Heraf pris på tillægskontrakt {{calc.calcTotalPrice(house) - house.basePrice | currency:'DKK '}}\n      </div>\n    </div>\n  </mat-tab>\n  \n  <mat-tab label=\"Stue\">\n    <div class=\"demo-tab-content\">\n      Stue\n    </div>  \n  </mat-tab>\n  \n  <mat-tab label=\"Køkken/alrum\">\n    <div class=\"demo-tab-content\">\n      Køkken\n    </div>  \n  </mat-tab>\n  \n  <mat-tab label=\"Bryggers\">\n    <div class=\"demo-tab-content\">\n      Bryggers\n    </div>  \n  </mat-tab>\n\n  <mat-tab label=\"Resultat\">\n    <div class=\"demo-tab-content\">\n      Resultat\n    </div>  \n  </mat-tab>\n\n\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/house-plan/house-plan.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n  border: white 1px !important; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto auto auto;\n  grid-column-gap: 20px;\n  grid-row-gap: 20px; }\n\n.buy-button {\n  bottom: 0px;\n  right: 0px; }\n\nmat-card-actions {\n  bottom: 0px;\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/house-plan/house-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousePlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calc_service__ = __webpack_require__("../../../../../src/app/calc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Pipe, PipeTransform } from '@angular/core';
var HousePlanComponent = /** @class */ (function () {
    function HousePlanComponent(calc) {
        this.calc = calc;
        this.panelOpenState = false;
        this.step = -1;
        this.house = { id: '1', name: 'Christian og Michelles hus på Triumfbuen 17 Hillerød',
            basePrice: 3125612,
            bricksInfo: {
                totalBricksNeeded: 12540,
                brickPriceStandard: 6.5,
                selectedBrick: undefined,
                addOnPrice: 0
            },
            woodFloorInfo: {
                totalWoodFloorsNeeded: 195.7,
                woodFloorsPriceStandard: 300,
                selectedWoodFloor: undefined,
                addOnPrice: 0
            }
        };
        this.bricks = [
            { _id: '1', standard: true, brand: 'Randers Tegl', name: 'Prima Umbra', model: 'RT 476', price: 6.5, unit: 'pr. stk.', imageUrl: 'http://randerstegl.dk/Files/Files/Varekatalog/Mursten/RT-476/RT476_oversigt.jpg', description: 'Sandfarvet blødstrøget ensfarvet sten og 4 facader.' },
            { _id: '2', standard: false, brand: 'Randers Tegl', name: 'Prima Lucca', model: 'RT 102', price: 7.25, unit: 'pr. stk.', imageUrl: 'http://randerstegl.dk/Files/Files/Varekatalog/Mursten/RT-102/RT102_oversigt.jpg', description: 'Gul blødstrøget sten med hvidlig engobe.' },
            { _id: '3', standard: true, brand: 'Randers Tegl', name: 'Prima Lava', model: 'RT 476', price: 6.25, unit: 'pr. stk.', imageUrl: 'http://randerstegl.dk/Files/Files/Varekatalog/Mursten/RT-434/RT434_oversigt.jpg' },
            { _id: '4', standard: false, brand: 'Randers Tegl', name: 'Prima Bari', model: 'RT 475', price: 7.25, unit: 'pr. stk.', imageUrl: 'http://randerstegl.dk/Files/Files/Varekatalog/Mursten/RT-475/RT475_oversigt.jpg' },
            { _id: '5', standard: false, brand: 'Randers Tegl', name: 'Unika Delfi grådæmpet', model: 'RT 517', price: 14, unit: 'pr. stk.', imageUrl: 'http://randerstegl.dk/Files/Files/Varekatalog/Mursten/RT-517/RT517_oversigt.jpg', description: 'Grådæmpet blødstrøget sten med 4 facader. Den specielle farve opnås ved brænding 2 gange. Farven er gennemgående.' },
        ];
        this.woodFloors = [
            { _id: '1', standard: true, brand: 'Timberman', name: '3 stav - Natur eg', model: 'Model 21', price: 300, unit: 'pr. m2', imageUrl: '', description: '' },
            { _id: '2', standard: true, brand: 'Timberman', name: '3 stav - Lys eg', model: 'Model 22', price: 300, unit: 'pr. m2', imageUrl: '', description: '' },
            { _id: '3', standard: true, brand: 'Timberman', name: '3 stav - Mørk eg', model: 'Model 23', price: 300, unit: 'pr. m2', imageUrl: '' },
            { _id: '4', standard: false, brand: 'Timberman', name: 'Wideplank eg', model: 'Model 12B', price: 799, unit: 'pr. m2', imageUrl: '' },
            { _id: '5', standard: false, brand: 'Timberman', name: 'Wideplan eg 2', model: 'XYZ', price: 899, unit: 'pr. m2', imageUrl: '' },
        ];
    }
    HousePlanComponent.prototype.ngOnInit = function () {
    };
    HousePlanComponent.prototype.setStep = function (index) {
        console.log(index);
        this.step = index;
    };
    HousePlanComponent.prototype.calcBricks = function (brick) {
        return this.calc.bricksPrice(brick, this.house);
    };
    HousePlanComponent.prototype.selectBrick = function (brick) {
        this.house.bricksInfo.selectedBrick = brick;
        this.step = 1;
        this.house.bricksInfo.addOnPrice = this.calcBricks(brick);
    };
    HousePlanComponent.prototype.calcSquareMeter = function (floor) {
        return this.calc.calcSquareMeter(floor, this.house);
    };
    HousePlanComponent.prototype.selectWoodFloor = function (floor) {
        this.house.woodFloorInfo.selectedWoodFloor = floor;
        this.step = 2;
        this.house.woodFloorInfo.addOnPrice = this.calcSquareMeter(floor);
    };
    HousePlanComponent.prototype.calcTotalPrice = function () {
        return this.calc.calcTotalPrice(this.house);
    };
    HousePlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-house-plan',
            template: __webpack_require__("../../../../../src/app/house-plan/house-plan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/house-plan/house-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__calc_service__["a" /* CalcService */]])
    ], HousePlanComponent);
    return HousePlanComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map