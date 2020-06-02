(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inscripcion-inscripcion-module~propuesta_grado-propuesta_grado-module"],{

/***/ "./src/app/@core/data/models/documento.ts":
/*!************************************************!*\
  !*** ./src/app/@core/data/models/documento.ts ***!
  \************************************************/
/*! exports provided: Documento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Documento", function() { return Documento; });
var Documento = /** @class */ (function () {
    function Documento() {
    }
    return Documento;
}());



/***/ }),

/***/ "./src/app/@core/data/users.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/data/users.service.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app-config */ "./src/app/app-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Accept': 'application/json',
        'authorization': 'Bearer ' + window.localStorage.getItem('access_token'),
    }),
};
var path = _app_config__WEBPACK_IMPORTED_MODULE_3__["GENERAL"].ENTORNO.PERSONA_SERVICE;
var UserService = /** @class */ (function () {
    function UserService(http) {
        var _this = this;
        this.http = http;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        if (window.localStorage.getItem('id_token') !== null && window.localStorage.getItem('id_token') !== undefined) {
            var id_token = window.localStorage.getItem('id_token').split('.');
            var payload = JSON.parse(atob(id_token[1]));
            window.localStorage.setItem('usuario', payload.sub);
            this.http.get(path + 'persona/?query=Usuario:' + payload.sub, httpOptions)
                .subscribe(function (res) {
                if (res !== null) {
                    _this.user = res[0];
                    _this.user$.next(_this.user);
                    window.localStorage.setItem('ente', res[0].Ente);
                }
            });
        }
    }
    UserService.prototype.getEnte = function () {
        return parseInt(window.localStorage.getItem('ente'), 10);
    };
    UserService.prototype.getPrograma = function () {
        return parseInt(window.localStorage.getItem('programa'), 10);
    };
    UserService.prototype.getUsuario = function () {
        return window.localStorage.getItem('usuario').toString();
    };
    UserService.prototype.getUser = function () {
        return this.user$.asObservable();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/@core/utils/nuxeo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/@core/utils/nuxeo.service.ts ***!
  \**********************************************/
/*! exports provided: NuxeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuxeoService", function() { return NuxeoService; });
/* harmony import */ var nuxeo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nuxeo */ "./node_modules/nuxeo/lib/index.js");
/* harmony import */ var nuxeo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nuxeo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _data_models_documento__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../data/models/documento */ "./src/app/@core/data/models/documento.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NuxeoService = /** @class */ (function () {
    function NuxeoService() {
        this.documentos$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.blobDocument$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.updateDoc$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.documentos = {};
        this.blobDocument = {};
        this.updateDoc = {};
        console.info(this.blobDocument);
        console.info(this.updateDoc);
        NuxeoService_1.nuxeo = new nuxeo__WEBPACK_IMPORTED_MODULE_0__({
            baseURL: _app_config__WEBPACK_IMPORTED_MODULE_2__["GENERAL"].ENTORNO.NUXEO.PATH,
            auth: {
                method: 'basic',
                username: 'campus_virtual',
                password: 'c4mpus',
            },
        });
    }
    NuxeoService_1 = NuxeoService;
    NuxeoService.prototype.getDocumentos$ = function (file, documentoService) {
        this.saveFiles(file, documentoService, this);
        return this.documentos$.asObservable();
    };
    NuxeoService.prototype.getDocumentoById$ = function (Id, documentoService) {
        this.getFile(Id, documentoService, this);
        return this.blobDocument$.asObservable();
    };
    NuxeoService.prototype.updateDocument$ = function (files, documentoService) {
        this.updateFile(files, documentoService, this);
        return this.updateDoc$.asObservable();
    };
    NuxeoService.prototype.saveFiles = function (files, documentoService, nuxeoservice) {
        this.documentos = {};
        nuxeoservice.documentos = {};
        NuxeoService_1.nuxeo.connect()
            .then(function (client) {
            files.forEach(function (file) {
                documentoService.get('tipo_documento/' + file.IdDocumento)
                    .subscribe(function (res) {
                    if (res !== null) {
                        var tipoDocumento_1 = res;
                        console.info(tipoDocumento_1);
                        NuxeoService_1.nuxeo.operation('Document.Create')
                            .params({
                            type: tipoDocumento_1.TipoDocumentoNuxeo,
                            name: file.nombre,
                            properties: 'dc:title=' + file.nombre,
                        })
                            .input(tipoDocumento_1.Workspace)
                            .execute()
                            .then(function (doc) {
                            var nuxeoBlob = new nuxeo__WEBPACK_IMPORTED_MODULE_0__["Blob"]({ content: file.file });
                            NuxeoService_1.nuxeo.batchUpload()
                                .upload(nuxeoBlob)
                                .then(function (response) {
                                file.uid = doc.uid;
                                NuxeoService_1.nuxeo.operation('Blob.AttachOnDocument')
                                    .param('document', doc.uid)
                                    .input(response.blob)
                                    .execute()
                                    .then(function (respuesta) {
                                    var documentoPost = new _data_models_documento__WEBPACK_IMPORTED_MODULE_3__["Documento"];
                                    documentoPost.Enlace = file.uid;
                                    documentoPost.Nombre = file.nombre;
                                    documentoPost.TipoDocumento = tipoDocumento_1;
                                    documentoService.post('documento', documentoPost)
                                        .subscribe(function (resuestaPost) {
                                        nuxeoservice.documentos[file.key] = resuestaPost.Body;
                                        nuxeoservice.documentos$.next(nuxeoservice.documentos);
                                    });
                                });
                            })
                                .catch(function (error) {
                                console.info(error);
                                return error;
                            });
                        })
                            .catch(function (error) {
                            console.info(error);
                            return error;
                        });
                    }
                });
            });
        });
    };
    NuxeoService.prototype.updateFile = function (files, documentoService, nuxeoservice) {
        var _this = this;
        this.updateDoc = {};
        nuxeoservice.updateDoc = {};
        files.forEach(function (file) {
            if (file.file !== undefined) {
                var nuxeoBlob_1 = new nuxeo__WEBPACK_IMPORTED_MODULE_0__["Blob"]({ content: file.file });
                documentoService.get('documento?query=Id:' + file.documento)
                    .subscribe(function (res) {
                    if (res !== null) {
                        var documento_temp_1 = res[0];
                        console.info(_this.documentos);
                        NuxeoService_1.nuxeo.connect();
                        NuxeoService_1.nuxeo.batchUpload()
                            .upload(nuxeoBlob_1)
                            .then(function (response) {
                            NuxeoService_1.nuxeo.operation('Blob.AttachOnDocument')
                                .params({
                                type: documento_temp_1.TipoDocumento.TipoDocumentoNuxeo,
                                name: documento_temp_1.Nombre,
                                properties: 'dc:title=' + file.nombre,
                            })
                                .param('document', documento_temp_1.Enlace)
                                .input(response.blob)
                                .execute()
                                .then(function (respuesta) {
                                respuesta.blob()
                                    .then(function (responseblob) {
                                    var url = URL.createObjectURL(responseblob);
                                    var response_update = {
                                        documento: documento_temp_1,
                                        url: url,
                                    };
                                    nuxeoservice.updateDoc[file.key] = response_update;
                                    nuxeoservice.updateDoc$.next(nuxeoservice.updateDoc);
                                });
                            });
                        });
                    }
                });
            }
        });
    };
    ;
    NuxeoService.prototype.getFile = function (files, documentoService, nuxeoservice) {
        this.blobDocument = {};
        nuxeoservice.blobDocument = {};
        files.forEach(function (file) {
            documentoService.get('documento/' + file.Id)
                .subscribe(function (res) {
                if (res !== null) {
                    if (res.Enlace != null) {
                        NuxeoService_1.nuxeo.header('X-NXDocumentProperties', '*');
                        NuxeoService_1.nuxeo.request('/id/' + res.Enlace)
                            .get()
                            .then(function (response) {
                            response.fetchBlob()
                                .then(function (blob) {
                                blob.blob()
                                    .then(function (responseblob) {
                                    var url = URL.createObjectURL(responseblob);
                                    nuxeoservice.blobDocument[file.key] = url;
                                    nuxeoservice.blobDocument$.next(nuxeoservice.blobDocument);
                                });
                            })
                                .catch(function (response2) {
                            });
                        })
                            .catch(function (response) {
                        });
                    }
                }
            });
        });
    };
    NuxeoService = NuxeoService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NuxeoService);
    return NuxeoService;
    var NuxeoService_1;
}());



/***/ }),

/***/ "./src/app/pages/propuesta_grado/crud-propuesta_grado/crud-propuesta_grado.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/propuesta_grado/crud-propuesta_grado/crud-propuesta_grado.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<toaster-container [toasterconfig]=\"config\">\n</toaster-container>\n<ngx-dinamicform [normalform]=\"formPropuestaGrado\" [modeloData]=\"info_propuesta_grado\" (result)=\"validarForm($event)\" [clean]=\"clean\" (percentage)=\"setPercentage($event)\">\n</ngx-dinamicform>"

/***/ }),

/***/ "./src/app/pages/propuesta_grado/crud-propuesta_grado/crud-propuesta_grado.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/propuesta_grado/crud-propuesta_grado/crud-propuesta_grado.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/propuesta_grado/crud-propuesta_grado/crud-propuesta_grado.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/propuesta_grado/crud-propuesta_grado/crud-propuesta_grado.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CrudPropuestaGradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudPropuestaGradoComponent", function() { return CrudPropuestaGradoComponent; });
/* harmony import */ var _core_utils_implicit_autentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@core/utils/implicit_autentication.service */ "./src/app/@core/utils/implicit_autentication.service.ts");
/* harmony import */ var _core_utils_nuxeo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/utils/nuxeo.service */ "./src/app/@core/utils/nuxeo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/data/admisiones.service */ "./src/app/@core/data/admisiones.service.ts");
/* harmony import */ var _core_data_documento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/data/documento.service */ "./src/app/@core/data/documento.service.ts");
/* harmony import */ var _form_propuesta_grado__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-propuesta_grado */ "./src/app/pages/propuesta_grado/crud-propuesta_grado/form-propuesta_grado.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var style_loader_angular2_toaster_toaster_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! style-loader!angular2-toaster/toaster.css */ "./node_modules/@angular-devkit/build-angular/node_modules/style-loader/index.js!./node_modules/angular2-toaster/toaster.css");
/* harmony import */ var style_loader_angular2_toaster_toaster_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(style_loader_angular2_toaster_toaster_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_store_services_list_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@core/store/services/list.service */ "./src/app/@core/store/services/list.service.ts");
/* harmony import */ var _core_data_users_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@core/data/users.service */ "./src/app/@core/data/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CrudPropuestaGradoComponent = /** @class */ (function () {
    function CrudPropuestaGradoComponent(translate, autenticationService, documentoService, nuxeoService, admisionesService, store, listService, ente_id, toasterService) {
        var _this = this;
        this.translate = translate;
        this.autenticationService = autenticationService;
        this.documentoService = documentoService;
        this.nuxeoService = nuxeoService;
        this.admisionesService = admisionesService;
        this.store = store;
        this.listService = listService;
        this.ente_id = ente_id;
        this.toasterService = toasterService;
        this.eventChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.formPropuestaGrado = _form_propuesta_grado__WEBPACK_IMPORTED_MODULE_5__["FORM_PROPUESTA_GRADO"];
        this.construirForm();
        this.translate.onLangChange.subscribe(function (event) {
            _this.construirForm();
        });
        this.listService.findGrupoInvestigacion();
        this.listService.findTipoProyecto();
        this.listService.findLineaInvestigacion();
        this.loading = false;
        this.loadLists();
    }
    Object.defineProperty(CrudPropuestaGradoComponent.prototype, "name", {
        set: function (propuesta_grado_id) {
            this.propuesta_grado_id = propuesta_grado_id;
            this.buscarID_prop();
        },
        enumerable: true,
        configurable: true
    });
    CrudPropuestaGradoComponent.prototype.construirForm = function () {
        this.formPropuestaGrado.titulo = this.translate.instant('GLOBAL.propuesta_grado');
        this.formPropuestaGrado.btn = this.translate.instant('GLOBAL.guardar');
        for (var i = 0; i < this.formPropuestaGrado.campos.length; i++) {
            this.formPropuestaGrado.campos[i].label = this.translate.instant('GLOBAL.' + this.formPropuestaGrado.campos[i].label_i18n);
            this.formPropuestaGrado.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formPropuestaGrado.campos[i].label_i18n);
        }
    };
    CrudPropuestaGradoComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
    };
    CrudPropuestaGradoComponent.prototype.getIndexForm = function (nombre) {
        for (var index = 0; index < this.formPropuestaGrado.campos.length; index++) {
            var element = this.formPropuestaGrado.campos[index];
            if (element.nombre === nombre) {
                return index;
            }
        }
        return 0;
    };
    CrudPropuestaGradoComponent.prototype.buscarID_prop = function () {
        var _this = this;
        this.ENTE_id = this.ente_id.getEnte();
        this.admisionesService.get('admision/?query=Aspirante:' + this.ENTE_id)
            .subscribe(function (res_ente) {
            _this.admision_id = res_ente[0].Id;
            if (res_ente[0].Aspirante === _this.ente_id.getEnte()) {
                _this.admisionesService.get('propuesta/?query=Admision:' + _this.admision_id)
                    .subscribe(function (res) {
                    var tempo = res[0].Id;
                    _this.prop_id = tempo;
                    _this.loadPropuestaGrado();
                });
            }
            else {
                _this.showToast('info', 'updated', 'Regargar pagina');
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    type: 'warning',
                    title: _this.translate.instant('GLOBAL.warning'),
                    text: _this.translate.instant('GLOBAL.error_carga_datos'),
                    confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                });
            }
        });
    };
    CrudPropuestaGradoComponent.prototype.loadPropuestaGrado = function () {
        var _this = this;
        if (this.prop_id !== undefined && this.prop_id !== 0 &&
            this.prop_id.toString() !== '') {
            this.admisionesService.get('propuesta/?query=id:' + this.prop_id)
                .subscribe(function (res) {
                if (res !== null) {
                    var temp_1 = res[0];
                    var files_1 = [];
                    if (temp_1.FormatoProyecto + '' !== '0') {
                        files_1.push({ Id: temp_1.FormatoProyecto, key: 'FormatoProyecto' });
                    }
                    _this.nuxeoService.getDocumentoById$(files_1, _this.documentoService)
                        .subscribe(function (response) {
                        var filesResponse = response;
                        if (Object.keys(filesResponse).length === files_1.length) {
                            _this.info_propuesta_grado = res[0];
                            _this.info_propuesta_grado.TipoProyecto = temp_1.TipoProyecto;
                            _this.FormatoProyecto = _this.info_propuesta_grado.FormatoProyecto;
                            _this.info_propuesta_grado.LineaInvestigacion = temp_1.LineaInvestigacion;
                            _this.info_propuesta_grado.FormatoProyecto = filesResponse['FormatoProyecto'] + '';
                        }
                    }, function (error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            type: 'error',
                            title: error.status + '',
                            text: _this.translate.instant('ERROR.' + error.status),
                            confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                        });
                    });
                }
            }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    type: 'error',
                    title: error.status + '',
                    text: _this.translate.instant('ERROR.' + error.status),
                    confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                });
            });
        }
        else {
            this.info_propuesta_grado = undefined;
            this.clean = !this.clean;
        }
    };
    CrudPropuestaGradoComponent.prototype.updatePropuestaGrado = function (propuestaGrado) {
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()(opt)
            .then(function (willDelete) {
            if (willDelete.value) {
                _this.info_propuesta_grado = propuestaGrado;
                var files_2 = [];
                if (_this.info_propuesta_grado.FormatoProyecto !== undefined) {
                    files_2.push({ file: _this.info_propuesta_grado.FormatoProyecto, documento: _this.FormatoProyecto, key: 'FormatoProyecto' });
                }
                if (files_2.length !== 0) {
                    _this.nuxeoService.updateDocument$(files_2, _this.documentoService)
                        .subscribe(function (response) {
                        if (Object.keys(response).length === files_2.length) {
                            var documentos_actualizados_1 = response;
                            _this.info_propuesta_grado.FormatoProyecto = _this.FormatoProyecto;
                            _this.admisionesService.put('propuesta', _this.info_propuesta_grado, _this.info_propuesta_grado.Id)
                                .subscribe(function (res) {
                                if (documentos_actualizados_1['FormatoProyecto'] !== undefined) {
                                    _this.info_propuesta_grado.FormatoProyecto = documentos_actualizados_1['FormatoProyecto'].url + '';
                                }
                                _this.loadPropuestaGrado();
                                _this.eventChange.emit(true);
                                _this.showToast('info', 'updated', 'PropuestaGrado updated');
                            }, function (error) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                                    type: 'error',
                                    title: error.status + '',
                                    text: _this.translate.instant('ERROR.' + error.status),
                                    confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                                });
                            });
                        }
                    }, function (error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            type: 'error',
                            title: error.status + '',
                            text: _this.translate.instant('ERROR.' + error.status),
                            confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                        });
                    });
                }
                else {
                    _this.info_propuesta_grado.FormatoProyecto = _this.FormatoProyecto;
                    _this.admisionesService.put('propuesta', _this.info_propuesta_grado, _this.prop_id)
                        .subscribe(function (res) {
                        _this.eventChange.emit(true);
                        _this.loadPropuestaGrado();
                        _this.showToast('info', 'updated', 'PropuestaGrado updated');
                    }, function (error) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            type: 'error',
                            title: error.status + '',
                            text: _this.translate.instant('ERROR.' + error.status),
                            confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                        });
                    });
                }
            }
        });
    };
    CrudPropuestaGradoComponent.prototype.createPropuestaGrado = function (propuestaGrado) {
        var _this = this;
        var opt = {
            title: this.translate.instant('GLOBAL.crear'),
            text: this.translate.instant('GLOBAL.create_propuesta'),
            icon: 'warning',
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
            dangerMode: true,
            showCancelButton: true,
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()(opt)
            .then(function (willDelete) {
            if (willDelete.value) {
                var files_3 = [];
                _this.info_propuesta_grado = propuestaGrado;
                if (_this.info_propuesta_grado.FormatoProyecto !== undefined) {
                    files_3.push({
                        nombre: _this.autenticationService.getPayload().sub, key: 'FormatoProyecto',
                        file: _this.info_propuesta_grado.FormatoProyecto, IdDocumento: 2
                    });
                }
                _this.nuxeoService.getDocumentos$(files_3, _this.documentoService)
                    .subscribe(function (response) {
                    if (Object.keys(response).length === files_3.length) {
                        _this.filesUp = response;
                        if (_this.filesUp['FormatoProyecto'] !== undefined) {
                            _this.info_propuesta_grado.FormatoProyecto = _this.filesUp['FormatoProyecto'].Id;
                        }
                        _this.admisionesService.post('propuesta', _this.info_propuesta_grado)
                            .subscribe(function (res) {
                            var r = res;
                            if (r !== null && r.Type !== 'error') {
                                _this.info_propuesta_grado = res;
                                _this.eventChange.emit(true);
                                _this.showToast('info', _this.translate.instant('GLOBAL.crear'), _this.translate.instant('GLOBAL.propuesta') + ' ' + _this.translate.instant('GLOBAL.confirmarCrear'));
                            }
                            else {
                                _this.showToast('error', _this.translate.instant('GLOBAL.error'), _this.translate.instant('GLOBAL.error'));
                            }
                        }, function (error) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                                type: 'error',
                                title: error.status + '',
                                text: _this.translate.instant('ERROR.' + error.status),
                                confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                            });
                        });
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                        type: 'error',
                        title: error.status + '',
                        text: _this.translate.instant('ERROR.' + error.status),
                        confirmButtonText: _this.translate.instant('GLOBAL.aceptar'),
                    });
                });
            }
        });
    };
    CrudPropuestaGradoComponent.prototype.ngOnInit = function () {
        this.buscarID_prop();
    };
    CrudPropuestaGradoComponent.prototype.validarForm = function (event) {
        var propuesta = {
            Nombre: event.data.PropuestaGrado.Nombre,
            Resumen: event.data.PropuestaGrado.Resumen,
            GrupoInvestigacion: event.data.PropuestaGrado.GrupoInvestigacion,
            LineaInvestigacion: event.data.PropuestaGrado.LineaInvestigacion,
            FormatoProyecto: event.data.PropuestaGrado.FormatoProyecto.file,
            Admision: {
                Id: this.admision_id,
            },
            TipoProyecto: event.data.PropuestaGrado.TipoProyecto,
        };
        if (event.valid) {
            if (this.info_propuesta_grado === undefined) {
                this.createPropuestaGrado(propuesta);
            }
            else {
                this.updatePropuestaGrado(propuesta);
            }
        }
    };
    CrudPropuestaGradoComponent.prototype.setPercentage = function (event) {
        this.percentage = event;
        this.result.emit(this.percentage);
    };
    CrudPropuestaGradoComponent.prototype.showToast = function (type, title, body) {
        this.config = new angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterConfig"]({
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
            bodyOutputType: angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["BodyOutputType"].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    CrudPropuestaGradoComponent.prototype.loadLists = function () {
        var _this = this;
        this.store.select(function (state) { return state; }).subscribe(function (list) {
            _this.formPropuestaGrado.campos[_this.getIndexForm('GrupoInvestigacion')].opciones = list.listGrupoInvestigacion[0];
            _this.formPropuestaGrado.campos[_this.getIndexForm('LineaInvestigacion')].opciones = list.listLineaInvestigacion[0];
            _this.formPropuestaGrado.campos[_this.getIndexForm('TipoProyecto')].opciones = list.listTipoProyecto[0];
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('propuesta_grado_id'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CrudPropuestaGradoComponent.prototype, "name", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], CrudPropuestaGradoComponent.prototype, "eventChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('result'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], CrudPropuestaGradoComponent.prototype, "result", void 0);
    CrudPropuestaGradoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ngx-crud-propuesta-grado',
            template: __webpack_require__(/*! ./crud-propuesta_grado.component.html */ "./src/app/pages/propuesta_grado/crud-propuesta_grado/crud-propuesta_grado.component.html"),
            styles: [__webpack_require__(/*! ./crud-propuesta_grado.component.scss */ "./src/app/pages/propuesta_grado/crud-propuesta_grado/crud-propuesta_grado.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _core_utils_implicit_autentication_service__WEBPACK_IMPORTED_MODULE_0__["ImplicitAutenticationService"],
            _core_data_documento_service__WEBPACK_IMPORTED_MODULE_4__["DocumentoService"],
            _core_utils_nuxeo_service__WEBPACK_IMPORTED_MODULE_1__["NuxeoService"],
            _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_3__["AdmisionesService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"],
            _core_store_services_list_service__WEBPACK_IMPORTED_MODULE_11__["ListService"],
            _core_data_users_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
    ], CrudPropuestaGradoComponent);
    return CrudPropuestaGradoComponent;
}());



/***/ }),

/***/ "./src/app/pages/propuesta_grado/crud-propuesta_grado/form-propuesta_grado.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/propuesta_grado/crud-propuesta_grado/form-propuesta_grado.ts ***!
  \************************************************************************************/
/*! exports provided: FORM_PROPUESTA_GRADO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_PROPUESTA_GRADO", function() { return FORM_PROPUESTA_GRADO; });
var FORM_PROPUESTA_GRADO = {
    titulo: 'PropuestaGrado',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'PropuestaGrado',
    campos: [
        // {
        //     etiqueta: 'input',
        //     claseGrid: 'col-6',
        //     nombre: 'Id',
        //     label_i18n: 'id',
        //     placeholder_i18n: 'id',
        //     requerido: true,
        //     tipo: 'number',
        // },
        {
            etiqueta: 'input',
            claseGrid: 'col-6',
            nombre: 'Nombre',
            label_i18n: 'titulo_proyecto',
            placeholder_i18n: 'placeholder_titulo_proyecto',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-6',
            nombre: 'GrupoInvestigacion',
            label_i18n: 'grupo_investigacion',
            placeholder_i18n: 'placeholder_grupo_investigacion',
            requerido: true,
            tipo: 'GrupoInvestigacion',
            key: 'Nombre',
            oopciones: [],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-6',
            nombre: 'LineaInvestigacion',
            label_i18n: 'linea_investigacion',
            placeholder_i18n: 'placeholder_linea_investigacion',
            requerido: true,
            tipo: 'LineaInvestigacion',
            key: 'Nombre',
            opciones: [],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-6',
            nombre: 'TipoProyecto',
            label_i18n: 'tipoproyecto',
            placeholder_i18n: 'tipoproyecto',
            requerido: true,
            tipo: 'TipoProyecto',
            key: 'Nombre',
            opciones: [],
        },
        {
            etiqueta: 'file',
            claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
            clase: 'form-control',
            nombre: 'FormatoProyecto',
            label_i18n: 'formatoproyecto',
            placeholder_i18n: 'formatoproyecto',
            requerido: false,
            tipo: 'pdf',
            tipoDocumento: 2,
            formatos: 'pdf',
            url: '',
            tamanoMaximo: 2,
        },
        {
            etiqueta: 'textarea',
            claseGrid: 'col-12',
            nombre: 'Resumen',
            label_i18n: 'resumen',
            placeholder_i18n: 'resumen',
            requerido: false,
            tipo: 'text',
        },
    ],
};


/***/ }),

/***/ "./src/app/pages/propuesta_grado/list-propuesta_grado/list-propuesta_grado.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/propuesta_grado/list-propuesta_grado/list-propuesta_grado.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-lg-12 \">\n  <nb-card>\n    <nb-card-body>\n        <toaster-container [toasterconfig]=\"config\"></toaster-container>\n        <nb-tabset fullWidth (changeTab)=\"selectTab($event)\">\n            <nb-tab tabTitle=\"{{ 'GLOBAL.lista' | translate }}\" [active]=\"!cambiotab\">\n              <br />\n                  <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (delete)=\"onDelete($event)\" (rowSelect)=\"itemselec($event)\" (edit)=\"onEdit($event)\" (create)=\"onCreate($event)\">\n                    </ng2-smart-table>\n\n\n              <!--button (click)=\"activetab()\" >cambiar</button-->\n            </nb-tab>\n            <nb-tab tabTitle=\"{{ 'GLOBAL.formulario' | translate }}\" [active]=\"cambiotab\">\n              <ngx-crud-propuesta-grado [propuesta_grado_id]=\"uid\" (eventChange)=\"onChange($event)\"></ngx-crud-propuesta-grado>\n              <button (click)=\"activetab()\" class=\"btn btn-info btn-sm\"> <i class=\"nb-arrow-dropleft\"></i> {{ 'GLOBAL.regresar' | translate }}</button>\n            </nb-tab>\n          </nb-tabset>\n    </nb-card-body>\n  </nb-card>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/propuesta_grado/list-propuesta_grado/list-propuesta_grado.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/propuesta_grado/list-propuesta_grado/list-propuesta_grado.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .nb-theme-default ng2-smart-table table tr td {\n  font-size: 0.85rem; }\n"

/***/ }),

/***/ "./src/app/pages/propuesta_grado/list-propuesta_grado/list-propuesta_grado.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/propuesta_grado/list-propuesta_grado/list-propuesta_grado.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ListPropuestaGradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPropuestaGradoComponent", function() { return ListPropuestaGradoComponent; });
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







var ListPropuestaGradoComponent = /** @class */ (function () {
    function ListPropuestaGradoComponent(translate, admisionesService, toasterService) {
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
    ListPropuestaGradoComponent.prototype.cargarCampos = function () {
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
                    title: this.translate.instant('GLOBAL.titulo_proyecto'),
                    // type: 'string;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
                Resumen: {
                    title: this.translate.instant('GLOBAL.resumen'),
                    // type: 'string;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
                Grupoinvestigacion: {
                    title: this.translate.instant('GLOBAL.grupo_investigacion'),
                    // type: 'string;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
                Lineainvestigacion: {
                    title: this.translate.instant('GLOBAL.linea_investigacion'),
                    // type: 'string;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
                Enfasis: {
                    title: this.translate.instant('GLOBAL.enfasis'),
                    // type: 'number;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
                Tipoproyecto: {
                    title: this.translate.instant('GLOBAL.tipoproyecto'),
                    // type: 'string;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
                Formatoproyecto: {
                    title: this.translate.instant('GLOBAL.formatoproyecto'),
                    // type: 'string;',
                    valuePrepareFunction: function (value) {
                        return value;
                    },
                },
            },
        };
    };
    ListPropuestaGradoComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
    };
    ListPropuestaGradoComponent.prototype.loadData = function () {
        var _this = this;
        this.admisionesService.get('propuesta/?limit=0').subscribe(function (res) {
            if (res !== null) {
                var data = res;
                _this.source.load(data);
            }
        });
    };
    ListPropuestaGradoComponent.prototype.ngOnInit = function () {
    };
    ListPropuestaGradoComponent.prototype.onEdit = function (event) {
        this.uid = event.data.Id;
        this.activetab();
    };
    ListPropuestaGradoComponent.prototype.onCreate = function (event) {
        this.uid = 0;
        this.activetab();
    };
    ListPropuestaGradoComponent.prototype.onDelete = function (event) {
        var _this = this;
        var opt = {
            title: 'Deleting?',
            text: 'Delete PropuestaGrado!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()(opt)
            .then(function (willDelete) {
            if (willDelete.value) {
                _this.admisionesService.delete('propuesta/', event.data).subscribe(function (res) {
                    if (res !== null) {
                        _this.loadData();
                        _this.showToast('info', 'deleted', 'PropuestaGrado deleted');
                    }
                });
            }
        });
    };
    ListPropuestaGradoComponent.prototype.activetab = function () {
        this.cambiotab = !this.cambiotab;
    };
    ListPropuestaGradoComponent.prototype.selectTab = function (event) {
        if (event.tabTitle === this.translate.instant('GLOBAL.lista')) {
            this.cambiotab = false;
        }
        else {
            this.cambiotab = true;
        }
    };
    ListPropuestaGradoComponent.prototype.onChange = function (event) {
        if (event) {
            this.loadData();
            this.cambiotab = !this.cambiotab;
        }
    };
    ListPropuestaGradoComponent.prototype.itemselec = function (event) {
        // console.log("afssaf");
    };
    ListPropuestaGradoComponent.prototype.showToast = function (type, title, body) {
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
    ListPropuestaGradoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-list-propuesta-grado',
            template: __webpack_require__(/*! ./list-propuesta_grado.component.html */ "./src/app/pages/propuesta_grado/list-propuesta_grado/list-propuesta_grado.component.html"),
            styles: [__webpack_require__(/*! ./list-propuesta_grado.component.scss */ "./src/app/pages/propuesta_grado/list-propuesta_grado/list-propuesta_grado.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_2__["AdmisionesService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListPropuestaGradoComponent);
    return ListPropuestaGradoComponent;
}());



/***/ }),

/***/ "./src/app/pages/propuesta_grado/propuesta_grado-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/propuesta_grado/propuesta_grado-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PropuestaGradoRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropuestaGradoRoutingModule", function() { return PropuestaGradoRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _propuesta_grado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propuesta_grado.component */ "./src/app/pages/propuesta_grado/propuesta_grado.component.ts");
/* harmony import */ var _list_propuesta_grado_list_propuesta_grado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-propuesta_grado/list-propuesta_grado.component */ "./src/app/pages/propuesta_grado/list-propuesta_grado/list-propuesta_grado.component.ts");
/* harmony import */ var _crud_propuesta_grado_crud_propuesta_grado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud-propuesta_grado/crud-propuesta_grado.component */ "./src/app/pages/propuesta_grado/crud-propuesta_grado/crud-propuesta_grado.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: _propuesta_grado_component__WEBPACK_IMPORTED_MODULE_2__["PropuestaGradoComponent"],
        children: [{
                path: 'list-propuesta_grado',
                component: _list_propuesta_grado_list_propuesta_grado_component__WEBPACK_IMPORTED_MODULE_3__["ListPropuestaGradoComponent"],
            }, {
                path: 'crud-propuesta_grado',
                component: _crud_propuesta_grado_crud_propuesta_grado_component__WEBPACK_IMPORTED_MODULE_4__["CrudPropuestaGradoComponent"],
            }],
    }];
var PropuestaGradoRoutingModule = /** @class */ (function () {
    function PropuestaGradoRoutingModule() {
    }
    PropuestaGradoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ],
        })
    ], PropuestaGradoRoutingModule);
    return PropuestaGradoRoutingModule;
}());

var routedComponents = [
    _propuesta_grado_component__WEBPACK_IMPORTED_MODULE_2__["PropuestaGradoComponent"],
    _list_propuesta_grado_list_propuesta_grado_component__WEBPACK_IMPORTED_MODULE_3__["ListPropuestaGradoComponent"],
    _crud_propuesta_grado_crud_propuesta_grado_component__WEBPACK_IMPORTED_MODULE_4__["CrudPropuestaGradoComponent"],
];


/***/ }),

/***/ "./src/app/pages/propuesta_grado/propuesta_grado.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/propuesta_grado/propuesta_grado.component.ts ***!
  \********************************************************************/
/*! exports provided: PropuestaGradoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropuestaGradoComponent", function() { return PropuestaGradoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PropuestaGradoComponent = /** @class */ (function () {
    function PropuestaGradoComponent() {
    }
    PropuestaGradoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-propuesta-grado-elements',
            template: "<router-outlet></router-outlet>",
        })
    ], PropuestaGradoComponent);
    return PropuestaGradoComponent;
}());



/***/ }),

/***/ "./src/app/pages/propuesta_grado/propuesta_grado.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/propuesta_grado/propuesta_grado.module.ts ***!
  \*****************************************************************/
/*! exports provided: PropuestaGradoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropuestaGradoModule", function() { return PropuestaGradoModule; });
/* harmony import */ var _propuesta_grado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propuesta_grado-routing.module */ "./src/app/pages/propuesta_grado/propuesta_grado-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@core/data/admisiones.service */ "./src/app/@core/data/admisiones.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _crud_propuesta_grado_crud_propuesta_grado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crud-propuesta_grado/crud-propuesta_grado.component */ "./src/app/pages/propuesta_grado/crud-propuesta_grado/crud-propuesta_grado.component.ts");
/* harmony import */ var _core_data_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@core/data/users.service */ "./src/app/@core/data/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PropuestaGradoModule = /** @class */ (function () {
    function PropuestaGradoModule() {
    }
    PropuestaGradoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                _propuesta_grado_routing_module__WEBPACK_IMPORTED_MODULE_0__["PropuestaGradoRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ],
            declarations: _propuesta_grado_routing_module__WEBPACK_IMPORTED_MODULE_0__["routedComponents"].slice(),
            providers: [
                _core_data_admisiones_service__WEBPACK_IMPORTED_MODULE_3__["AdmisionesService"],
                _core_data_users_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            ],
            exports: [
                _crud_propuesta_grado_crud_propuesta_grado_component__WEBPACK_IMPORTED_MODULE_7__["CrudPropuestaGradoComponent"],
            ],
        })
    ], PropuestaGradoModule);
    return PropuestaGradoModule;
}());



/***/ })

}]);
//# sourceMappingURL=inscripcion-inscripcion-module~propuesta_grado-propuesta_grado-module.js.map