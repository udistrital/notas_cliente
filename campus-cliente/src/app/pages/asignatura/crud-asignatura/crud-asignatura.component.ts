
import { Asignatura } from './../../../@core/data/models/asignatura';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UbicacionesService } from '../../../@core/data/ubicaciones.service';
import { FORM_ASIGNATURA } from './form-asignatura';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-asignatura',
  templateUrl: './crud-asignatura.component.html',
  styleUrls: ['./crud-asignatura.component.scss'],
})
export class CrudAsignaturaComponent implements OnInit {
  config: ToasterConfig;
  asignatura_id: number;

  @Input('asignatura_id')
  set name(asignatura_id: number) {
    this.asignatura_id = asignatura_id;
    this.loadAsignatura();
  }

  @Output() eventChange = new EventEmitter();

  info_asignatura: Asignatura;
  formAsignatura: any;
  regAsignatura: any;
  clean: boolean;

  constructor(private translate: TranslateService, private ubicacionesService: UbicacionesService, private toasterService: ToasterService) {
    this.formAsignatura = FORM_ASIGNATURA;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formAsignatura.titulo = this.translate.instant('GLOBAL.asignatura');
    this.formAsignatura.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formAsignatura.campos.length; i++) {
      this.formAsignatura.campos[i].label = this.translate.instant('GLOBAL.' + this.formAsignatura.campos[i].label_i18n);
      this.formAsignatura.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formAsignatura.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formAsignatura.campos.length; index++) {
      const element = this.formAsignatura.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadAsignatura(): void {
    if (this.asignatura_id !== undefined && this.asignatura_id !== 0) {
      this.ubicacionesService.get('asignatura/?query=id:' + this.asignatura_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_asignatura = <Asignatura>res[0];
          }
        });
    } else  {
      this.info_asignatura = undefined;
      this.clean = !this.clean;
    }
  }

  updateAsignatura(asignatura: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Asignatura!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_asignatura = <Asignatura>asignatura;
        this.ubicacionesService.put('asignatura', this.info_asignatura)
          .subscribe(res => {
            this.loadAsignatura();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Asignatura updated');
          });
      }
    });
  }

  createAsignatura(asignatura: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Asignatura!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_asignatura = <Asignatura>asignatura;
        this.ubicacionesService.post('asignatura', this.info_asignatura)
          .subscribe(res => {
            this.info_asignatura = <Asignatura>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Asignatura created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadAsignatura();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_asignatura === undefined) {
        this.createAsignatura(event.data.Asignatura);
      } else {
        this.updateAsignatura(event.data.Asignatura);
      }
    }
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center'
      positionClass: 'toast-top-center',
      timeout: 5000,  // ms
      newestOnTop: true,
      tapToDismiss: false, // hide on click
      preventDuplicates: true,
      animation: 'slideDown', // 'fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'
      limit: 5,
    });
    const toast: Toast = {
      type: type, // 'default', 'info', 'success', 'warning', 'error'
      title: title,
      body: body,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

}
