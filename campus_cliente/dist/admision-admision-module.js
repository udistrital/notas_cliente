(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admision-admision-module"],{

/***/ "./src/app/pages/admision/admision-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/admision/admision-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AdmisionRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmisionRoutingModule", function() { return AdmisionRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admision_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admision.component */ "./src/app/pages/admision/admision.component.ts");
/* harmony import */ var _list_admision_list_admision_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-admision/list-admision.component */ "./src/app/pages/admision/list-admision/list-admision.component.ts");
/* harmony import */ var _crud_admision_crud_admision_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud-admision/crud-admision.component */ "./src/app/pages/admision/crud-admision/crud-admision.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { AuthGuard } from '../../@core/_guards/auth.guard';
var routes = [{
        path: '',
        component: _admision_component__WEBPACK_IMPORTED_MODULE_2__["AdmisionComponent"],
        children: [{
                path: 'list-admision',
                component: _list_admision_list_admision_component__WEBPACK_IMPORTED_MODULE_3__["ListAdmisionComponent"],
            }, {
                path: 'crud-admision',
                component: _crud_admision_crud_admision_component__WEBPACK_IMPORTED_MODULE_4__["CrudAdmisionComponent"],
            }],
    }];
var AdmisionRoutingModule = /** @class */ (function () {
    function AdmisionRoutingModule() {
    }
    AdmisionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ],
        })
    ], AdmisionRoutingModule);
    return AdmisionRoutingModule;
}());

var routedComponents = [
    _admision_component__WEBPACK_IMPORTED_MODULE_2__["AdmisionComponent"],
    _list_admision_list_admision_component__WEBPACK_IMPORTED_MODULE_3__["ListAdmisionComponent"],
    _crud_admision_crud_admision_component__WEBPACK_IMPORTED_MODULE_4__["CrudAdmisionComponent"],
];


/***/ }),

/***/ "./src/app/pages/admision/admision.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/admision/admision.component.ts ***!
  \******************************************************/
/*! exports provided: AdmisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmisionComponent", function() { return AdmisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdmisionComponent = /** @class */ (function () {
    function AdmisionComponent() {
    }
    AdmisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-admision-elements',
            template: "<router-outlet></router-outlet>",
        })
    ], AdmisionComponent);
    return AdmisionComponent;
}());



/***/ }),

/***/ "./src/app/pages/admision/admision.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/admision/admision.module.ts ***!
  \***************************************************/
/*! exports provided: AdmisionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmisionModule", function() { return AdmisionModule; });
/* harmony import */ var _admision_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admision-routing.module */ "./src/app/pages/admision/admision-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@core/data/admisiones.service */ "./src/app/@core/data/admisiones.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _crud_admision_crud_admision_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crud-admision/crud-admision.component */ "./src/app/pages/admision/crud-admision/crud-admision.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdmisionModule = /** @class */ (function () {
    function AdmisionModule() {
    }
    AdmisionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                _admision_routing_module__WEBPACK_IMPORTED_MODULE_0__["AdmisionRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ],
            declarations: _admision_routing_module__WEBPACK_IMPORTED_MODULE_0__["routedComponents"].slice(),
            providers: [
                _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_3__["AdmisionesService"],
            ],
            exports: [
                _crud_admision_crud_admision_component__WEBPACK_IMPORTED_MODULE_7__["CrudAdmisionComponent"],
            ],
        })
    ], AdmisionModule);
    return AdmisionModule;
}());



/***/ }),

/***/ "./src/app/pages/admision/crud-admision/crud-admision.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admision/crud-admision/crud-admision.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<toaster-container [toasterconfig]=\"config\"></toaster-container>\n<ngx-dinamicform [normalform]=\"formAdmision\" [modeloData]=\"info_admision\" (result)=\"validarForm($event)\" [clean]=\"clean\">\n</ngx-dinamicform>\n"

/***/ }),

/***/ "./src/app/pages/admision/crud-admision/crud-admision.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admision/crud-admision/crud-admision.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admision/crud-admision/crud-admision.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admision/crud-admision/crud-admision.component.ts ***!
  \*************************************************************************/
/*! exports provided: CrudAdmisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudAdmisionComponent", function() { return CrudAdmisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/data/admisiones.service */ "./src/app/@core/data/admisiones.service.ts");
/* harmony import */ var _form_admision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-admision */ "./src/app/pages/admision/crud-admision/form-admision.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var style_loader_angular2_toaster_toaster_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! style-loader!angular2-toaster/toaster.css */ "./node_modules/@angular-devkit/build-angular/node_modules/style-loader/index.js!./node_modules/angular2-toaster/toaster.css");
/* harmony import */ var style_loader_angular2_toaster_toaster_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(style_loader_angular2_toaster_toaster_css__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CrudAdmisionComponent = /** @class */ (function () {
    function CrudAdmisionComponent(translate, admisionesService, toasterService) {
        var _this = this;
        this.translate = translate;
        this.admisionesService = admisionesService;
        this.toasterService = toasterService;
        this.eventChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formAdmision = _form_admision__WEBPACK_IMPORTED_MODULE_2__["FORM_ADMISION"];
        this.construirForm();
        this.translate.onLangChange.subscribe(function (event) {
            _this.construirForm();
        });
        this.loadOptionsEstadoAdmision();
        this.loadOptionsLineaInvestigacion();
        this.loadOptionsEnfasis();
    }
    Object.defineProperty(CrudAdmisionComponent.prototype, "name", {
        set: function (admision_id) {
            this.admision_id = admision_id;
            this.loadAdmision();
        },
        enumerable: true,
        configurable: true
    });
    CrudAdmisionComponent.prototype.construirForm = function () {
        this.formAdmision.titulo = this.translate.instant('GLOBAL.admision');
        this.formAdmision.btn = this.translate.instant('GLOBAL.guardar');
        for (var i = 0; i < this.formAdmision.campos.length; i++) {
            this.formAdmision.campos[i].label = this.translate.instant('GLOBAL.' + this.formAdmision.campos[i].label_i18n);
            this.formAdmision.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formAdmision.campos[i].label_i18n);
        }
    };
    CrudAdmisionComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
    };
    CrudAdmisionComponent.prototype.loadOptionsEstadoAdmision = function () {
        var _this = this;
        var estadoAdmision = [];
        this.admisionesService.get('estado_admision/?limit=0')
            .subscribe(function (res) {
            if (res !== null) {
                estadoAdmision = res;
            }
            _this.formAdmision.campos[_this.getIndexForm('EstadoAdmision')].opciones = estadoAdmision;
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                type: 'error',
                title: error.status + '',
                text: _this.translate.instant('ERROR.' + error.status),
                confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
            });
        });
    };
    CrudAdmisionComponent.prototype.loadOptionsLineaInvestigacion = function () {
        var _this = this;
        var lineaInvestigacion = [];
        this.admisionesService.get('linea_investigacion/?limit=0')
            .subscribe(function (res) {
            if (res !== null) {
                lineaInvestigacion = res;
            }
            _this.formAdmision.campos[_this.getIndexForm('LineaInvestigacion')].opciones = lineaInvestigacion;
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                type: 'error',
                title: error.status + '',
                text: _this.translate.instant('ERROR.' + error.status),
                confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
            });
        });
    };
    CrudAdmisionComponent.prototype.loadOptionsEnfasis = function () {
        var _this = this;
        var enfasis = [];
        this.admisionesService.get('enfasis/?limit=0')
            .subscribe(function (res) {
            if (res !== null) {
                enfasis = res;
            }
            _this.formAdmision.campos[_this.getIndexForm('Enfasis')].opciones = enfasis;
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                type: 'error',
                title: error.status + '',
                text: _this.translate.instant('ERROR.' + error.status),
                confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
            });
        });
    };
    CrudAdmisionComponent.prototype.getIndexForm = function (nombre) {
        for (var index = 0; index < this.formAdmision.campos.length; index++) {
            var element = this.formAdmision.campos[index];
            if (element.nombre === nombre) {
                return index;
            }
        }
        return 0;
    };
    CrudAdmisionComponent.prototype.loadAdmision = function () {
        var _this = this;
        if (this.admision_id !== undefined && this.admision_id !== 0) {
            this.admisionesService.get('admision/?query=id:' + this.admision_id)
                .subscribe(function (res) {
                if (res !== null) {
                    _this.info_admision = res[0];
                }
            }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                    type: 'error',
                    title: error.status + '',
                    text: _this.translate.instant('ERROR.' + error.status),
                    confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                });
            });
        }
        else {
            this.info_admision = undefined;
            this.clean = !this.clean;
        }
    };
    CrudAdmisionComponent.prototype.updateAdmision = function (admision) {
        var _this = this;
        var opt = {
            title: this.translate.instant('GLOBAL.actualizar'),
            text: this.translate.instant('GLOBAL.actualizar') + '?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
            cancelButtonText: this.translate.instant('GLOBAL.cancelar'),
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()(opt)
            .then(function (willDelete) {
            if (willDelete.value) {
                _this.info_admision = admision;
                _this.admisionesService.put('admision', _this.info_admision, _this.info_admision.Id)
                    .subscribe(function (res) {
                    _this.loadAdmision();
                    _this.eventChange.emit(true);
                    _this.showToast('info', _this.translate.instant('GLOBAL.actualizar'), _this.translate.instant('GLOBAL.admision') + ' ' +
                        _this.translate.instant('GLOBAL.confirmarActualizar'));
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                        type: 'error',
                        title: error.status + '',
                        text: _this.translate.instant('ERROR.' + error.status),
                        confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                    });
                });
            }
        });
    };
    CrudAdmisionComponent.prototype.createAdmision = function (admision) {
        var _this = this;
        var opt = {
            title: this.translate.instant('GLOBAL.crear'),
            text: this.translate.instant('GLOBAL.crear') + '?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
            cancelButtonText: this.translate.instant('GLOBAL.cancelar'),
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()(opt)
            .then(function (willDelete) {
            if (willDelete.value) {
                _this.info_admision = admision;
                _this.admisionesService.post('admision', _this.info_admision)
                    .subscribe(function (res) {
                    _this.info_admision = res;
                    _this.eventChange.emit(true);
                    _this.showToast('info', _this.translate.instant('GLOBAL.crear'), _this.translate.instant('GLOBAL.admision') + ' ' +
                        _this.translate.instant('GLOBAL.confirmarCrear'));
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                        type: 'error',
                        title: error.status + '',
                        text: _this.translate.instant('ERROR.' + error.status),
                        confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                    });
                });
            }
        });
    };
    CrudAdmisionComponent.prototype.ngOnInit = function () {
        this.loadAdmision();
    };
    CrudAdmisionComponent.prototype.validarForm = function (event) {
        if (event.valid) {
            if (this.info_admision === undefined) {
                this.createAdmision(event.data.Admision);
            }
            else {
                this.updateAdmision(event.data.Admision);
            }
        }
    };
    CrudAdmisionComponent.prototype.showToast = function (type, title, body) {
        this.config = new angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterConfig"]({
            // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center'
            positionClass: 'toast-top-center',
            timeout: 5000,
            newestOnTop: true,
            tapToDismiss: false,
            preventDuplicates: true,
            animation: 'slideDown',
            limit: 5,
        });
        var toast = {
            type: type,
            title: title,
            body: body,
            showCloseButton: true,
            bodyOutputType: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["BodyOutputType"].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('admision_id'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CrudAdmisionComponent.prototype, "name", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CrudAdmisionComponent.prototype, "eventChange", void 0);
    CrudAdmisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-crud-admision',
            template: __webpack_require__(/*! ./crud-admision.component.html */ "./src/app/pages/admision/crud-admision/crud-admision.component.html"),
            styles: [__webpack_require__(/*! ./crud-admision.component.scss */ "./src/app/pages/admision/crud-admision/crud-admision.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_1__["AdmisionesService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], CrudAdmisionComponent);
    return CrudAdmisionComponent;
}());



/***/ }),

/***/ "./src/app/pages/admision/crud-admision/form-admision.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/admision/crud-admision/form-admision.ts ***!
  \***************************************************************/
/*! exports provided: FORM_ADMISION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_ADMISION", function() { return FORM_ADMISION; });
var FORM_ADMISION = {
    titulo: 'Admision',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'Admision',
    campos: [
        {
            etiqueta: 'input',
            claseGrid: 'col-6',
            nombre: 'Id',
            label_i18n: 'id',
            placeholder_i18n: 'id',
            requerido: true,
            tipo: 'number',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-6',
            nombre: 'Aspirante',
            label_i18n: 'aspirante',
            placeholder_i18n: 'aspirante',
            requerido: true,
            tipo: 'number',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-6',
            nombre: 'ProgramaAcademico',
            label_i18n: 'programa_academico',
            placeholder_i18n: 'programa_academico',
            requerido: true,
            tipo: 'number',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-6',
            nombre: 'ReciboMatricula',
            label_i18n: 'recibo_matricula',
            placeholder_i18n: 'recibo_matricula',
            requerido: true,
            tipo: 'number',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-6',
            nombre: 'ReciboInscripcion',
            label_i18n: 'recibo_inscripcion',
            placeholder_i18n: 'recibo_inscripcion',
            requerido: true,
            tipo: 'number',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-6',
            nombre: 'Periodo',
            label_i18n: 'periodo',
            placeholder_i18n: 'periodo',
            requerido: true,
            tipo: 'number',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-6',
            nombre: 'Propuesta',
            label_i18n: 'propuesta',
            placeholder_i18n: 'propuesta',
            requerido: true,
            tipo: 'number',
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-6',
            nombre: 'EstadoAdmision',
            label_i18n: 'estado_admision',
            placeholder_i18n: 'estado_admision',
            requerido: true,
            tipo: 'EstadoAdmision',
            key: 'Nombre',
            opciones: [],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-6',
            nombre: 'LineaInvestigacion',
            label_i18n: 'linea_investigacion',
            placeholder_i18n: 'linea_investigacion',
            requerido: true,
            tipo: 'LineaInvestigacion',
            key: 'Nombre',
            opciones: [],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-6',
            nombre: 'Enfasis',
            label_i18n: 'enfasis',
            placeholder_i18n: 'enfasis',
            requerido: true,
            tipo: 'Enfasis',
            key: 'Nombre',
            opciones: [],
        },
    ],
};


/***/ }),

/***/ "./src/app/pages/admision/list-admision/list-admision.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admision/list-admision/list-admision.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-lg-12 \">\n    <nb-card>\n        <nb-card-body>\n            <toaster-container [toasterconfig]=\"config\"></toaster-container>\n            <nb-tabset fullWidth (changeTab)=\"selectTab($event)\">\n                <nb-tab tabTitle=\"{{ 'GLOBAL.lista' | translate }}\" [active]=\"!cambiotab\">\n                    <br />\n                    <div class=\"container m-5\">\n                        <div>\n                            <div class=\"row\">\n                                <mat-form-field style=\"width: 50%;\">\n                                    <mat-label>Programa Academico:</mat-label>\n                                    <mat-select [(value)]=\"selected\" [(ngModel)]=\"selectedValue\">\n                                        <mat-option>--Seleccionar--</mat-option>\n                                        <mat-option *ngFor=\"let item of posgrados\" [value]=\"item\">\n                                            {{item.Nombre}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col\">\n                                    <button (click)=\"Filtrar()\" class=\"btn btn-info btn-sm\">Filtrar</button>\n                                </div>\n                                <div class=\"col\">\n                                    <button (click)=\"ClearFiltro()\" class=\"btn btn-info btn-sm\">Limpiar</button>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <br />\n                    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (delete)=\"onDelete($event)\" (rowSelect)=\"itemselec($event)\" (edit)=\"onEdit($event)\" (create)=\"onCreate($event)\">\n                    </ng2-smart-table>\n                </nb-tab>\n                <nb-tab tabTitle=\"{{ 'GLOBAL.formulario' | translate }}\" [active]=\"cambiotab\">\n                    <ngx-crud-admision [admision_id]=\"uid\" (eventChange)=\"onChange($event)\"></ngx-crud-admision>\n                    <button (click)=\"activetab()\" class=\"btn btn-info btn-sm\"> <i class=\"nb-arrow-dropleft\"></i> {{ 'GLOBAL.regresar' | translate }}</button>\n                </nb-tab>\n            </nb-tabset>\n        </nb-card-body>\n    </nb-card>\n</div>"

/***/ }),

/***/ "./src/app/pages/admision/list-admision/list-admision.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admision/list-admision/list-admision.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .nb-theme-default ng2-smart-table table tr td {\n  font-size: 0.85rem; }\n"

/***/ }),

/***/ "./src/app/pages/admision/list-admision/list-admision.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admision/list-admision/list-admision.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListAdmisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAdmisionComponent", function() { return ListAdmisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/data/admisiones.service */ "./src/app/@core/data/admisiones.service.ts");
/* harmony import */ var _core_data_programa_academico_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/data/programa_academico.service */ "./src/app/@core/data/programa_academico.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var style_loader_angular2_toaster_toaster_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! style-loader!angular2-toaster/toaster.css */ "./node_modules/@angular-devkit/build-angular/node_modules/style-loader/index.js!./node_modules/angular2-toaster/toaster.css");
/* harmony import */ var style_loader_angular2_toaster_toaster_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(style_loader_angular2_toaster_toaster_css__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListAdmisionComponent = /** @class */ (function () {
    function ListAdmisionComponent(translate, admisionesService, toasterService, programaService) {
        var _this = this;
        this.translate = translate;
        this.admisionesService = admisionesService;
        this.toasterService = toasterService;
        this.programaService = programaService;
        this.cambiotab = false;
        this.posgrados = [];
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
        this.cargarCampos();
        this.translate.onLangChange.subscribe(function (event) {
            _this.cargarCampos();
        });
        this.loadInfoPostgrados();
    }
    ListAdmisionComponent.prototype.cargarCampos = function () {
        var _this = this;
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            mode: 'external',
            columns: {
                Aspirante: {
                    title: this.translate.instant('GLOBAL.aspirante'),
                    // type: 'number;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
                ProgramaAcademico: {
                    title: this.translate.instant('GLOBAL.programa_academico'),
                    // type: 'number;',
                    valuePrepareFunction: function (value) {
                        var num = parseInt(value, 10);
                        return _this.posgrados[num - 1].Nombre.toString();
                    },
                },
                Periodo: {
                    title: this.translate.instant('GLOBAL.periodo'),
                    // type: 'number;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
                EstadoAdmision: {
                    title: this.translate.instant('GLOBAL.estado_admision'),
                    // type: 'estado_admision;',
                    valuePrepareFunction: function (value) {
                        return value.Nombre;
                    },
                },
                Enfasis: {
                    title: 'Enfasis',
                    // type: 'estado_admision;',
                    valuePrepareFunction: function (value) {
                        return value.Nombre;
                    },
                },
                AceptaTerminos: {
                    title: 'Acepta Terminos',
                    // type: 'estado_admision;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
            },
        };
    };
    ListAdmisionComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
    };
    ListAdmisionComponent.prototype.loadData = function (query) {
        var _this = this;
        if (query) {
            this.admisionesService.get(query).subscribe(function (res) {
                if (res !== null) {
                    var data = res;
                    _this.source.load(data);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        type: 'info',
                        title: _this.translate.instant('GLOBAL.warning'),
                        text: "no se encontraron resultados",
                        confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                    });
                }
            }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                    type: 'error',
                    title: error.status + '',
                    text: _this.translate.instant('ERROR.' + error.status),
                    confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                });
            });
        }
        else {
            this.admisionesService.get('admision/?limit=0').subscribe(function (res) {
                if (res !== null) {
                    var data = res;
                    _this.source.load(data);
                }
            }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                    type: 'error',
                    title: error.status + '',
                    text: _this.translate.instant('ERROR.' + error.status),
                    confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                });
            });
        }
    };
    ListAdmisionComponent.prototype.ngOnInit = function () {
    };
    ListAdmisionComponent.prototype.onEdit = function (event) {
        this.uid = event.data.Id;
        this.activetab();
    };
    ListAdmisionComponent.prototype.onCreate = function (event) {
        this.uid = 0;
        this.activetab();
    };
    ListAdmisionComponent.prototype.onDelete = function (event) {
        var _this = this;
        var opt = {
            title: this.translate.instant('GLOBAL.eliminar'),
            text: this.translate.instant('GLOBAL.eliminar') + '?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
            cancelButtonText: this.translate.instant('GLOBAL.cancelar'),
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()(opt)
            .then(function (willDelete) {
            if (willDelete.value) {
                _this.admisionesService.delete('admision/', event.data).subscribe(function (res) {
                    if (res !== null) {
                        _this.loadData();
                        _this.showToast('info', _this.translate.instant('GLOBAL.eliminar'), _this.translate.instant('GLOBAL.admision') + ' ' +
                            _this.translate.instant('GLOBAL.confirmarEliminar'));
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        type: 'error',
                        title: error.status + '',
                        text: _this.translate.instant('ERROR.' + error.status),
                        confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                    });
                });
            }
        });
    };
    ListAdmisionComponent.prototype.activetab = function () {
        this.cambiotab = !this.cambiotab;
    };
    ListAdmisionComponent.prototype.selectTab = function (event) {
        if (event.tabTitle === this.translate.instant('GLOBAL.lista')) {
            this.cambiotab = false;
        }
        else {
            this.cambiotab = true;
        }
    };
    ListAdmisionComponent.prototype.onChange = function (event) {
        if (event) {
            this.loadData();
            this.cambiotab = !this.cambiotab;
        }
    };
    ListAdmisionComponent.prototype.itemselec = function (event) {
        // console.log("afssaf");
    };
    ListAdmisionComponent.prototype.loadInfoPostgrados = function () {
        var _this = this;
        this.programaService.get('programa_academico/?limit=0')
            .subscribe(function (res) {
            var r = res;
            if (res !== null && r.Type !== 'error') {
                _this.posgrados = res;
                _this.loadData();
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                type: 'error',
                title: error.status + '',
                text: _this.translate.instant('ERROR.' + error.status),
                confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
            });
        });
    };
    ListAdmisionComponent.prototype.Filtrar = function () {
        if (this.selectedValue) {
            this.loadData("admision/?query=ProgramaAcademico:" + this.selectedValue.Id);
        }
        else {
            this.loadData();
        }
    };
    ListAdmisionComponent.prototype.ClearFiltro = function () {
        this.loadData();
        this.selectedValue = '--Seleccionar--';
    };
    ListAdmisionComponent.prototype.showToast = function (type, title, body) {
        this.config = new angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterConfig"]({
            // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center'
            positionClass: 'toast-top-center',
            timeout: 5000,
            newestOnTop: true,
            tapToDismiss: false,
            preventDuplicates: true,
            animation: 'slideDown',
            limit: 5,
        });
        var toast = {
            type: type,
            title: title,
            body: body,
            showCloseButton: true,
            bodyOutputType: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["BodyOutputType"].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    ListAdmisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-list-admision',
            template: __webpack_require__(/*! ./list-admision.component.html */ "./src/app/pages/admision/list-admision/list-admision.component.html"),
            styles: [__webpack_require__(/*! ./list-admision.component.scss */ "./src/app/pages/admision/list-admision/list-admision.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_2__["AdmisionesService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _core_data_programa_academico_service__WEBPACK_IMPORTED_MODULE_3__["ProgramaAcademicoService"]])
    ], ListAdmisionComponent);
    return ListAdmisionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admision-admision-module.js.map