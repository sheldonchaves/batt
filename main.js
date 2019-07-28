(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _screens_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/map/map.component */ "./src/app/screens/map/map.component.ts");
/* harmony import */ var _screens_site_site_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/site/site.component */ "./src/app/screens/site/site.component.ts");
/* harmony import */ var _screens_string_string_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/string/string.component */ "./src/app/screens/string/string.component.ts");
/* harmony import */ var _screens_battery_battery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/battery/battery.component */ "./src/app/screens/battery/battery.component.ts");
/* harmony import */ var _screens_home2_home2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/home2/home2.component */ "./src/app/screens/home2/home2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _screens_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"] },
    { path: 'site', component: _screens_site_site_component__WEBPACK_IMPORTED_MODULE_3__["SiteComponent"] },
    { path: 'string', component: _screens_string_string_component__WEBPACK_IMPORTED_MODULE_4__["StringComponent"] },
    { path: 'battery', component: _screens_battery_battery_component__WEBPACK_IMPORTED_MODULE_5__["BatteryComponent"] },
    { path: 'home2', component: _screens_home2_home2_component__WEBPACK_IMPORTED_MODULE_6__["Home2Component"] },
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

// [
//   { path: 'crisis-center', component: CrisisListComponent },
//   { path: 'hero/:id',      component: HeroDetailComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }
// ];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"dash\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/config.service */ "./src/app/services/config.service.ts");
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
    function AppComponent(configService) {
        this.configService = configService;
        this.configService.loadConfig();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_svg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/svg.service */ "./src/app/services/svg.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _screens_screens_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/screens.module */ "./src/app/screens/screens.module.ts");
/* harmony import */ var _components_visual_visual_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/visual/visual.module */ "./src/app/components/visual/visual.module.ts");
/* harmony import */ var _services_battery_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/battery.service */ "./src/app/services/battery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _screens_screens_module__WEBPACK_IMPORTED_MODULE_9__["ScreensModule"],
                _components_visual_visual_module__WEBPACK_IMPORTED_MODULE_10__["VisualModule"]
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"],
                _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"],
                _services_svg_service__WEBPACK_IMPORTED_MODULE_6__["SvgService"],
                _services_battery_service__WEBPACK_IMPORTED_MODULE_11__["BatteryService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/general/configurator/configurator.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/general/configurator/configurator.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"content\">\n  <p-panel header=\"Geral\">\n    <div class=\"form-input-comp\">\n      <p-checkbox label=\"Mostrar indicadores no topo\" binary=\"true\" [(ngModel)]=\"configService.data.chartsOnTop\"></p-checkbox>\n    </div>\n\n    <div class=\"form-input-comp\">\n      <label>Titulo: </label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configService.data.title\">\n    </div>\n\n    <div class=\"form-input-comp\">\n        <p-colorPicker format=\"hex\" (onChange)=\"configService.calcAllColors()\" [(ngModel)]=\"configService.data.colorChart\"></p-colorPicker>\n        <input type=\"text\" class=\"form-control\" (input)=\"configService.calcAllColors()\" [(ngModel)]=\"configService.data.colorChart\">\n        <label>Cor indicarador valor</label>\n    </div>\n    <div class=\"form-input-comp\">\n        <p-colorPicker format=\"hex\" (onChange)=\"configService.calcAllColors()\"  [(ngModel)]=\"configService.data.colorChartText\"></p-colorPicker>\n        <input type=\"text\" class=\"form-control\" (input)=\"configService.calcAllColors()\" [(ngModel)]=\"configService.data.colorChartText\">\n        <label>Cor indicarador texto</label>\n    </div> \n\n  </p-panel>\n\n  <p-panel header=\"Visual\">\n\n    <div class=\"form-input-comp\">\n      <p-colorPicker format=\"hex\" (onChange)=\"configService.calcAllColors()\" [(ngModel)]=\"configService.data.colorBgChart\"></p-colorPicker>\n      <input type=\"text\" class=\"form-control\" (input)=\"configService.calcAllColors()\" [(ngModel)]=\"configService.data.colorBgChart\">\n      <label>Cor background indicadores</label>\n    </div>\n\n    <div class=\"form-input-comp\">\n      <p-colorPicker format=\"hex\" (onChange)=\"configService.calcAllColors()\" [(ngModel)]=\"configService.data.colorHeader\"></p-colorPicker>\n      <input type=\"text\" class=\"form-control\" (input)=\"configService.calcAllColors()\" [(ngModel)]=\"configService.data.colorHeader\">\n      <label>Cor header</label>\n    </div>\n\n    <div class=\"form-input-comp\">\n        <p-colorPicker format=\"hex\" (onChange)=\"configService.calcAllColors()\" [(ngModel)]=\"configService.data.colorTitle\"></p-colorPicker>\n        <input type=\"text\" class=\"form-control\" (input)=\"configService.calcAllColors()\" [(ngModel)]=\"configService.data.colorTitle\">\n        <label>Cor titulo header</label>\n      </div>\n    \n\n    <div class=\"form-input-comp\">\n      <p-colorPicker format=\"hex\" (onChange)=\"configService.calcAllColors()\" [(ngModel)]=\"configService.data.colorBg\"></p-colorPicker>\n      <input type=\"text\" class=\"form-control\" (input)=\"configService.calcAllColors()\" [(ngModel)]=\"configService.data.colorBg\">\n      <label>Cor background</label>\n    </div>\n\n    <div class=\"form-input-comp\">\n        <p-slider (onChange)=\"configService.calcAllColors()\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"configService.data.darkness\"></p-slider>\n        <input type=\"text\" class=\"form-control\" (input)=\"configService.calcAllColors()\" [(ngModel)]=\"configService.data.darkness\">\n        <label>Background Degrade</label>\n    </div>\n\n    <p-inputSwitch [(ngModel)]=\"configService.data.chartsOnTop\"></p-inputSwitch>\n\n  </p-panel>\n\n  <p-panel header=\"Agentes\">\n      \n    </p-panel>\n\n    <!-- <roundbtn class=\"col\"  (click)=\"saveConfig()\" [icon]=\"'fa-floppy-o'\"></roundbtn> -->\n\n    <hr>\n\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"saveConfig()\" >Save</button>\n      </div>\n\n</span>\n"

/***/ }),

/***/ "./src/app/components/general/configurator/configurator.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/general/configurator/configurator.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-open {\n  list-style: none;\n  text-align: center;\n  display: inline-block;\n  z-index: 999;\n  margin-bottom: 0; }\n\np-panel {\n  width: 100%;\n  margin: 0 10px;\n  font-size: .7em; }\n\n.form-input-comp {\n  border: 1px solid #d7d7d7;\n  text-align: left;\n  padding: 3px 0 3px 3px; }\n\n.form-input-comp input {\n  width: inherit;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZWxkb24vNC1wcm9qZWN0cy9jbGllbnQtbW9uaXRvci9wb2Mvc3JjL2FwcC9jb21wb25lbnRzL2dlbmVyYWwvY29uZmlndXJhdG9yL2NvbmZpZ3VyYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsZUFBYztFQUNkLGdCQUFlLEVBQ2hCOztBQU9EO0VBQ0UsMEJBQXlCO0VBQ3pCLGlCQUFnQjtFQUNoQix1QkFBc0IsRUFFdkI7O0FBRUQ7RUFDRSxlQUFjO0VBQ2Qsc0JBQXFCLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsL2NvbmZpZ3VyYXRvci9jb25maWd1cmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LW9wZW4ge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgei1pbmRleDogOTk5O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5wLXBhbmVse1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogLjdlbTtcbn1cblxuLmNvbnRlbnQge1xuICAvLyBkaXNwbGF5OiBmbGV4O1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmZvcm0taW5wdXQtY29tcHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZDdkNztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogM3B4IDAgM3B4IDNweDtcbiAgLy8gdHJhbnNmb3JtOiBzY2FsZSguOSk7XG59XG5cbi5mb3JtLWlucHV0LWNvbXAgaW5wdXR7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8vIC5uYXYtb3BlbiBsaSB7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gfVxuXG4vLyAubmF2LW9wZW4gYSB7XG4vLyAgICAgZm9udC1zaXplOiAyLjRlbTtcbi8vICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwLjA1KSk7XG4vLyAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbi8vICAgICBtYXJnaW46IDRweCAxMHB4O1xuLy8gICAgIHdpZHRoOiA2MHB4O1xuLy8gICAgIGhlaWdodDogNjBweDtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgaW5zZXQgMHB4IDJweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gfVxuXG4vLyAubmF2LW9wZW4+bGk+YSB7XG4vLyAgIHBhZGRpbmc6IDBweDtcbi8vIH1cblxuLy8gLm5hdi1vcGVuIGE6aG92ZXIge1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIGNvbG9yOiAjNTU1O1xuLy8gICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xuLy8gfVxuXG4vLyAubmF2LW9wZW4gYTphY3RpdmUge1xuLy8gICB0ZXh0LXNoYWRvdzogMXB4IDBweCAwcHggI2U3ZTdlNztcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICBjb2xvcjogI0ZGN0YyNDtcbi8vICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbi8vICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggI2FhYSwgaW5zZXQgMHB4IDJweCAzcHggI2ZmZjtcbi8vIH1cblxuLy8gLm5hdi1vcGVuIGE6YWN0aXZlIGkge1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIHRvcDogMXB4O1xuLy8gfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/general/configurator/configurator.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/general/configurator/configurator.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfiguratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguratorComponent", function() { return ConfiguratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfiguratorComponent = /** @class */ (function () {
    function ConfiguratorComponent(configService) {
        this.configService = configService;
    }
    ConfiguratorComponent.prototype.ngOnInit = function () {
    };
    ConfiguratorComponent.prototype.saveConfig = function () {
        this.configService.configurating = !this.configService.configurating;
        this.configService.saveConfig();
    };
    ConfiguratorComponent.prototype.cancel = function () {
        this.configService.configurating = !this.configService.configurating;
        this.configService.loadConfig();
    };
    ConfiguratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'configurator',
            template: __webpack_require__(/*! ./configurator.component.html */ "./src/app/components/general/configurator/configurator.component.html"),
            styles: [__webpack_require__(/*! ./configurator.component.scss */ "./src/app/components/general/configurator/configurator.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ConfiguratorComponent);
    return ConfiguratorComponent;
}());



/***/ }),

/***/ "./src/app/components/general/general.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/general/general.module.ts ***!
  \******************************************************/
/*! exports provided: GeneralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _configurator_configurator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configurator/configurator.component */ "./src/app/components/general/configurator/configurator.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GeneralModule = /** @class */ (function () {
    function GeneralModule() {
    }
    GeneralModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _configurator_configurator_component__WEBPACK_IMPORTED_MODULE_3__["ConfiguratorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["PanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["InputSwitchModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["SliderModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["SidebarModule"]
            ], exports: [
                _configurator_configurator_component__WEBPACK_IMPORTED_MODULE_3__["ConfiguratorComponent"]
            ]
        })
    ], GeneralModule);
    return GeneralModule;
}());



/***/ }),

/***/ "./src/app/components/visual/agent/agent.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/visual/agent/agent.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box {{data.status?.name}}\" >\n\n  <div class=\"status-call\" *ngIf=\"data.status.name == 'callin' || data.status.name == 'callout'\">\n    <div class=\"in-call\" [style.color]='data.status?.color'>\n      <i class=\"icon fa fa-phone\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"call\" [class.in]=\"data.status.name == 'callin'\" [style.color]='data.status?.color'>\n      <i class=\"icon fa fa-arrow-up fac-bounce\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n\n  <div class=\"status-pause\" *ngIf=\"data.status.name == 'pause'\">\n    <div class=\"in-call\" >\n      <!-- <i class=\"fa fa-pause-circle-o\" aria-hidden=\"true\"></i> -->\n      <i class=\"icon fa fa-bolt\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n\n\n  <div class=\"status-offline\" *ngIf=\"data.status.name == 'offline'\">\n    <div class=\"in-call\" >\n      <i class=\"icon fa fa-ban\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n\n\n  <div class=\"title\">\n    {{data.name}}\n    <!-- {{data.status.name}} -->\n    <i *ngIf=\"data.status.name == 'pause'\" class=\"status-icon fa fa-bolt\" aria-hidden=\"true\"></i>\n    <i *ngIf=\"data.status.name == 'offline'\" class=\"status-icon fa fa-thermometer-full\" aria-hidden=\"true\"></i>\n\n  </div>\n\n\n\n  <!-- <div class=\"badges\">\n    <div class=\"badge-wrapper\">\n      <div class=\"badge\">\n        <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n    <div class=\"badge-wrapper\">\n      <div class=\"badge badge-2\">\n        <i class=\"fa fa-thermometer-full\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n    <div class=\"badge-wrapper\">\n      <div class=\"badge badge-3\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n  </div> -->\n\n\n  <div class=\"data\" >\n\n\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">Voltage: <span class=\"badge badge-light\">10</span></li>\n            <li class=\"list-group-item\">Temperature: <span class=\"badge badge-light\">20V</span></li>\n            <li class=\"list-group-item\">IR: <span class=\"badge badge-light\">10001</span></li>\n          </ul>\n\n  </div>\n\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -20 190 190\" class=\"user\">\n    <linearGradient id=\"gradient-horizontal{{data.status?.name}}\">\n      <stop offset=\"0%\"   [attr.stop-color]=\"data.status?.color\" stop-opacity=\"1.0\" />\n      <stop offset=\"100%\" [attr.stop-color]=\"data.status?.color\" stop-opacity=\"0.8\" />\n    </linearGradient>\n\n    <!-- <path [attr.fill]=\"'url(#gradient-horizontal' + data.status?.name + ')'\" [attr.d]=\"svgs.selectedUserIcon\"/> -->\n\n\n    <g [attr.fill]=\"'url(#gradient-horizontal' + data.status?.name + ')'\">\n      <!--\n      -->\n        <path d=\"M0,122.9c0,8.8,7.2,16,16,16h157.9c8.8,0,16-7.2,16-16V46.8H0V122.9z\"/>\n      <path d=\"M173.9,9.4h-10.6V8.6V2.9V0h-36v9.4H61.2V3.9V0H25.3v9.4H16c-8.8,0-16,7.2-16,16V41h189.9V25.4\n      C189.9,16.6,182.7,9.4,173.9,9.4z M54.2,28.1h-7.1v7.1h-5.8v-7.1h-7.1v-5.8h7.1v-7.1h5.8v7.1h7.1V28.1z M155.4,28.1h-20v-5.8h20\n      V28.1z\"/>\n\n\n      <!-- <path d=\"M172.6,0H17.3C7.8,0,0,7.8,0,17.3v98.4c0,9.5,7.8,17.3,17.3,17.3h155.4c9.5,0,17.3-7.8,17.3-17.3V17.3\n\tC189.9,7.8,182.1,0,172.6,0z M40.6,117.4H14.7c-3.3,0-6-2.8-6-6c0-3.3,2.8-6,6-6h25.9c3.3,0,6,2.8,6,6\n\tC46.6,114.6,43.8,117.4,40.6,117.4z M40.6,98.4H14.7c-3.3,0-6-2.8-6-6c0-3.3,2.8-6,6-6h25.9c3.3,0,6,2.8,6,6\n\tC46.6,95.6,43.8,98.4,40.6,98.4z M40.6,79.4H14.7c-3.3,0-6-2.8-6-6c0-3.3,2.8-6,6-6h25.9c3.3,0,6,2.8,6,6\n\tC46.6,76.7,43.8,79.4,40.6,79.4z M40.6,60.4H14.7c-3.3,0-6-2.8-6-6s2.8-6,6-6h25.9c3.3,0,6,2.8,6,6C46.6,57.7,43.8,60.4,40.6,60.4z\n\t M85.5,117.4H59.6c-3.3,0-6-2.8-6-6c0-3.3,2.8-6,6-6h25.9c3.3,0,6,2.8,6,6C91.5,114.6,88.7,117.4,85.5,117.4z M85.5,98.4H59.6\n\tc-3.3,0-6-2.8-6-6c0-3.3,2.8-6,6-6h25.9c3.3,0,6,2.8,6,6C91.5,95.6,88.7,98.4,85.5,98.4z M85.5,79.4H59.6c-3.3,0-6-2.8-6-6\n\tc0-3.3,2.8-6,6-6h25.9c3.3,0,6,2.8,6,6C91.5,76.7,88.7,79.4,85.5,79.4z M85.5,60.4H59.6c-3.3,0-6-2.8-6-6s2.8-6,6-6h25.9\n\tc3.3,0,6,2.8,6,6C91.5,57.7,88.7,60.4,85.5,60.4z M130.3,117.4h-25.9c-3.3,0-6-2.8-6-6c0-3.3,2.8-6,6-6h25.9c3.3,0,6,2.8,6,6\n\tC136.4,114.6,133.6,117.4,130.3,117.4z M130.3,98.4h-25.9c-3.3,0-6-2.8-6-6c0-3.3,2.8-6,6-6h25.9c3.3,0,6,2.8,6,6\n\tC136.4,95.6,133.6,98.4,130.3,98.4z M130.3,79.4h-25.9c-3.3,0-6-2.8-6-6c0-3.3,2.8-6,6-6h25.9c3.3,0,6,2.8,6,6\n\tC136.4,76.7,133.6,79.4,130.3,79.4z M130.3,60.4h-25.9c-3.3,0-6-2.8-6-6s2.8-6,6-6h25.9c3.3,0,6,2.8,6,6\n\tC136.4,57.7,133.6,60.4,130.3,60.4z M175.2,117.4h-25.9c-3.3,0-6-2.8-6-6c0-3.3,2.8-6,6-6h25.9c3.3,0,6,2.8,6,6\n\tC181.3,114.6,178.5,117.4,175.2,117.4z M175.2,98.4h-25.9c-3.3,0-6-2.8-6-6c0-3.3,2.8-6,6-6h25.9c3.3,0,6,2.8,6,6\n\tC181.3,95.6,178.5,98.4,175.2,98.4z M175.2,79.4h-25.9c-3.3,0-6-2.8-6-6c0-3.3,2.8-6,6-6h25.9c3.3,0,6,2.8,6,6\n\tC181.3,76.7,178.5,79.4,175.2,79.4z M175.2,60.4h-25.9c-3.3,0-6-2.8-6-6s2.8-6,6-6h25.9c3.3,0,6,2.8,6,6\n\tC181.3,57.7,178.5,60.4,175.2,60.4z\"/> -->\n    </g>\n\n    <!-- <path [attr.fill]=\"'url(#gradient-horizontal' + data.status?.name + ')'\" [attr.d]=\"svgs.userIcons[data.svgId]\"/> -->\n  </svg>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/visual/agent/agent.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/visual/agent/agent.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  display: inline-block;\n  width: 150px;\n  height: 150px;\n  position: relative;\n  margin: 10px;\n  font-family: \"oswald\";\n  /* margin-top: 10px; */\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n  margin: 20px 55px;\n  transition: all 0.5s ease; }\n  .box .icon {\n    display: block;\n    margin-top: 0.45em;\n    opacity: .3; }\n  .box .data {\n    font-size: .85em; }\n  .box .data .list-group {\n      margin-top: 6px; }\n  .box .data .list-group .list-group-item {\n        background: transparent;\n        display: flex;\n        justify-content: space-between;\n        padding: .1em .8em; }\n  .box .data .list-group .list-group-item:last-child {\n          border: none; }\n  .box .data .list-group .list-group-item .badge {\n          line-height: inherit;\n          padding: 0.1em 0.4em; }\n  .box .user {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -9;\n    -webkit-filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.3));\n            filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.3));\n    transition: all 0.5s ease; }\n  .box.offline .title,\n  .box.offline .data {\n    color: #fff; }\n  .box .title {\n    display: block;\n    text-align: center;\n    margin-top: 15%; }\n  .box .badges {\n    position: absolute;\n    bottom: 0;\n    width: 100px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  .box .badges .badge {\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n      background-color: #CDCDCD;\n      position: relative;\n      padding-left: 4.25px;\n      padding-top: 4.25px;\n      margin: 0 2px; }\n  .box .status-pause {\n    position: absolute;\n    font-size: 59px;\n    left: 50%;\n    top: 20%;\n    opacity: .6;\n    color: #fff;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  .box .status-offline {\n    position: absolute;\n    font-size: 59px;\n    left: 50%;\n    top: 20%;\n    opacity: .6;\n    color: #fff;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  .box .status-call {\n    position: absolute;\n    left: 20px; }\n  .box .status-call .in-call {\n      font-size: 40px;\n      position: absolute;\n      -webkit-transform: rotate(37deg);\n              transform: rotate(37deg);\n      top: 14px; }\n  .box .status-call .call {\n      font-size: 23px;\n      position: absolute;\n      top: -7px; }\n  .box .status-call .call.in {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg); }\n  .box .badge-wrapper {\n    display: inline-block; }\n  .box .fa-heart {\n    color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZWxkb24vNC1wcm9qZWN0cy9jbGllbnQtbW9uaXRvci9wb2Mvc3JjL2FwcC9jb21wb25lbnRzL3Zpc3VhbC9hZ2VudC9hZ2VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFxQjtFQUNyQixhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLHVCQUF1QjtFQUl2Qiw4QkFBcUI7VUFBckIsc0JBQXFCO0VBQ3JCLGtCQUFpQjtFQUVqQiwwQkFBeUIsRUF5SzFCO0VBdkxEO0lBaUJJLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsWUFBVyxFQUNaO0VBcEJIO0lBdUJJLGlCQUFnQixFQXFCakI7RUE1Q0g7TUF5Qk0sZ0JBQWUsRUFrQmhCO0VBM0NMO1FBMkJRLHdCQUF1QjtRQUN2QixjQUFhO1FBQ2IsK0JBQThCO1FBQzlCLG1CQUFrQixFQVluQjtFQTFDUDtVQWlDVSxhQUFZLEVBQ2I7RUFsQ1Q7VUFxQ1UscUJBQW9CO1VBQ3BCLHFCQUFvQixFQUNyQjtFQXZDVDtJQWdESSxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFFBQU87SUFDUCxZQUFXO0lBQ1gsNkRBQWdEO1lBQWhELHFEQUFnRDtJQUNoRCwwQkFBeUIsRUFDMUI7RUF0REg7O0lBOEVNLFlBQVcsRUFDWjtFQS9FTDtJQW9HSSxlQUFjO0lBQ2QsbUJBQWtCO0lBRWxCLGdCQUFlLEVBQ2hCO0VBeEdIO0lBMkdJLG1CQUFrQjtJQUNsQixVQUFTO0lBQ1QsYUFBWTtJQUNaLFVBQVM7SUFDVCxvQ0FBMkI7WUFBM0IsNEJBQTJCLEVBbUI1QjtFQWxJSDtNQWtITSxZQUFVO01BQ1YsYUFBVztNQUNYLG1CQUFrQjtNQUNsQiwwQkFBeUI7TUFDekIsbUJBQWtCO01BQ2xCLHFCQUFvQjtNQUNwQixvQkFBbUI7TUFDbkIsY0FBYSxFQUNkO0VBMUhMO0lBcUlJLG1CQUFrQjtJQUNsQixnQkFBZTtJQUNmLFVBQVM7SUFDVCxTQUFRO0lBQ1IsWUFBVztJQUNYLFlBQVc7SUFDWCxvQ0FBMkI7WUFBM0IsNEJBQTJCLEVBQzVCO0VBNUlIO0lBK0lJLG1CQUFrQjtJQUNsQixnQkFBZTtJQUNmLFVBQVM7SUFDVCxTQUFRO0lBRVIsWUFBVztJQUNYLFlBQVc7SUFDWCxvQ0FBMkI7WUFBM0IsNEJBQTJCLEVBQzVCO0VBdkpIO0lBMEpJLG1CQUFrQjtJQUNsQixXQUFVLEVBaUJYO0VBNUtIO01BOEpNLGdCQUFlO01BQ2YsbUJBQWtCO01BQ2xCLGlDQUF3QjtjQUF4Qix5QkFBd0I7TUFDeEIsVUFBUyxFQUNWO0VBbEtMO01BcUtNLGdCQUFlO01BQ2YsbUJBQWtCO01BQ2xCLFVBQVMsRUFJVjtFQTNLTDtRQXlLUSxrQ0FBeUI7Z0JBQXpCLDBCQUF5QixFQUMxQjtFQTFLUDtJQWtMSSxzQkFBcUIsRUFDdEI7RUFuTEg7SUFxTEksV0FBUyxFQUNWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aXN1YWwvYWdlbnQvYWdlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcbiAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cbiAgLy8gYmFja2dyb3VuZDogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpO1xuXG5cbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICBtYXJnaW46IDIwcHggNTVweDtcblxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuXG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAwLjQ1ZW07XG4gICAgb3BhY2l0eTogLjM7XG4gIH1cblxuICAuZGF0YXtcbiAgICBmb250LXNpemU6IC44NWVtO1xuICAgIC5saXN0LWdyb3Vwe1xuICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgLmxpc3QtZ3JvdXAtaXRlbXtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogLjFlbSAuOGVtO1xuXG4gICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFkZ2V7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgcGFkZGluZzogMC4xZW0gMC40ZW07XG4gICAgICAgIH1cblxuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnVzZXJ7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTk7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDE1cHggcmdiYSgwLDAsMCwuMykpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIH1cblxuICAvLyAmOjpiZWZvcmV7XG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgIHRvcDogMDtcbiAgLy8gICAvLyBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcbiAgLy8gICBsZWZ0OiAwO1xuICAvLyAgIGNvbG9yOiAjZmZmO1xuICAvLyAgIC8vIG9wYWNpdHk6IC4yO1xuICAvLyAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgLy8gICBjb250ZW50OiBcIlxcRjAwN1wiO1xuICAvLyAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gIC8vICAgd2lkdGg6IDEwMCU7XG4gIC8vICAgaGVpZ2h0OiAxMDAlO1xuICAvLyAgIHotaW5kZXg6IC05O1xuICAvLyAgIHRleHQtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgwLDAsMCwuMyk7XG4gIC8vIH1cblxuICAmLm9mZmxpbmUge1xuICAgIC8vIG9wYWNpdHk6IC43O1xuICAgIC8vIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG5cbiAgICAudGl0bGUsXG4gICAgLmRhdGF7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLnVzZXJ7XG4gICAgICAvLyBmaWxsOiNkY2RjZGM7XG4gICAgfVxuXG4gICAgLmRhdGF7XG4gICAgfVxuICB9XG5cbiAgJi5jYWxsaW4sXG4gICYuY2FsbG91dCB7XG4gICAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuXG5cbiAgLnN0YXR1cy1pY29ue1xuICAgIC8vIGZvbnQtc2l6ZTogLjhlbTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgLy8gY29sb3I6ICMwMDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIG1hcmdpbi10b3A6IDU1JTtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gIH1cblxuICAuYmFkZ2Vze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cbiAgICAuYmFkZ2V7XG4gICAgICB3aWR0aDoyMHB4O1xuICAgICAgaGVpZ2h0OjIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RDRENEO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1sZWZ0OiA0LjI1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogNC4yNXB4O1xuICAgICAgbWFyZ2luOiAwIDJweDtcbiAgICB9XG5cbiAgICAuYmFkZ2UtMntcbiAgICAgIC8vbWFyZ2luLWxlZnQ6IC03cHg7XG4gICAgfVxuICAgIC5iYWRnZS0ze1xuICAgICAgLy8gbWFyZ2luLWxlZnQ6IC0xNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5zdGF0dXMtcGF1c2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogNTlweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAyMCU7XG4gICAgb3BhY2l0eTogLjY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG5cbiAgLnN0YXR1cy1vZmZsaW5le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDU5cHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMjAlO1xuICAgIC8vIHRvcDogLTYlO1xuICAgIG9wYWNpdHk6IC42O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuXG4gIC5zdGF0dXMtY2FsbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjBweDtcblxuICAgIC5pbi1jYWxse1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzdkZWcpO1xuICAgICAgdG9wOiAxNHB4O1xuICAgIH1cblxuICAgIC5jYWxse1xuICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtN3B4O1xuICAgICAgJi5pbntcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cblxuICAuYmFkZ2Utd3JhcHBlcntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmZhLWhlYXJ0e1xuICAgIGNvbG9yOnJlZDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/visual/agent/agent.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/visual/agent/agent.component.ts ***!
  \************************************************************/
/*! exports provided: AgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentComponent", function() { return AgentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/agent */ "./src/app/models/agent.ts");
/* harmony import */ var src_app_services_svg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/svg.service */ "./src/app/services/svg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgentComponent = /** @class */ (function () {
    function AgentComponent(svgs) {
        this.svgs = svgs;
    }
    AgentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_agent__WEBPACK_IMPORTED_MODULE_1__["Agent"])
    ], AgentComponent.prototype, "data", void 0);
    AgentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agent',
            template: __webpack_require__(/*! ./agent.component.html */ "./src/app/components/visual/agent/agent.component.html"),
            styles: [__webpack_require__(/*! ./agent.component.scss */ "./src/app/components/visual/agent/agent.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_svg_service__WEBPACK_IMPORTED_MODULE_2__["SvgService"]])
    ], AgentComponent);
    return AgentComponent;
}());



/***/ }),

/***/ "./src/app/components/visual/chart-donut/chart-donut.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/visual/chart-donut/chart-donut.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"box-chart\" [class.side-bar]='data.sidebar'>\n  <p  class=\"title\" [style.color]='configService.data.colorChartText' >{{data.label}}</p>\n\n      <!-- [style.max-width]=\"data.sidebar?'inherit':'150px'\"\n      [style.max-height]=\"data.sidebar?'inherit':'45px'\" -->\n\n  <svg class=\"donut-wrapper\" viewBox=\"0 0 150 150\">\n    <circle class=\"donut-bg\" cx=\"75\" cy=\"75\" r=\"45\" ></circle>\n    <circle class=\"donut-chart\" cx=\"75\" cy=\"75\" r=\"45\"\n            [style.stroke]='data.customColor?data.customColor:configService.data.colorChart'\n            [style.stroke-dashoffset]=\"getDonutChartValue()\" >\n    </circle>\n    <text class=\"value\"\n          text-anchor=\"middle\"\n          x=\"75\"\n          [style.fill]='configService.data.colorChartText'\n          y=\"-65\">{{data.textValue?data.textValue:data.value + (data.postText?data.postText:\"\")}}\n    </text>\n  </svg>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/visual/chart-donut/chart-donut.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/visual/chart-donut/chart-donut.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-chart {\n  margin-right: 10px;\n  font-family: \"oswald\"; }\n  .box-chart .donut-wrapper {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    height: 20vh;\n    display: block;\n    position: relative;\n    z-index: 20;\n    margin: 0 auto;\n    max-width: 100%;\n    -webkit-filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.4));\n            filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.4)); }\n  .box-chart .donut-wrapper .donut-chart {\n      fill: transparent;\n      stroke-width: 15px;\n      stroke-dasharray: 282.6px;\n      stroke-dashoffset: 282.6px;\n      transition: stroke-dashoffset .5s ease-in; }\n  .box-chart .donut-wrapper .donut-bg {\n      fill: transparent;\n      stroke: rgba(255, 255, 255, 0.9);\n      stroke-width: 3px; }\n  .box-chart .donut-wrapper .value {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg); }\n  .box-chart .title {\n    margin: 10px 0 0 0;\n    z-index: 50;\n    color: white;\n    text-align: center;\n    font-size: 20px;\n    text-transform: uppercase;\n    line-height: 1.1em;\n    min-height: 45px;\n    min-width: 150px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .box-chart .value {\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 100;\n    margin: 25px 0;\n    font-size: 22px; }\n  .box-chart.side-bar {\n    background: rgba(0, 0, 0, 0.2); }\n  .box-chart.side-bar .title {\n      min-height: inherit;\n      min-width: inherit;\n      line-height: inherit;\n      padding-top: 10px;\n      font-size: 25px; }\n  .box-chart.side-bar .donut-wrapper {\n      height: 20vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZWxkb24vNC1wcm9qZWN0cy9jbGllbnQtbW9uaXRvci9wb2Mvc3JjL2FwcC9jb21wb25lbnRzL3Zpc3VhbC9jaGFydC1kb251dC9jaGFydC1kb251dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkM7RUFDQyxtQkFBa0I7RUFDbEIsc0JBQXFCLEVBc0Z0QjtFQXhGQTtJQUtHLGtDQUF5QjtZQUF6QiwwQkFBeUI7SUFDekIsYUF2Qlc7SUF3QlgsZUFBYztJQUNkLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsZUFBYztJQUNkLGdCQUFlO0lBQ2YsNkRBQW9EO1lBQXBELHFEQUFvRCxFQXVCckQ7RUFuQ0Y7TUFnQkssa0JBekJ5QjtNQTBCekIsbUJBQWtCO01BQ2xCLDBCQTlCc0M7TUErQnRDLDJCQXJCNEQ7TUFzQjVELDBDQUF5QyxFQUMxQztFQXJCSjtNQXlCSyxrQkFBaUI7TUFDakIsaUNBaENnQztNQWlDaEMsa0JBQWlCLEVBRWxCO0VBN0JKO01BZ0NLLGlDQUF3QjtjQUF4Qix5QkFBd0IsRUFDekI7RUFqQ0o7SUF5Q0csbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsMEJBQXlCO0lBQ3pCLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLGNBQWE7SUFDYix3QkFBdUI7SUFDdkIsb0JBQW1CLEVBR3BCO0VBdkRGO0lBeURHLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsVUFBUztJQUNULFNBQVE7SUFDUix5Q0FBZ0M7WUFBaEMsaUNBQWdDO0lBQ2hDLGFBQVk7SUFDWixlQUFjO0lBQ2QsZ0JBQWUsRUFDaEI7RUFqRUY7SUFzRUcsK0JBQTZCLEVBZ0I5QjtFQXRGRjtNQXlFSyxvQkFBbUI7TUFDbkIsbUJBQWtCO01BQ2xCLHFCQUFvQjtNQUVwQixrQkFBaUI7TUFDakIsZ0JBQWUsRUFFaEI7RUFoRko7TUFvRkssYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aXN1YWwvY2hhcnQtZG9udXQvY2hhcnQtZG9udXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAvLyBET05VVCBDSEFSVCBTVFlMRVNcblxuIC8vIGNoYXJ0IHNpemVcbiAkY2hhcnQtaDogMjB2aDtcbiAkY2hhcnQtc3Ryb2tlLXdpZHRoOiAyNXB4O1xuICRjaGFydC1yYWRpbzogNDVweDtcblxuIC8vIGNpcmN1bWZlcmVuY2VcbiAkY2hhcnQtY2lyY3VtZmVyZW5jZTogKDYuMjggKiAkY2hhcnQtcmFkaW8pO1xuXG4gLy8gZG9udXQgY2hhcnQgY29sb3JzXG4gJGNoYXJ0LWhvbGUtY29sb3I6IHRyYW5zcGFyZW50OyAvLyBkb25vdXQgaG9sZVxuIC8vICAkY2hhcnQtYmdjLXN1Y2Nlc3M6ICMwMGIwOWE7IC8vIG1haW4gYmFja2dyb3VuZFxuIC8vICAkY2hhcnQtc3Ryb2tlLXN1Y2Nlc3M6IHJnYmEoI0ZGQzcwMCwgMSk7IC8vIGZyb250IHN0cm9rZVxuICRjaGFydC1zdHJva2UtYmFjay1zdWNjZXNzOiByZ2JhKCNmZmYsIC45KTsgLy8gYmFjayBzdHJva2VcblxuIC8vIHBlcmNlbnRhZ2UgdG8gc2hvd1xuICRwZXJjZW50YWdlOiAwOyAvLyBzZXQgdGhlIHBlcmNlbnRhZ2UgdG8gc2hvd1xuICRwZXJjZW50YWdlLXRvLXNob3c6ICgoMTAwLSRwZXJjZW50YWdlKSokY2hhcnQtY2lyY3VtZmVyZW5jZSkvMTAwO1xuXG4gLmJveC1jaGFydHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcblxuICAuZG9udXQtd3JhcHBlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICBoZWlnaHQ6ICRjaGFydC1oO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpKTtcblxuICAgIC8vIGRvbnV0IGZyb250XG4gICAgLmRvbnV0LWNoYXJ0IHtcbiAgICAgIGZpbGw6ICRjaGFydC1ob2xlLWNvbG9yO1xuICAgICAgc3Ryb2tlLXdpZHRoOiAxNXB4O1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogJGNoYXJ0LWNpcmN1bWZlcmVuY2U7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogJHBlcmNlbnRhZ2UtdG8tc2hvdztcbiAgICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IC41cyBlYXNlLWluO1xuICAgIH1cblxuICAgIC8vIGRvbnV0IGJhY2tcbiAgICAuZG9udXQtYmcge1xuICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgICBzdHJva2U6ICRjaGFydC1zdHJva2UtYmFjay1zdWNjZXNzO1xuICAgICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG5cbiAgICB9XG5cbiAgICAudmFsdWV7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgfVxuXG4gIH1cblxuXG5cblxuICAudGl0bGV7XG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgIHotaW5kZXg6IDUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDEuMWVtO1xuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblxuICB9XG4gIC52YWx1ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG1hcmdpbjogMjVweCAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG5cbiAgJi5zaWRlLWJhcntcblxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjIpO1xuXG4gICAgLnRpdGxle1xuICAgICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICAgIG1pbi13aWR0aDogaW5oZXJpdDtcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcblxuICAgIH1cblxuICAgIC5kb251dC13cmFwcGVyIHtcblxuICAgICAgaGVpZ2h0OiAyMHZoO1xuICAgIH1cbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/visual/chart-donut/chart-donut.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/visual/chart-donut/chart-donut.component.ts ***!
  \************************************************************************/
/*! exports provided: ChartDonutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDonutComponent", function() { return ChartDonutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as $ from 'jquery';
// import * as SVG from 'svg.js';
var ChartDonutComponent = /** @class */ (function () {
    function ChartDonutComponent(configService) {
        this.configService = configService;
        this.donutChartValue = 50;
        this.maxValue = 100;
    }
    ChartDonutComponent.prototype.ngOnInit = function () {
        if (this.data.maxValue) {
            this.maxValue = this.data.maxValue;
        }
        // let donutChartPercentage = Number(this.data.value);
    };
    ChartDonutComponent.prototype.getDonutChartValue = function () {
        var donutChartRadio = 45;
        return this.donutChartValue = (((this.maxValue - Number(this.data.value)) * (6.28 * Number(donutChartRadio))) / this.maxValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChartDonutComponent.prototype, "data", void 0);
    ChartDonutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart-donut',
            template: __webpack_require__(/*! ./chart-donut.component.html */ "./src/app/components/visual/chart-donut/chart-donut.component.html"),
            styles: [__webpack_require__(/*! ./chart-donut.component.scss */ "./src/app/components/visual/chart-donut/chart-donut.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ChartDonutComponent);
    return ChartDonutComponent;
}());



/***/ }),

/***/ "./src/app/components/visual/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/visual/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- [style.background]='configService.backHeader' -->\n\n<div  class=\"dash-header\"\n      [class.configurating]='configService.configurating'\n      >\n  <span class=\"line1 row\">\n    <roundbtn class=\"col\" (click)=\"goHome()\" [icon]=\"'fa-home'\"></roundbtn>\n    <!-- <roundbtn class=\"col\" (click)=\"toggleConfig()\" [icon]=\"'fa-cog'\"></roundbtn> -->\n    <!-- <roundbtn class=\"col\" *ngIf=\"configService.configurating\" (click)=\"toggleConfig()\" [icon]=\"'fa-times-circle'\"></roundbtn> -->\n    <!-- <roundbtn class=\"col\" *ngIf=\"configService.configurating\" (click)=\"saveConfig()\" [icon]=\"'fa-floppy-o'\"></roundbtn> -->\n    <h3 class=\"col\" [style.color]='configService.data.colorTitle'>{{configService.data.title}}</h3>\n    <span class=\"logo col\">GENIUS-SOFTWARE </span>\n  </span>\n  <!-- <span class=\"panels\" [class.opened]='configService.configurating'>\n  </span> -->\n\n</div>\n\n<p-sidebar [(visible)]=\"configService.configurating\" [dismissible]=\"false\">\n  <configurator></configurator>\n</p-sidebar>\n"

/***/ }),

/***/ "./src/app/components/visual/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/visual/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  display: inline-block; }\n\n.dash-header {\n  height: 5em;\n  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.25);\n  align-items: center;\n  width: 100%;\n  text-align: center;\n  transition: all .5s ease;\n  font-family: \"oswald\";\n  background: #fff;\n  position: fixed;\n  z-index: 9;\n  top: 0; }\n\n.line1 {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%; }\n\n.panels {\n  height: 0;\n  overflow: hidden;\n  display: block;\n  transition: all .5s ease; }\n\n.panels.opened {\n  z-index: 99;\n  min-height: 40vh;\n  height: auto;\n  background-color: rgba(0, 0, 0, 0.3);\n  padding-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZWxkb24vNC1wcm9qZWN0cy9jbGllbnQtbW9uaXRvci9wb2Mvc3JjL2FwcC9jb21wb25lbnRzL3Zpc3VhbC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXFCLEVBRXRCOztBQUVEO0VBRUUsWUFBVztFQUdYLGtEQUFpRDtFQUNqRCxvQkFBbUI7RUFDbkIsWUFBVztFQUNYLG1CQUFrQjtFQUNsQix5QkFBd0I7RUFFeEIsc0JBQXFCO0VBRXJCLGlCQUFnQjtFQUVoQixnQkFBZTtFQUNmLFdBQVU7RUFDVixPQUFNLEVBQ1A7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsOEJBQTZCO0VBQzdCLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2I7O0FBT0Q7RUFFRSxVQUFTO0VBQ1QsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCx5QkFBd0IsRUFDekI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDVixxQ0FBbUM7RUFDbkMscUJBQW9CLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aXN1YWwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvLyBmaWx0ZXI6IGludmVydCgxMDAlKTtcbn1cblxuLmRhc2gtaGVhZGVyIHtcbiAgLy8gbWluLWhlaWdodDogMTAwcHg7XG4gIGhlaWdodDogNWVtO1xuXG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGRkZGRiwgI0NEQ0RDRCk7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDQwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcblxuICBmb250LWZhbWlseTogXCJvc3dhbGRcIjtcblxuICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTtcbiAgdG9wOiAwO1xufVxuXG4ubGluZTEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGFzaC1oZWFkZXIuY29uZmlndXJhdGluZyB7XG4gIC8vICAgbWluLWhlaWdodDogMzAwcHg7XG5cbn1cblxuLnBhbmVscyB7XG4gIC8vICAgcGFkZGluZzogMCAyMHB4O1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XG59XG5cbi5wYW5lbHMub3BlbmVkIHtcbiAgei1pbmRleDogOTk7XG4gIG1pbi1oZWlnaHQ6IDQwdmg7XG4gIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/visual/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/visual/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(configService, router) {
        this.configService = configService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleConfig = function () {
        this.configService.configurating = !this.configService.configurating;
        // if (!this.configService.configurating){
        //   this.configService.loadConfig();
        // }
    };
    HeaderComponent.prototype.goHome = function () {
        this.router.navigateByUrl('/');
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/visual/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/visual/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/visual/indicators/indicators.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/visual/indicators/indicators.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-chart-donut *ngFor='let graphic of graphics' [data]=\"graphic\"></app-chart-donut> -->\n\n<div class=\"row\">\n  <div class=\"col\" *ngFor='let graphic of graphics'>\n      <app-chart-donut [data]=\"graphic\"></app-chart-donut>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/visual/indicators/indicators.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/visual/indicators/indicators.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-chart-donut {\n  display: inline-block;\n  margin: 0 auto;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZWxkb24vNC1wcm9qZWN0cy9jbGllbnQtbW9uaXRvci9wb2Mvc3JjL2FwcC9jb21wb25lbnRzL3Zpc3VhbC9pbmRpY2F0b3JzL2luZGljYXRvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUI7RUFDckIsZUFBYztFQUNkLG1CQUFrQixFQUVuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlzdWFsL2luZGljYXRvcnMvaW5kaWNhdG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1jaGFydC1kb251dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/visual/indicators/indicators.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/visual/indicators/indicators.component.ts ***!
  \**********************************************************************/
/*! exports provided: IndicatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsComponent", function() { return IndicatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndicatorsComponent = /** @class */ (function () {
    function IndicatorsComponent() {
        this.graphics = [
            { id: '1', label: 'H2 sensor', value: 900, maxValue: 1000, postText: "ppm", customColor: "#C7F464" },
            { id: '2', label: 'Humidade', value: 80, postText: "%", customColor: "#F8CA00" },
            { id: '3', label: 'Temp Sensor', value: 30, maxValue: 40, postText: "℃", customColor: "#C7F464" },
            { id: '4', label: 'Alertas Criticos', value: 3, maxValue: 10, customColor: "#ED303C" }
        ];
    }
    IndicatorsComponent.prototype.showDelay = function () {
        this.graphics[7].value += 3;
        this.graphics[6].value += 1;
    };
    IndicatorsComponent.prototype.ngOnInit = function () {
        // setInterval(() => this.showDelay(), 1000);
        // var draw = SVG('drawing').size(300, 300);
        // // var rect = draw.rect(100, 100).attr({ fill: '#f06' });
        // var inputPerc = 100;
        // var r=20;
        // var c = Math.PI*(r*2);
        // var pct = ((100-inputPerc)/100)*c;
        // var circle1 = draw.circle();
        // circle1.attr({
        //   'fill': '#f06',
        //   'fill-opacity': 0,
        //   'stroke': '#f06',
        //   'stroke-width': 20,
        //   'stroke-opacity': 0.5,
        //   'cx': "100",
        //   'cy': "100",
        //   'r': r,
        //   'stroke-dasharray': "85 15",
        //   'stroke-dashoffset': "25"
        // });
        // var dash1 = circle1.attr("fill");
        // console.log(circle1 );
        // <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" stroke-width="3" stroke-dasharray="85 15" stroke-dashoffset="0"></circle>
        /*
    
           var r = parseFloat($circle.attr('r'));
            var c = Math.PI*(r*2);
    
            if (val < 0) { val = 0;}
            if (val > 100) { val = 100;}
    
            var pct = ((100-val)/100)*c;
    
    
    
            var draw = document.querySelector('#bg');
    
            let bg:any = $("#bg")[0];
            let bar:any = $("#bar")[0];
            let bar2:any = $("#bar2")[0];
    
            $("#bg").attr("stroke-dasharray",bg.getTotalLength());
            $("#bar").attr("stroke-dasharray",bar.getTotalLength());
            $("#bar2").attr("stroke-dasharray",bar2.getTotalLength());
    
    
            $("#bar").css({ strokeDashoffset: pct});
            $("#bar2").css({ strokeDashoffset: pct});
    
            //$('#cont').attr('data-pct',val);
    
    
    
            var red = Math.floor((val*2.55));
            var green = Math.floor(255-( val*1.55 ) );
    
            var color = 'rgb(' + red + ','+ green +',0)';
    
            $("#bar").css({ stroke:color});
            $("#bar2").css({ stroke:color});
    
            $('#perc').text(val);
    
        */
        // , 'fill-opacity': 0.5
        // , stroke: '#000'
        // , 'stroke-width': 10
        // circle.cx = 55;
        // <circle id="bg" r="60" cx="55%" cy="50%"></circle>
        // <circle id="bar" r="60" cx="55%" cy="50%"></circle>
        // <circle id="bar2" r="60" cx="55%" cy="50%"></circle>
    };
    IndicatorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-indicators',
            template: __webpack_require__(/*! ./indicators.component.html */ "./src/app/components/visual/indicators/indicators.component.html"),
            styles: [__webpack_require__(/*! ./indicators.component.scss */ "./src/app/components/visual/indicators/indicators.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndicatorsComponent);
    return IndicatorsComponent;
}());



/***/ }),

/***/ "./src/app/components/visual/roundbtn/roundbtn.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/visual/roundbtn/roundbtn.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"round-btn\">\n  <a href=\"#\">\n    <i [className]=\"'fa ' + icon\" aria-hidden=\"true\"></i>\n  </a>\n</span>\n\n\n"

/***/ }),

/***/ "./src/app/components/visual/roundbtn/roundbtn.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/visual/roundbtn/roundbtn.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round-btn {\n  position: relative;\n  display: inline-block; }\n\n.round-btn a {\n  font-size: 2.4em;\n  text-shadow: 1px 1px rgba(255, 255, 255, 0.3);\n  text-decoration: none;\n  display: block;\n  background-image: linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.05));\n  color: rgba(0, 0, 0, 0.3);\n  margin: 4px 10px;\n  width: 60px;\n  height: 60px;\n  position: relative;\n  text-align: center;\n  line-height: 1.4em;\n  border-radius: 50%;\n  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), inset 0px 2px 3px rgba(255, 255, 255, 0.6); }\n\n.round-btn > a {\n  padding: 0px; }\n\n.round-btn a:hover {\n  text-decoration: none;\n  color: #555;\n  background: #e7e7e7; }\n\n.round-btn a:active {\n  text-shadow: 1px 0px 0px #e7e7e7;\n  text-decoration: none;\n  color: #FF7F24;\n  background: #f7f7f7;\n  box-shadow: 0px 1px 2px #aaa, inset 0px 2px 3px #fff; }\n\n.round-btn a:active i {\n  position: relative;\n  top: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZWxkb24vNC1wcm9qZWN0cy9jbGllbnQtbW9uaXRvci9wb2Mvc3JjL2FwcC9jb21wb25lbnRzL3Zpc3VhbC9yb3VuZGJ0bi9yb3VuZGJ0bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsOENBQTZDO0VBQzdDLHNCQUFxQjtFQUNyQixlQUFjO0VBQ2QseUZBQXdGO0VBQ3hGLDBCQUF5QjtFQUN6QixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsd0ZBQXVGLEVBQ3hGOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLFlBQVc7RUFDWCxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxpQ0FBZ0M7RUFDaEMsc0JBQXFCO0VBQ3JCLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIscURBQW9ELEVBQ3JEOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFNBQVEsRUFDVCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlzdWFsL3JvdW5kYnRuL3JvdW5kYnRuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucm91bmQtYnRuIGEge1xuICBmb250LXNpemU6IDIuNGVtO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwLjA1KSk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbjogNHB4IDEwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS40ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgaW5zZXQgMHB4IDJweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4ucm91bmQtYnRuPmEge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5yb3VuZC1idG4gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1NTU7XG4gIGJhY2tncm91bmQ6ICNlN2U3ZTc7XG59XG5cbi5yb3VuZC1idG4gYTphY3RpdmUge1xuICB0ZXh0LXNoYWRvdzogMXB4IDBweCAwcHggI2U3ZTdlNztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0ZGN0YyNDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggI2FhYSwgaW5zZXQgMHB4IDJweCAzcHggI2ZmZjtcbn1cblxuLnJvdW5kLWJ0biBhOmFjdGl2ZSBpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/visual/roundbtn/roundbtn.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/visual/roundbtn/roundbtn.component.ts ***!
  \******************************************************************/
/*! exports provided: RoundbtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundbtnComponent", function() { return RoundbtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoundbtnComponent = /** @class */ (function () {
    function RoundbtnComponent() {
    }
    RoundbtnComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RoundbtnComponent.prototype, "icon", void 0);
    RoundbtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'roundbtn',
            template: __webpack_require__(/*! ./roundbtn.component.html */ "./src/app/components/visual/roundbtn/roundbtn.component.html"),
            styles: [__webpack_require__(/*! ./roundbtn.component.scss */ "./src/app/components/visual/roundbtn/roundbtn.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RoundbtnComponent);
    return RoundbtnComponent;
}());



/***/ }),

/***/ "./src/app/components/visual/visual.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/visual/visual.module.ts ***!
  \****************************************************/
/*! exports provided: VisualModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualModule", function() { return VisualModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agent_agent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agent/agent.component */ "./src/app/components/visual/agent/agent.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/visual/header/header.component.ts");
/* harmony import */ var _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indicators/indicators.component */ "./src/app/components/visual/indicators/indicators.component.ts");
/* harmony import */ var _chart_donut_chart_donut_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart-donut/chart-donut.component */ "./src/app/components/visual/chart-donut/chart-donut.component.ts");
/* harmony import */ var _roundbtn_roundbtn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roundbtn/roundbtn.component */ "./src/app/components/visual/roundbtn/roundbtn.component.ts");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../general/general.module */ "./src/app/components/general/general.module.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var VisualModule = /** @class */ (function () {
    function VisualModule() {
    }
    VisualModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _agent_agent_component__WEBPACK_IMPORTED_MODULE_2__["AgentComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_4__["IndicatorsComponent"],
                _chart_donut_chart_donut_component__WEBPACK_IMPORTED_MODULE_5__["ChartDonutComponent"],
                _roundbtn_roundbtn_component__WEBPACK_IMPORTED_MODULE_6__["RoundbtnComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _general_general_module__WEBPACK_IMPORTED_MODULE_7__["GeneralModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["SidebarModule"]
            ], exports: [
                _agent_agent_component__WEBPACK_IMPORTED_MODULE_2__["AgentComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_4__["IndicatorsComponent"],
                _chart_donut_chart_donut_component__WEBPACK_IMPORTED_MODULE_5__["ChartDonutComponent"],
                _roundbtn_roundbtn_component__WEBPACK_IMPORTED_MODULE_6__["RoundbtnComponent"],
            ]
        })
    ], VisualModule);
    return VisualModule;
}());



/***/ }),

/***/ "./src/app/models/agent.ts":
/*!*********************************!*\
  !*** ./src/app/models/agent.ts ***!
  \*********************************/
/*! exports provided: Agent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Agent", function() { return Agent; });
var Agent = /** @class */ (function () {
    function Agent(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    return Agent;
}());



/***/ }),

/***/ "./src/app/models/config.ts":
/*!**********************************!*\
  !*** ./src/app/models/config.ts ***!
  \**********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    return Config;
}());



/***/ }),

/***/ "./src/app/models/indicator.ts":
/*!*************************************!*\
  !*** ./src/app/models/indicator.ts ***!
  \*************************************/
/*! exports provided: Indicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicator", function() { return Indicator; });
var Indicator = /** @class */ (function () {
    function Indicator(id, label, value, maxValue, textValue, sidebar, customColor) {
        this.id = id;
        this.label = label;
        this.value = value;
        this.maxValue = maxValue;
        this.textValue = textValue;
        this.sidebar = sidebar;
        this.customColor = customColor;
    }
    return Indicator;
}());



/***/ }),

/***/ "./src/app/models/stringbat.ts":
/*!*************************************!*\
  !*** ./src/app/models/stringbat.ts ***!
  \*************************************/
/*! exports provided: StringBatt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringBatt", function() { return StringBatt; });
var StringBatt = /** @class */ (function () {
    function StringBatt(name, voltage, mmprops, unprops) {
        this.mmprops = [];
        this.unprops = [];
        this.name = name;
        this.voltage = voltage;
        this.mmprops = mmprops;
        this.unprops = unprops;
    }
    return StringBatt;
}());



/***/ }),

/***/ "./src/app/screens/battery/battery.component.html":
/*!********************************************************!*\
  !*** ./src/app/screens/battery/battery.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  battery works!\n</p>\n"

/***/ }),

/***/ "./src/app/screens/battery/battery.component.scss":
/*!********************************************************!*\
  !*** ./src/app/screens/battery/battery.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvYmF0dGVyeS9iYXR0ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/screens/battery/battery.component.ts":
/*!******************************************************!*\
  !*** ./src/app/screens/battery/battery.component.ts ***!
  \******************************************************/
/*! exports provided: BatteryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryComponent", function() { return BatteryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BatteryComponent = /** @class */ (function () {
    function BatteryComponent() {
    }
    BatteryComponent.prototype.ngOnInit = function () {
    };
    BatteryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-battery',
            template: __webpack_require__(/*! ./battery.component.html */ "./src/app/screens/battery/battery.component.html"),
            styles: [__webpack_require__(/*! ./battery.component.scss */ "./src/app/screens/battery/battery.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BatteryComponent);
    return BatteryComponent;
}());



/***/ }),

/***/ "./src/app/screens/home2/home2.component.html":
/*!****************************************************!*\
  !*** ./src/app/screens/home2/home2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" dash\">\n\n  <app-header></app-header>\n\n  <div class=\"row dash-graphs\" [class.fix-bottom]='!configService.data.chartsOnTop' [style.background]='configService.backIndicators'>\n    <div class=\"col-md-12\">\n      <app-indicators></app-indicators>\n\n    </div>\n  </div>\n\n  <div class=\"row no-gutters dash-body\" [style.background]='configService.backDash' >\n    <div class=\"agents col\">\n      <app-agent *ngFor='let agent of agents' [data]=\"agent\">\n      </app-agent>\n    </div>\n    <div class=\"col-3 col-lg-3 col-xl-2 \">\n      <app-chart-donut *ngFor='let graphic of graphics' [data]=\"graphic\"></app-chart-donut>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/screens/home2/home2.component.scss":
/*!****************************************************!*\
  !*** ./src/app/screens/home2/home2.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvaG9tZTIvaG9tZTIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/screens/home2/home2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/screens/home2/home2.component.ts ***!
  \**************************************************/
/*! exports provided: Home2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2Component", function() { return Home2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_models_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/indicator */ "./src/app/models/indicator.ts");
/* harmony import */ var src_app_models_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/agent */ "./src/app/models/agent.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Home2Component = /** @class */ (function () {
    function Home2Component(configService) {
        this.configService = configService;
        this.agents = [];
        this.graphics = [
            new src_app_models_indicator__WEBPACK_IMPORTED_MODULE_2__["Indicator"](9, "Voltagem", 24, 36, "220v", true, "#AEE239"),
            new src_app_models_indicator__WEBPACK_IMPORTED_MODULE_2__["Indicator"](10, "Carga total", 30, 100, "60h", true, "#F8CA00"),
            new src_app_models_indicator__WEBPACK_IMPORTED_MODULE_2__["Indicator"](11, "Descarregadas", 1, 100, "", true, "#FF00AA"),
        ];
        this.configService.loadConfig();
    }
    Home2Component.prototype.ngOnInit = function () {
        // this.configService.saveConfig();
        // setInterval(() => this.updateAgents(), 10000);
        this.generateAgents();
    };
    Home2Component.prototype.generateAgents = function () {
        this.agents = [];
        for (var index = 0; index < 15; index++) {
            var statusId = Math.round(Math.random() * (this.configService.statusList.length - 1));
            var agent = new src_app_models_agent__WEBPACK_IMPORTED_MODULE_3__["Agent"](index, "Site " + index, this.configService.statusList[statusId]);
            agent.svgId = Math.round(Math.random() * 3);
            this.agents.push(agent);
        }
    };
    Home2Component.prototype.updateAgents = function () {
        for (var index = 0; index < 30; index++) {
            var statusId = Math.round(Math.random() * (this.configService.statusList.length - 1));
            // let status = this.configService.statusList[statusId];
            var agent = this.agents[index];
            if (Math.round(Math.random() * 3) == 0) {
                agent.status = this.configService.statusList[statusId];
            }
        }
    };
    Home2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home2',
            template: __webpack_require__(/*! ./home2.component.html */ "./src/app/screens/home2/home2.component.html"),
            styles: [__webpack_require__(/*! ./home2.component.scss */ "./src/app/screens/home2/home2.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], Home2Component);
    return Home2Component;
}());



/***/ }),

/***/ "./src/app/screens/map/map.component.html":
/*!************************************************!*\
  !*** ./src/app/screens/map/map.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map\">\n\n  <div class=\"site\" (click)=\"gotoSite()\">\n    <span class=\"fa-stack fa-2x\">\n      <i class=\"fa fa-refresh fa-spin fa-fw fa-stack-2x\" ></i>\n      <i class=\"fa fa-circle fa-stack-2x\"></i>\n      <i class=\"fa fa-bolt fa-stack-1x fa-inverse\"></i>\n    </span>\n    <div class=\"title\">\n        GSW-Office SP\n    </div>\n\n  </div>\n\n  <img class=\"svg\" src=\"/assets/map.svg\" alt=\"\">\n\n  <!-- <app-mapsvg class=\"svg\"></app-mapsvg> -->\n</div>\n"

/***/ }),

/***/ "./src/app/screens/map/map.component.scss":
/*!************************************************!*\
  !*** ./src/app/screens/map/map.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  position: relative;\n  width: 100%;\n  background: #fff; }\n  .map .svg {\n    width: 100%; }\n  .map .svg .fil3 {\n      stroke: #fff; }\n  .map img path {\n    stroke: #fff; }\n  .map .site {\n    position: absolute;\n    left: 30%;\n    top: 50%;\n    text-align: center;\n    -webkit-filter: drop-shadow(3px 3px 7px rgba(0, 0, 0, 0.5));\n            filter: drop-shadow(3px 3px 7px rgba(0, 0, 0, 0.5)); }\n  .map .site .fa-bolt {\n      color: #F9D423; }\n  .map .site .fa-refresh {\n      color: #F9D423; }\n  .map .site .title {\n      text-align: center;\n      background: #000;\n      color: #fff;\n      padding: 3px 10px 1px;\n      border-radius: 12px;\n      font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZWxkb24vNC1wcm9qZWN0cy9jbGllbnQtbW9uaXRvci9wb2Mvc3JjL2FwcC9zY3JlZW5zL21hcC9tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGlCQUFnQixFQTRDakI7RUEvQ0Q7SUFNSSxZQUFXLEVBTVo7RUFaSDtNQVVNLGFBQVksRUFDYjtFQVhMO0lBZ0JNLGFBQVksRUFDYjtFQWpCTDtJQXVCSSxtQkFBa0I7SUFDbEIsVUFBUztJQUNULFNBQVE7SUFDUixtQkFBa0I7SUFDbEIsNERBQStDO1lBQS9DLG9EQUErQyxFQW1CaEQ7RUE5Q0g7TUErQk0sZUFBYyxFQUNmO0VBaENMO01BbUNNLGVBQWMsRUFDZjtFQXBDTDtNQXVDTSxtQkFBa0I7TUFDbEIsaUJBQWdCO01BQ2hCLFlBQVc7TUFDWCxzQkFBcUI7TUFDckIsb0JBQW1CO01BQ25CLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgLnN2Z3tcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5maWwze1xuXG4gICAgICBzdHJva2U6ICNmZmY7XG4gICAgfVxuICB9XG5cbiAgaW1ne1xuICAgIHBhdGh7XG4gICAgICBzdHJva2U6ICNmZmY7XG4gICAgfVxuICB9XG5cblxuXG4gIC5zaXRle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCA3cHggcmdiYSgwLDAsMCwuNSkpO1xuXG5cbiAgICAuZmEtYm9sdHtcbiAgICAgIGNvbG9yOiAjRjlENDIzO1xuICAgIH1cblxuICAgICAuZmEtcmVmcmVzaHtcbiAgICAgIGNvbG9yOiAjRjlENDIzO1xuICAgIH1cblxuICAgIC50aXRsZXtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDNweCAxMHB4IDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/screens/map/map.component.ts":
/*!**********************************************!*\
  !*** ./src/app/screens/map/map.component.ts ***!
  \**********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent(configService, router) {
        this.configService = configService;
        this.router = router;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.configService.data.title = "Battery Center";
    };
    MapComponent.prototype.gotoSite = function () {
        this.router.navigateByUrl('/site');
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/screens/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/screens/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/screens/screens.module.ts":
/*!*******************************************!*\
  !*** ./src/app/screens/screens.module.ts ***!
  \*******************************************/
/*! exports provided: ScreensModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreensModule", function() { return ScreensModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_visual_visual_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/visual/visual.module */ "./src/app/components/visual/visual.module.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "./src/app/screens/map/map.component.ts");
/* harmony import */ var _site_site_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site/site.component */ "./src/app/screens/site/site.component.ts");
/* harmony import */ var _string_string_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./string/string.component */ "./src/app/screens/string/string.component.ts");
/* harmony import */ var _battery_battery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./battery/battery.component */ "./src/app/screens/battery/battery.component.ts");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/spinner */ "./node_modules/primeng/spinner.js");
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _home2_home2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home2/home2.component */ "./src/app/screens/home2/home2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ScreensModule = /** @class */ (function () {
    function ScreensModule() {
    }
    ScreensModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], _site_site_component__WEBPACK_IMPORTED_MODULE_6__["SiteComponent"], _string_string_component__WEBPACK_IMPORTED_MODULE_7__["StringComponent"], _battery_battery_component__WEBPACK_IMPORTED_MODULE_8__["BatteryComponent"], _home2_home2_component__WEBPACK_IMPORTED_MODULE_11__["Home2Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_visual_visual_module__WEBPACK_IMPORTED_MODULE_4__["VisualModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                primeng_inputswitch__WEBPACK_IMPORTED_MODULE_9__["InputSwitchModule"],
                primeng_spinner__WEBPACK_IMPORTED_MODULE_10__["SpinnerModule"]
            ],
            exports: [
                _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
                _site_site_component__WEBPACK_IMPORTED_MODULE_6__["SiteComponent"]
            ]
        })
    ], ScreensModule);
    return ScreensModule;
}());



/***/ }),

/***/ "./src/app/screens/site/site.component.html":
/*!**************************************************!*\
  !*** ./src/app/screens/site/site.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- [style.background]='configService.backIndicators' -->\n<div class=\"card \" >\n  <div class=\"card-header primary color1\">\n\n    <div class=\"row no-gutters\">\n      <div class=\"col-12 col-md-6\"><h5>Network:</h5> <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> 10.100.10.10 ({{configService.data.title}})</div>\n      <div class=\"col-12 col-md-6\"><h5>BMS-ID:</h5> <i class=\"fa fa-hashtag\" aria-hidden=\"true\"></i> BMS-9000 - 0009801</div>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters\">\n    <div class=\"col-12 col-md-6\">\n      <ul class=\"list-group m-2\">\n        <!-- <li class=\"list-group-item\">BMS-ID: <span class=\"badge badge-secondary\">BMS-9000 - 0009801</span></li> -->\n        <li class=\"list-group-item\">Monobloco/Célula: <span class=\"badge badge-secondary\">Marathon M12V90F</span></li>\n        <li class=\"list-group-item\">H2 sensor:<span class=\"badge badge-secondary\">900ppm</span></li>\n        <li class=\"list-group-item\">Humidade: <span class=\"badge badge-secondary\">80%</span></li>\n        <li class=\"list-group-item\">Temp Sensor: <span class=\"badge badge-secondary\">34</span></li>\n        <li class=\"list-group-item\">Cut-off: <span class=\"badge badge-secondary\">10.40V</span></li>\n      </ul>\n    </div>\n    <div class=\"col-12 col-md-3\">\n\n\n      <ul class=\"list-group m-2\">\n        <li class=\"list-group-item color1 text-white\">Entradas <i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></li>\n        <li class=\"list-group-item\">Balizador Torre: <span class=\"badge badge-success\">ON</span></li>\n        <li class=\"list-group-item\">Porta Central: <span class=\"badge badge-danger\">OFF</span></li>\n        <li class=\"list-group-item\">Iluminação Interna:<span class=\"badge badge-danger\">OFF</span></li>\n        <li class=\"list-group-item list-group-item-secondary\">Sensor4: <span class=\"badge badge-secondary\">- - -</span></li>\n      </ul>\n\n    </div>\n    <div class=\"col-12 col-md-3\">\n\n      <ul class=\"list-group m-2\">\n        <li class=\"list-group-item color1 text-white\">Saidas <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></li>\n        <li class=\"list-group-item\">Reset Data:\n          <span class=\"row-spinner\">\n\n            <p-spinner [(ngModel)]=\"value1\" [min]=\"0\" [max]=\"100\" [step]=\"5\" [size]=\"2\"></p-spinner>\n            <p-inputSwitch [(ngModel)]=\"checked1\"></p-inputSwitch>\n          </span>\n        </li>\n        <li class=\"list-group-item\">Ar Cond. Aux:\n          <span class=\"row-spinner\">\n\n            <p-spinner [(ngModel)]=\"value2\" [min]=\"0\" [max]=\"100\" [step]=\"5\" [size]=\"2\"></p-spinner>\n            <p-inputSwitch [(ngModel)]=\"checked2\"></p-inputSwitch>\n          </span>\n        </li>\n        <li class=\"list-group-item\">Exaustor:\n          <span class=\"row-spinner\">\n\n            <p-spinner [(ngModel)]=\"value3\" [min]=\"0\" [max]=\"100\" [step]=\"5\" [size]=\"2\"></p-spinner>\n            <p-inputSwitch [(ngModel)]=\"checked\"></p-inputSwitch>\n          </span>\n        </li>\n      </ul>\n\n\n\n    </div>\n  </div>\n\n  <div class=\"card-footer text-muted\">\n    <div class=\"row\">\n      <div class=\"col\">ActiveDCCurrent: <span class=\"badge badge-success\">0000.3A</span></div>\n      <div class=\"col\">CurrentElectricalOperation: <span class=\"badge badge-success\">FLOAT</span></div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n<div class=\"row no-gutters\">\n\n\n\n\n  <div class=\"col-12 col-md-3 p-2 \" *ngFor=\"let str of service.strings\">\n    <div class=\"card string mb-lg-0\" (click)=\"gotoString(str)\">\n      <div class=\"card-body\">\n        <h3 class=\"string-name text-uppercase text-center color2 text-white p-2\"><i class=\"fa fa-sitemap\" aria-hidden=\"true\"></i> {{str.name}}</h3>\n        <h3 class=\"string-line text-center\"> Current Voltage: <span class=\"badge badge-{{str.status}}\">{{str.voltage}} V</span></h3>\n        <hr>\n\n        <div class=\"row no-gutters\" >\n          <div class=\"col-4 mmprops\" *ngFor=\"let prop of str.mmprops\" >\n            <div class=\"mmprop\">\n              <div class=\"title\">\n\n\n                <div class=\"row no-gutters\">\n                  <div class=\"col\">\n                    {{prop.label}}\n                  </div>\n                  <div class=\"col-3\">\n                    <i class=\"fa fa-2x {{prop.icon}}\" aria-hidden=\"true\"></i>\n\n                  </div>\n                </div>\n              </div>\n              <span class=\"prop\">\n                Min\n                <span class=\"badge badge-warning\">{{prop.min}}</span>\n              </span>\n              <span class=\"prop\">\n                Max\n                <span class=\"badge badge-info\">{{prop.max}} {{prop.post?prop.post:''}}</span>\n              </span>\n\n            </div>\n\n          </div>\n        </div>\n\n        <ul class=\"list-group list-props\" >\n          <li class=\"list-group-item\" *ngFor=\"let prop of str.unprops\">\n            {{prop.label}} <span class=\"badge badge-success\">{{prop.value}}</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"col-3 col-lg-3 col-xl-2 \">\n  <app-chart-donut *ngFor='let graphic of service.graphics' [data]=\"graphic\"></app-chart-donut>\n</div> -->\n\n<app-indicators></app-indicators>\n"

/***/ }),

/***/ "./src/app/screens/site/site.component.scss":
/*!**************************************************!*\
  !*** ./src/app/screens/site/site.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2l0ZS9zaXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/screens/site/site.component.ts":
/*!************************************************!*\
  !*** ./src/app/screens/site/site.component.ts ***!
  \************************************************/
/*! exports provided: SiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteComponent", function() { return SiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_battery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/battery.service */ "./src/app/services/battery.service.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SiteComponent = /** @class */ (function () {
    function SiteComponent(service, configService, router) {
        this.service = service;
        this.configService = configService;
        this.router = router;
    }
    SiteComponent.prototype.ngOnInit = function () {
        this.configService.data.title = "GSW-Office SP";
    };
    SiteComponent.prototype.gotoString = function (str) {
        this.service.currentString = str;
        this.router.navigateByUrl('/string');
    };
    SiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site',
            template: __webpack_require__(/*! ./site.component.html */ "./src/app/screens/site/site.component.html"),
            styles: [__webpack_require__(/*! ./site.component.scss */ "./src/app/screens/site/site.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_battery_service__WEBPACK_IMPORTED_MODULE_1__["BatteryService"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SiteComponent);
    return SiteComponent;
}());



/***/ }),

/***/ "./src/app/screens/string/string.component.html":
/*!******************************************************!*\
  !*** ./src/app/screens/string/string.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card \" >\n  <div class=\"card-header primary color2\">\n\n    <div class=\"row no-gutters\">\n      <div class=\"col-12 col-md-4\" (click)=\"goSite()\"><h5>Name:</h5>\n\n        <i class=\"fa fa-sitemap\" aria-hidden=\"true\"></i> {{service.currentString.name}}\n      </div>\n      <div class=\"col-12 col-md-4\"><h5>Network:</h5> <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> 10.100.10.10</div>\n      <div class=\"col-12 col-md-4\"><h5>BMS-ID:</h5> <i class=\"fa fa-hashtag\" aria-hidden=\"true\"></i> BMS-9000 - 0009801</div>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters\">\n    <div class=\"col-12 col-md-6\">\n      <ul class=\"list-group m-2\">\n        <li class=\"list-group-item\">\n          <h3>\n            Current Voltage:\n          </h3>\n          <h3>\n            <span class=\"badge badge-success\">{{service.currentString.voltage}} V</span>\n          </h3>\n        </li>\n        <li class=\"list-group-item\">Data: <span class=\"badge badge-primary\">11/10/2019</span></li>\n      </ul>\n    </div>\n    <div class=\"col-12 col-md-6\">\n      <ul class=\"list-group m-2\">\n          <li class=\"list-group-item\">\n            <h3>\n              Ciclos Op:\n            </h3>\n            <h3>\n              <span class=\"badge badge-secondary\">102/2</span>\n            </h3>\n          </li>\n          <li class=\"list-group-item\">Duração: <span class=\"badge badge-primary\">3040s</span></li>\n        </ul>\n      </div>\n  </div>\n\n  <!--\n    <div class=\"card-footer text-muted\">\n    <div class=\"row\">\n      <div class=\"col\">ActiveDCCurrent: <span class=\"badge badge-success\">0000.3A</span></div>\n      <div class=\"col\">CurrentElectricalOperation: <span class=\"badge badge-success\">FLOAT</span></div>\n    </div>\n  </div>\n-->\n</div>\n\n<div class=\"group\">\n  <app-agent *ngFor='let agent of agents' [data]=\"agent\"></app-agent>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/string/string.component.scss":
/*!******************************************************!*\
  !*** ./src/app/screens/string/string.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".group {\n  text-align: center;\n  padding: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoZWxkb24vNC1wcm9qZWN0cy9jbGllbnQtbW9uaXRvci9wb2Mvc3JjL2FwcC9zY3JlZW5zL3N0cmluZy9zdHJpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDaEIsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyb3VwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/screens/string/string.component.ts":
/*!****************************************************!*\
  !*** ./src/app/screens/string/string.component.ts ***!
  \****************************************************/
/*! exports provided: StringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringComponent", function() { return StringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_battery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/battery.service */ "./src/app/services/battery.service.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_agent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/agent */ "./src/app/models/agent.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StringComponent = /** @class */ (function () {
    function StringComponent(service, configService, router) {
        this.service = service;
        this.configService = configService;
        this.router = router;
        this.agents = [];
        this.maxAgents = 15;
    }
    StringComponent.prototype.ngOnInit = function () {
        this.configService.data.title = "GSW-Office SP";
        if (!this.service.currentString) {
            this.service.currentString = this.service.strings[0];
        }
        this.generateAgents();
    };
    StringComponent.prototype.goSite = function () {
        this.router.navigateByUrl('/site');
    };
    StringComponent.prototype.generateAgents = function () {
        var _this = this;
        this.agents = [];
        for (var index = 0; index < this.maxAgents; index++) {
            var statusId = Math.round(Math.random() * (this.configService.statusList.length - 1));
            var agent = new src_app_models_agent__WEBPACK_IMPORTED_MODULE_4__["Agent"](index, "J " + (index + 1), this.configService.statusList[statusId]);
            agent.svgId = Math.round(Math.random() * 3);
            this.agents.push(agent);
        }
        setInterval(function () { return _this.updateAgents(); }, 10000);
    };
    StringComponent.prototype.updateAgents = function () {
        for (var index = 0; index < this.maxAgents; index++) {
            var statusId = Math.round(Math.random() * (this.configService.statusList.length - 1));
            // let status = this.configService.statusList[statusId];
            var agent = this.agents[index];
            if (Math.round(Math.random() * 3) == 0) {
                agent.status = this.configService.statusList[statusId];
            }
        }
    };
    StringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-string',
            template: __webpack_require__(/*! ./string.component.html */ "./src/app/screens/string/string.component.html"),
            styles: [__webpack_require__(/*! ./string.component.scss */ "./src/app/screens/string/string.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_battery_service__WEBPACK_IMPORTED_MODULE_1__["BatteryService"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StringComponent);
    return StringComponent;
}());



/***/ }),

/***/ "./src/app/services/battery.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/battery.service.ts ***!
  \*********************************************/
/*! exports provided: BatteryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryService", function() { return BatteryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_stringbat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/stringbat */ "./src/app/models/stringbat.ts");
/* harmony import */ var _models_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/indicator */ "./src/app/models/indicator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BatteryService = /** @class */ (function () {
    function BatteryService() {
        this.strings = [];
        this.graphics = [
            new _models_indicator__WEBPACK_IMPORTED_MODULE_2__["Indicator"](9, "Voltagem", 24, 36, "220v", true, "#AEE239"),
            new _models_indicator__WEBPACK_IMPORTED_MODULE_2__["Indicator"](10, "Carga total", 30, 100, "60h", true, "#F8CA00"),
            new _models_indicator__WEBPACK_IMPORTED_MODULE_2__["Indicator"](11, "Descarregadas", 1, 100, "", true, "#FF00AA"),
        ];
        this.generateStrings();
    }
    BatteryService.prototype.generateStrings = function () {
        this.strings = [];
        for (var index = 0; index < 4; index++) {
            var mnprops = [];
            var unprops = [];
            var voltage = 420 + (Math.round(Math.random() * 40) - 20) + ((Math.round(Math.random() * 99) / 100));
            // if (Math.round(Math.random() * 3) == 0){
            //   agent.status = this.configService.statusList[statusId];
            // }
            var str = new _models_stringbat__WEBPACK_IMPORTED_MODULE_1__["StringBatt"]("String" + (index + 1), voltage, mnprops, unprops);
            mnprops.push({ label: "Discharge Volt.", min: 13.698, max: 13.708, icon: "fa-bolt" });
            mnprops.push({ label: "Float Temp", min: this.rdnNumber(27), max: this.rdnNumber(30), icon: "fa-bolt" });
            mnprops.push({ label: "IR String", min: 4.11, max: 5.23, icon: "fa-info", post: "Ω" });
            mnprops.push({ label: "Float Volt. Jar", min: this.rdnNumber(5), max: this.rdnNumber(12), icon: "fa-bolt" });
            mnprops.push({ label: "Float Temp Jar", min: this.rdnNumber(11), max: this.rdnNumber(30), icon: "fa-thermometer-full" });
            mnprops.push({ label: "IR Jar", min: this.rdnNumber(20), max: this.rdnNumber(30), icon: "fa-lightbulb-o", post: "Ω" });
            unprops.push({ label: "Archived MPS VD", value: this.rdnNumber(1.5) + "%", icon: "fa-thermometer-full" });
            if (voltage < 412) {
                str.status = "warning";
            }
            else if (voltage >= 412 && voltage < 430) {
                str.status = "success";
            }
            else {
                str.status = "danger";
            }
            this.strings.push(str);
        }
    };
    BatteryService.prototype.rdnNumber = function (value) {
        return value + (Math.round(Math.random() * (value * 2)) - (value / 2));
    };
    BatteryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BatteryService);
    return BatteryService;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _models_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/config */ "./src/app/models/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigService = /** @class */ (function () {
    function ConfigService(cookie, sanitizer) {
        this.cookie = cookie;
        this.sanitizer = sanitizer;
        this.data = new _models_config__WEBPACK_IMPORTED_MODULE_3__["Config"]();
        this.configurating = false;
        this.statusList = [
            { name: "offline", color: "#FF0000" },
            { name: "online", color: "#C7F464" },
            // {name: "callin", color: "#C7F464"},
            // {name: "callin", color: "#2effd8"},
            // {name: "callout", color: "#17F9FF"},
            // {name: "callout", color: "#00c2fc"},
            { name: "pause", color: "#F8BE00" }
        ];
    }
    ConfigService.prototype.saveConfig = function () {
        console.log("saveConfig()");
        this.cookie.set('config', JSON.stringify(this.data));
    };
    ConfigService.prototype.loadDefaults = function () {
        this.data.size = 100;
        this.data.title = "Battery Center ";
        this.data.chartsOnTop = true;
        this.data.colorBgChart = "#013064";
        this.data.darkness = 5;
        this.data.colorTitle = "#000000";
        this.data.colorHeader = "#013064";
        this.data.colorBg = "#013064";
        this.data.colorChart = "#ffc700";
        this.data.colorChartText = "#ffffff";
        this.saveConfig();
    };
    ConfigService.prototype.loadConfig = function () {
        console.log("loadConfig()");
        if (this.cookie.check('config')) {
            this.data = JSON.parse(this.cookie.get('config').replace(/\_/gi, ""));
        }
        else {
            this.loadDefaults();
        }
        this.calcAllColors();
    };
    ConfigService.prototype.calcAllColors = function () {
        this.backDash = this.calcColor(this.data.colorBg, 'to right', 1);
        this.backIndicators = this.calcColor(this.data.colorBgChart, 'to right', 1);
        this.backHeader = this.calcColor(this.data.colorHeader, 'to right', 0.7);
    };
    ConfigService.prototype.calcColor = function (color, direction, intensity) {
        return this.sanitizer.bypassSecurityTrustStyle("linear-gradient(" + direction + ", rgba(0, 0, 0, " + this.data.darkness / (100 / intensity) + "), rgba(0, 0, 0, .05)), " + color);
        // background: -moz-linear-gradient(top, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%);
        // background: -webkit-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
        // background: linear-gradient(to bottom, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
        // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 );
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], ConfigService);
    return ConfigService;
}());

//background: linear-gradient(to right, rgba(255, 255, 255, .5), #CDCDCD),linear-gradient(to right, #0519ff, #f00);


/***/ }),

/***/ "./src/app/services/svg.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/svg.service.ts ***!
  \*****************************************/
/*! exports provided: SvgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgService", function() { return SvgService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SvgService = /** @class */ (function () {
    function SvgService() {
        this.userIcons = [
            "M306 110.6C147.8 110.6 19.6 238.8 19.6 397S147.8 683.4 306 683.4 592.4 555.2 592.4 397 464.2 110.6 306 110.6zm0 443H149.4c0-71.6 46.5-129.8 110.1-149.4-25.5-15.7-43-44.3-43-76.5 0-49.2 40.3-89.5 89.5-89.5s89.5 40.3 89.5 89.5c0 32.2-17.5 60.4-43 76.5 63.5 19.7 110.1 77.9 110.1 149.4H306z",
            "M306 110.6C147.9 110.6 19.6 238.8 19.6 397S147.8 683.4 306 683.4 592.4 555.2 592.4 397 464.2 110.6 306 110.6zm0 85.7c52.3 0 94.7 42.4 94.7 94.7 0 52.3-42.4 94.7-94.7 94.7-52.3 0-94.7-42.4-94.7-94.7 0-52.3 42.4-94.7 94.7-94.7zm-.1 412.2c-52.2 0-100-19-136.9-50.5-9-7.7-14.2-18.9-14.2-30.7 0-53 42.9-95.5 96-95.5H361c53.1 0 95.8 42.5 95.8 95.5 0 11.8-5.2 23-14.2 30.7-36.6 31.5-84.5 50.5-136.7 50.5z",
            "M568.2 586.5c0 29.8-9.1 53.3-27.2 70.6-18.1 17.3-42.2 25.9-72.2 25.9H143.3c-30 0-54.1-8.6-72.2-25.9-18.1-17.3-27.2-40.8-27.2-70.6 0-13.2.4-26 1.3-38.5s2.6-26.1 5.2-40.6 5.9-28 9.9-40.4 9.3-24.5 16-36.3c6.7-11.8 14.4-21.8 23.1-30.2 8.7-8.3 19.3-15 31.8-19.9s26.4-7.4 41.5-7.4c2.2 0 7.4 2.7 15.6 8s17.4 11.3 27.7 17.9c10.3 6.6 23.7 12.5 40.2 17.9 16.5 5.3 33.1 8 49.7 8s33.2-2.7 49.7-8 29.9-11.3 40.2-17.9c10.3-6.6 19.5-12.5 27.7-17.9 8.2-5.3 13.4-8 15.6-8 15.1 0 29 2.5 41.5 7.4 12.5 5 23.1 11.6 31.8 19.9 8.7 8.3 16.4 18.4 23.1 30.2 6.7 11.8 12 23.9 16 36.3 4 12.4 7.3 25.9 9.9 40.4 2.6 14.5 4.3 28.1 5.2 40.6 1.1 12.5 1.6 25.4 1.6 38.5zM449 254c0 39.5-14 73.2-41.9 101.1C379.2 383 345.5 397 306 397c-39.5 0-73.2-14-101.1-41.9C177 327.2 163 293.5 163 254s14-73.2 41.9-101.1S266.5 111 306 111c39.5 0 73.2 14 101.1 41.9C435 180.8 449 214.5 449 254z",
            "M413.8 404.5c-11.3-5-23.1-8.8-34.9-12.1 45.8-25.7 77.1-74.1 77.1-130.3 0-82.8-67.1-149.9-149.9-149.9s-149.9 67.1-149.9 149.9c0 56.2 31.3 104.6 77.1 130.3-11.9 3.3-23.6 7.2-34.9 12.1C109.9 443.2 48.8 526.1 38 621.9c0 33.1 25 60 58.1 60h419.8c33.1 0 58.1-26.8 58.1-60-10.8-95.8-71.9-178.7-160.2-217.4z"
        ];
        this.selectedUserIcon = '';
        this.selectedUserIcon = this.userIcons[2];
    }
    SvgService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SvgService);
    return SvgService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sheldon/4-projects/client-monitor/poc/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map