import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UbicacionesService } from '../../../@core/data/ubicaciones.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';
import { ActivatedRoute } from "@angular/router";
import {EstudianteAsignaturaService} from '../../../@core/data/Estudiante_Asignatura.service';
@Component({
  selector: 'ngx-list-estudiante',
  templateUrl: './list-estudiante.component.html',
  styleUrls: ['./list-estudiante.component.scss'],
  })
export class ListEstudianteComponent implements OnInit {
  notas: any = [];
  uid: number;
  cambiotab: boolean = false;
  config: ToasterConfig;
  settings: any;

  source: LocalDataSource = new LocalDataSource();

  constructor(private translate: TranslateService, private ubicacionesService: UbicacionesService, private toasterService: ToasterService, private estudianteasignaturaService: EstudianteAsignaturaService, private router: ActivatedRoute ) {
    this.loadData(localStorage.getItem('currentUserId'));
    this.cargarCampos();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.cargarCampos();
    });
  }
  loadData(id: string): void {
    this.estudianteasignaturaService.getEstudianteAsignaturasNota(id).subscribe(res => {
      if (res !== null) {
        this.notas = res;
        this.source.load(this.notas);
          }
    });
  }
  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('listestudiante').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    //popupWin.document.open();
    popupWin.document.write('<html><head>');
    popupWin.document.write('<style type="text/css">');
    popupWin.document.write('nb-card-header {color:#36304a; font-size: 1.2rem; font-weight: bold;}');
    popupWin.document.write('a:link,a:visited, a:hover, a:active {text-decoration: none; color:white}');
    popupWin.document.write('table { border-spacing: 1;border-collapse: collapse;background: white;border-radius: 10px;overflow: hidden;width: 100%;margin: 0 auto;position: relative;}');
    popupWin.document.write('table, td, th {border: 1px solid black; }');
    popupWin.document.write('table * { position: relative;} table td, table th {padding-left: 8px;} table thead tr {height: 60px;background: #36304a;} table tbody tr {height: 50px;}');
    popupWin.document.write('table td, table th {text-align: left;} table td.l, table th.l {text-align: right;} table td.c, table th.c {text-align: center;} table td.r, table th.r {text-align: center;}');
    popupWin.document.write('button { color:white; border-color:black; background: #36304a; display: inline-block; margin-bottom: 0; text-align: center; text-transform: uppercase; vertical-align: middle; cursor: pointer; background-image: none; whitespace: nowrap; padding: 6px 12px; font-size: 1.2rem; border-radius: 3px; border: 1px solid transparent; text-decoration: none; user-select: none;}');
    popupWin.document.write('button:hover {background-color: #6a5e91;}');
    popupWin.document.write('</style>');
    popupWin.document.write('</head>');
    popupWin.document.write('<body onload="window.print()">'  + printContents + '</html>');
    popupWin.document.close();
  }
  cargarCampos(){
    this.settings ={
      hideSubHeader: true,
      actions: {
        add: false,
        delete: false,
        edit: false,
        position: 'right'
      },
      columns: {
        codigo:{
          title: 'Código',
          addable: false,
          editable: false,
        },
        nombre:{
          title: 'Nombre',
          addable: false,
          editable: false,
        },
        grupo:{
          title: 'Grupo',
          addable: false,
          editable: false,
        },
        nota1:{
          title: 'Nota 1',
          addable: false,
          editable: false,
        },
        porcentaje1:{
          title: '%',
          addable: false,
          editable: false,
        },
        nota2:{
          title: 'Nota 2',
          addable: false,
          editable: false,
        },
        porcentaje2:{
          title: '%',
          addable: false,
          editable: false,
        },
        nota3:{
          title: 'Nota 3',
          addable: false,
          editable: false,
        },
        porcentaje3:{
          title: '%',
          addable: false,
          editable: false,
        },
        nota4:{
          title: 'Nota 4',
          addable: false,
          editable: false,
        },
        porcentaje4:{
          title: '%',
          addable: false,
          editable: false,
        },
        nota5:{
          title: 'Nota 5',
          addable: false,
          editable: false,
        },
        porcentaje5:{
          title: '%',
          addable: false,
          editable: false,
        },
        nota6:{
          title: 'Nota 6',
          addable: false,
          editable: false,
        },
        porcentaje6:{
          title: '%',
          addable: false,
          editable: false,
        },
        laboratorio:{
          title: 'Laboratorio',
          addable: false,
          editable: false,
        },
        porcentaje_lab:{
          title: '%',
          addable: false,
          editable: false,
        },
        examen_final:{
          title: 'Examen Final',
          addable: false,
          editable: false,
        },
        porcentaje_ex:{
          title: '%',
          addable: false,
          editable: false,
        },
        habilitacion:{
          title: 'Habilitación',
          addable: false,
          editable: false,
        },
        porcentaje_hab:{
          title: '%',
          addable: false,
          editable: false,
        },
        definitiva:{
          title: 'Definitiva',
          addable: false,
          editable: false,
        }
      }
    };
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
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
