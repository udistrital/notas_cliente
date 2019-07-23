import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
//import { UbicacionesService } from '../../../@core/data/ubicaciones.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import 'style-loader!angular2-toaster/toaster.css';
import {AsignaturaService} from '../../../@core/data/Asignatura.service';
import {Asignatura} from '../../models/Asignatura';
@Component({
  selector: 'ngx-docente-asignatura',
  templateUrl: './docente-asignatura.component.html',
  styleUrls: ['./docente-asignatura.component.scss']
})
export class DocenteAsignaturaComponent implements OnInit {
  private loadComponent = false;
  asignaturas: any = [];
  uid: string;
  cambiotab: boolean = false;
  config: ToasterConfig;
  settings: any;

  source: LocalDataSource = new LocalDataSource();

  constructor(private translate: TranslateService,  private toasterService: ToasterService, private asignaturaService: AsignaturaService, private router: Router, private route: ActivatedRoute) {
    this.loadData(localStorage.getItem('currentUserId'));
    this.cargarCampos();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.cargarCampos();
    });
  }

  ngOnInit() {
  }
  loadData(id: string): void {
    this.asignaturaService.getAsignaturasDocente(id).subscribe(res => {
      console.log(res);
      if (res !== null) {
        this.asignaturas = res;
        this.source.load(this.asignaturas);
          }
    });
  }
  cargarCampos(){
    this.settings = {
      hideSubHeader: true,
      actions: {
        add: false,
        delete: false,
        edit: false,
        custom: [
          {
            name: 'activate',
            title: '<i class="fa fa-eye"></i>', 
          }
        ],
        position: 'right'
      },
      columns: {
        codigo: {
          title: 'Código',
          addable: false,
          filter: false
        },
        nombre: {
          title: 'Nombre',
          addable: false,
          filter: false
        },
        numero_creditos: {
          title: 'Numero de créditos',
          addable: false,
          filter: false
        },
        proyecto_curricular: {
          title: 'Proyecto curricular',
          addable: false,
          filter: false
        },
        grupo:{
          title: 'Grupo',
          addable: false,
          filter: false
        },
        codigo_docente:{
          title: 'Código del docente',
          addable: false,
          filter: false
        }
      }
    };
  }
  onCustomAction(event){
    this.uid = event.data.codigo;
    console.log(this.uid);
    this.router.navigateByUrl(`/pages_docente/docente/list-asignatura-nota/${this.uid}`);
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
