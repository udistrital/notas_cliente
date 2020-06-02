(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tipo_proyecto-tipo_proyecto-module"],{

/***/ "./src/app/pages/tipo_proyecto/crud-tipo_proyecto/crud-tipo_proyecto.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tipo_proyecto/crud-tipo_proyecto/crud-tipo_proyecto.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\n<ngx-dinamicform [normalform]=\"formTipoProyecto\" [modeloData]=\"info_tipo_proyecto\" (result)=\"validarForm($event)\" [clean]=\"clean\">\n</ngx-dinamicform>\n\n"

/***/ }),

/***/ "./src/app/pages/tipo_proyecto/crud-tipo_proyecto/crud-tipo_proyecto.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tipo_proyecto/crud-tipo_proyecto/crud-tipo_proyecto.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tipo_proyecto/crud-tipo_proyecto/crud-tipo_proyecto.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tipo_proyecto/crud-tipo_proyecto/crud-tipo_proyecto.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CrudTipoProyectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudTipoProyectoComponent", function() { return CrudTipoProyectoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/data/admisiones.service */ "./src/app/@core/data/admisiones.service.ts");
/* harmony import */ var _form_tipo_proyecto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-tipo_proyecto */ "./src/app/pages/tipo_proyecto/crud-tipo_proyecto/form-tipo_proyecto.ts");
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







var CrudTipoProyectoComponent = /** @class */ (function () {
    function CrudTipoProyectoComponent(translate, admisionesService, toasterService) {
        var _this = this;
        this.translate = translate;
        this.admisionesService = admisionesService;
        this.toasterService = toasterService;
        this.eventChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formTipoProyecto = _form_tipo_proyecto__WEBPACK_IMPORTED_MODULE_2__["FORM_TIPO_PROYECTO"];
        this.construirForm();
        this.translate.onLangChange.subscribe(function (event) {
            _this.construirForm();
        });
    }
    Object.defineProperty(CrudTipoProyectoComponent.prototype, "name", {
        set: function (tipo_proyecto_id) {
            this.tipo_proyecto_id = tipo_proyecto_id;
            this.loadTipoProyecto();
        },
        enumerable: true,
        configurable: true
    });
    CrudTipoProyectoComponent.prototype.construirForm = function () {
        this.formTipoProyecto.titulo = this.translate.instant('GLOBAL.tipo_proyecto');
        this.formTipoProyecto.btn = this.translate.instant('GLOBAL.guardar');
        for (var i = 0; i < this.formTipoProyecto.campos.length; i++) {
            this.formTipoProyecto.campos[i].label = this.translate.instant('GLOBAL.' + this.formTipoProyecto.campos[i].label_i18n);
            this.formTipoProyecto.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formTipoProyecto.campos[i].label_i18n);
        }
    };
    CrudTipoProyectoComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
    };
    CrudTipoProyectoComponent.prototype.getIndexForm = function (nombre) {
        for (var index = 0; index < this.formTipoProyecto.campos.length; index++) {
            var element = this.formTipoProyecto.campos[index];
            if (element.nombre === nombre) {
                return index;
            }
        }
        return 0;
    };
    CrudTipoProyectoComponent.prototype.loadTipoProyecto = function () {
        var _this = this;
        if (this.tipo_proyecto_id !== undefined && this.tipo_proyecto_id !== 0) {
            this.admisionesService.get('tipo_proyecto/?query=id:' + this.tipo_proyecto_id)
                .subscribe(function (res) {
                if (res !== null) {
                    _this.info_tipo_proyecto = res[0];
                }
            });
        }
        else {
            this.info_tipo_proyecto = undefined;
            this.clean = !this.clean;
        }
    };
    CrudTipoProyectoComponent.prototype.updateTipoProyecto = function (tipoProyecto) {
        var _this = this;
        var opt = {
            title: 'Update?',
            text: 'Update TipoProyecto!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()(opt)
            .then(function (willDelete) {
            if (willDelete.value) {
                _this.info_tipo_proyecto = tipoProyecto;
                _this.admisionesService.put('tipo_proyecto', _this.info_tipo_proyecto, _this.info_tipo_proyecto.Id)
                    .subscribe(function (res) {
                    _this.loadTipoProyecto();
                    _this.eventChange.emit(true);
                    _this.showToast('info', 'updated', 'TipoProyecto updated');
                });
            }
        });
    };
    CrudTipoProyectoComponent.prototype.createTipoProyecto = function (tipoProyecto) {
        var _this = this;
        var opt = {
            title: 'Create?',
            text: 'Create TipoProyecto!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()(opt)
            .then(function (willDelete) {
            if (willDelete.value) {
                _this.info_tipo_proyecto = tipoProyecto;
                _this.admisionesService.post('tipo_proyecto', _this.info_tipo_proyecto)
                    .subscribe(function (res) {
                    _this.info_tipo_proyecto = res;
                    _this.eventChange.emit(true);
                    _this.showToast('info', 'created', 'TipoProyecto created');
                });
            }
        });
    };
    CrudTipoProyectoComponent.prototype.ngOnInit = function () {
        this.loadTipoProyecto();
    };
    CrudTipoProyectoComponent.prototype.validarForm = function (event) {
        if (event.valid) {
            if (this.info_tipo_proyecto === undefined) {
                this.createTipoProyecto(event.data.TipoProyecto);
            }
            else {
                this.updateTipoProyecto(event.data.TipoProyecto);
            }
        }
    };
    CrudTipoProyectoComponent.prototype.showToast = function (type, title, body) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tipo_proyecto_id'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CrudTipoProyectoComponent.prototype, "name", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CrudTipoProyectoComponent.prototype, "eventChange", void 0);
    CrudTipoProyectoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-crud-tipo-proyecto',
            template: __webpack_require__(/*! ./crud-tipo_proyecto.component.html */ "./src/app/pages/tipo_proyecto/crud-tipo_proyecto/crud-tipo_proyecto.component.html"),
            styles: [__webpack_require__(/*! ./crud-tipo_proyecto.component.scss */ "./src/app/pages/tipo_proyecto/crud-tipo_proyecto/crud-tipo_proyecto.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_1__["AdmisionesService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], CrudTipoProyectoComponent);
    return CrudTipoProyectoComponent;
}());



/***/ }),

/***/ "./src/app/pages/tipo_proyecto/crud-tipo_proyecto/form-tipo_proyecto.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tipo_proyecto/crud-tipo_proyecto/form-tipo_proyecto.ts ***!
  \******************************************************************************/
/*! exports provided: FORM_TIPO_PROYECTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_TIPO_PROYECTO", function() { return FORM_TIPO_PROYECTO; });
var FORM_TIPO_PROYECTO = {
    titulo: 'TipoProyecto',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'TipoProyecto',
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
            nombre: 'Nombre',
            label_i18n: 'tipo_poyecto_nombre',
            placeholder_i18n: 'placeholder_tipo_poyecto_nombre',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-6',
            nombre: 'Descripcion',
            label_i18n: 'tipo_proyecto_descripcion',
            placeholder_i18n: 'placeholder_tipo_proyecto_descripcion',
            requerido: false,
            tipo: 'text',
        },
    ],
};


/***/ }),

/***/ "./src/app/pages/tipo_proyecto/list-tipo_proyecto/list-tipo_proyecto.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tipo_proyecto/list-tipo_proyecto/list-tipo_proyecto.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-lg-12 \">\n  <nb-card>\n    <nb-card-body>\n        <toaster-container [toasterconfig]=\"config\"></toaster-container>\n        <nb-tabset fullWidth (changeTab)=\"selectTab($event)\">\n            <nb-tab tabTitle=\"{{ 'GLOBAL.lista' | translate }}\" [active]=\"!cambiotab\">\n              <br />\n                  <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (delete)=\"onDelete($event)\" (rowSelect)=\"itemselec($event)\" (edit)=\"onEdit($event)\" (create)=\"onCreate($event)\">\n                    </ng2-smart-table>\n\n\n              <!--button (click)=\"activetab()\" >cambiar</button-->\n            </nb-tab>\n            <nb-tab tabTitle=\"{{ 'GLOBAL.formulario' | translate }}\" [active]=\"cambiotab\">\n              <ngx-crud-tipo-proyecto [tipo_proyecto_id]=\"uid\" (eventChange)=\"onChange($event)\"></ngx-crud-tipo-proyecto>\n              <button (click)=\"activetab()\" class=\"btn btn-info btn-sm\"> <i class=\"nb-arrow-dropleft\"></i> {{ 'GLOBAL.regresar' | translate }}</button>\n            </nb-tab>\n          </nb-tabset>\n    </nb-card-body>\n  </nb-card>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/tipo_proyecto/list-tipo_proyecto/list-tipo_proyecto.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tipo_proyecto/list-tipo_proyecto/list-tipo_proyecto.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .nb-theme-default ng2-smart-table table tr td {\n  font-size: 0.85rem; }\n"

/***/ }),

/***/ "./src/app/pages/tipo_proyecto/list-tipo_proyecto/list-tipo_proyecto.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tipo_proyecto/list-tipo_proyecto/list-tipo_proyecto.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ListTipoProyectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTipoProyectoComponent", function() { return ListTipoProyectoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/data/admisiones.service */ "./src/app/@core/data/admisiones.service.ts");
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







var ListTipoProyectoComponent = /** @class */ (function () {
    function ListTipoProyectoComponent(translate, admisionesService, toasterService) {
        var _this = this;
        this.translate = translate;
        this.admisionesService = admisionesService;
        this.toasterService = toasterService;
        this.cambiotab = false;
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
        this.loadData();
        this.cargarCampos();
        this.translate.onLangChange.subscribe(function (event) {
            _this.cargarCampos();
        });
    }
    ListTipoProyectoComponent.prototype.cargarCampos = function () {
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
                Id: {
                    title: this.translate.instant('GLOBAL.id'),
                    // type: 'number;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
                Nombre: {
                    title: this.translate.instant('GLOBAL.tipo_poyecto_nombre'),
                    // type: 'string;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
                Descripcion: {
                    title: this.translate.instant('GLOBAL.tipo_proyecto_descripcion'),
                    // type: 'string;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
            },
        };
    };
    ListTipoProyectoComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
    };
    ListTipoProyectoComponent.prototype.loadData = function () {
        var _this = this;
        this.admisionesService.get('tipo_proyecto/?limit=0').subscribe(function (res) {
            if (res !== null) {
                var data = res;
                _this.source.load(data);
            }
        });
    };
    ListTipoProyectoComponent.prototype.ngOnInit = function () {
    };
    ListTipoProyectoComponent.prototype.onEdit = function (event) {
        this.uid = event.data.Id;
        this.activetab();
    };
    ListTipoProyectoComponent.prototype.onCreate = function (event) {
        this.uid = 0;
        this.activetab();
    };
    ListTipoProyectoComponent.prototype.onDelete = function (event) {
        var _this = this;
        var opt = {
            title: 'Deleting?',
            text: 'Delete TipoProyecto!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()(opt)
            .then(function (willDelete) {
            if (willDelete.value) {
                _this.admisionesService.delete('tipo_proyecto/', event.data).subscribe(function (res) {
                    if (res !== null) {
                        _this.loadData();
                        _this.showToast('info', 'deleted', 'TipoProyecto deleted');
                    }
                });
            }
        });
    };
    ListTipoProyectoComponent.prototype.activetab = function () {
        this.cambiotab = !this.cambiotab;
    };
    ListTipoProyectoComponent.prototype.selectTab = function (event) {
        if (event.tabTitle === this.translate.instant('GLOBAL.lista')) {
            this.cambiotab = false;
        }
        else {
            this.cambiotab = true;
        }
    };
    ListTipoProyectoComponent.prototype.onChange = function (event) {
        if (event) {
            this.loadData();
            this.cambiotab = !this.cambiotab;
        }
    };
    ListTipoProyectoComponent.prototype.itemselec = function (event) {
        // console.log("afssaf");
    };
    ListTipoProyectoComponent.prototype.showToast = function (type, title, body) {
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
    ListTipoProyectoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-list-tipo-proyecto',
            template: __webpack_require__(/*! ./list-tipo_proyecto.component.html */ "./src/app/pages/tipo_proyecto/list-tipo_proyecto/list-tipo_proyecto.component.html"),
            styles: [__webpack_require__(/*! ./list-tipo_proyecto.component.scss */ "./src/app/pages/tipo_proyecto/list-tipo_proyecto/list-tipo_proyecto.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_2__["AdmisionesService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListTipoProyectoComponent);
    return ListTipoProyectoComponent;
}());



/***/ }),

/***/ "./src/app/pages/tipo_proyecto/tipo_proyecto-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tipo_proyecto/tipo_proyecto-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TipoProyectoRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoProyectoRoutingModule", function() { return TipoProyectoRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tipo_proyecto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tipo_proyecto.component */ "./src/app/pages/tipo_proyecto/tipo_proyecto.component.ts");
/* harmony import */ var _list_tipo_proyecto_list_tipo_proyecto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-tipo_proyecto/list-tipo_proyecto.component */ "./src/app/pages/tipo_proyecto/list-tipo_proyecto/list-tipo_proyecto.component.ts");
/* harmony import */ var _crud_tipo_proyecto_crud_tipo_proyecto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud-tipo_proyecto/crud-tipo_proyecto.component */ "./src/app/pages/tipo_proyecto/crud-tipo_proyecto/crud-tipo_proyecto.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: _tipo_proyecto_component__WEBPACK_IMPORTED_MODULE_2__["TipoProyectoComponent"],
        children: [{
                path: 'list-tipo_proyecto',
                component: _list_tipo_proyecto_list_tipo_proyecto_component__WEBPACK_IMPORTED_MODULE_3__["ListTipoProyectoComponent"],
            }, {
                path: 'crud-tipo_proyecto',
                component: _crud_tipo_proyecto_crud_tipo_proyecto_component__WEBPACK_IMPORTED_MODULE_4__["CrudTipoProyectoComponent"],
            }],
    }];
var TipoProyectoRoutingModule = /** @class */ (function () {
    function TipoProyectoRoutingModule() {
    }
    TipoProyectoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ],
        })
    ], TipoProyectoRoutingModule);
    return TipoProyectoRoutingModule;
}());

var routedComponents = [
    _tipo_proyecto_component__WEBPACK_IMPORTED_MODULE_2__["TipoProyectoComponent"],
    _list_tipo_proyecto_list_tipo_proyecto_component__WEBPACK_IMPORTED_MODULE_3__["ListTipoProyectoComponent"],
    _crud_tipo_proyecto_crud_tipo_proyecto_component__WEBPACK_IMPORTED_MODULE_4__["CrudTipoProyectoComponent"],
];


/***/ }),

/***/ "./src/app/pages/tipo_proyecto/tipo_proyecto.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/tipo_proyecto/tipo_proyecto.component.ts ***!
  \****************************************************************/
/*! exports provided: TipoProyectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoProyectoComponent", function() { return TipoProyectoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TipoProyectoComponent = /** @class */ (function () {
    function TipoProyectoComponent() {
    }
    TipoProyectoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-tipo-proyecto-elements',
            template: "<router-outlet></router-outlet>",
        })
    ], TipoProyectoComponent);
    return TipoProyectoComponent;
}());



/***/ }),

/***/ "./src/app/pages/tipo_proyecto/tipo_proyecto.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tipo_proyecto/tipo_proyecto.module.ts ***!
  \*************************************************************/
/*! exports provided: TipoProyectoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoProyectoModule", function() { return TipoProyectoModule; });
/* harmony import */ var _tipo_proyecto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tipo_proyecto-routing.module */ "./src/app/pages/tipo_proyecto/tipo_proyecto-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@core/data/admisiones.service */ "./src/app/@core/data/admisiones.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _crud_tipo_proyecto_crud_tipo_proyecto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crud-tipo_proyecto/crud-tipo_proyecto.component */ "./src/app/pages/tipo_proyecto/crud-tipo_proyecto/crud-tipo_proyecto.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TipoProyectoModule = /** @class */ (function () {
    function TipoProyectoModule() {
    }
    TipoProyectoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                _tipo_proyecto_routing_module__WEBPACK_IMPORTED_MODULE_0__["TipoProyectoRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ],
            declarations: _tipo_proyecto_routing_module__WEBPACK_IMPORTED_MODULE_0__["routedComponents"].slice(),
            providers: [
                _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_3__["AdmisionesService"],
            ],
            exports: [
                _crud_tipo_proyecto_crud_tipo_proyecto_component__WEBPACK_IMPORTED_MODULE_7__["CrudTipoProyectoComponent"],
            ],
        })
    ], TipoProyectoModule);
    return TipoProyectoModule;
}());



/***/ })

}]);
//# sourceMappingURL=tipo_proyecto-tipo_proyecto-module.js.map