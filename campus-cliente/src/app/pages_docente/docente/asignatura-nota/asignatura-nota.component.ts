import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ActivatedRoute } from "@angular/router";
//import { UbicacionesService } from '../../../@core/data/ubicaciones.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import 'style-loader!angular2-toaster/toaster.css';
import {ProfesorAsignaturaNotaService} from '../../../@core/data/Profesor_Asignatura_Nota.service';
import {Docente_notaAsignatura} from '../../models/Docente_notaAsignatura';
import {Router} from '@angular/router';
@Component({
  selector: 'ngx-asignatura-nota',
  templateUrl: './asignatura-nota.component.html',
  styleUrls: ['./asignatura-nota.component.scss']
})
export class AsignaturaNotaComponent implements OnInit{
  notas: any = [];
  uid: string;
  cambiotab: boolean = false;
  config: ToasterConfig;
  settings: any;

  source: LocalDataSource = new LocalDataSource();

  constructor(private translate: TranslateService,  private toasterService: ToasterService, private profesorasignaturanotaService: ProfesorAsignaturaNotaService, private router: ActivatedRoute, private route: Router) {
    this.router.params.subscribe(params => this.loadData(params.id));
    this.cargarCampos();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.cargarCampos();
    });
  }

  ngOnInit() {
  }
  loadData(id: string): void {
    this.profesorasignaturanotaService.getDocenteAsignaturasNota(id).subscribe(res => {
      console.log(res);
      if (res !== null) {
        this.notas = res;
        this.source.load(this.notas);
          }
    });
  }
  cargarCampos(){
    this.settings ={
      hideSubHeader: true,
      actions: {
        add: false,
        delete: false,
        edit: true,
        position: 'right'
      },
      edit: {
        confirmSave: true,
        mode: 'inline',
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      columns: {
        codigo:{
          title: 'Código',
          compareFunction:(direction: any, a: any, b: any) => {
            // Converting strings to lowercase
            let first = typeof a === 'string' ? a.toLowerCase() : a;
            let second = typeof b === 'string' ? b.toLowerCase() : b;

            if (first < second) {
                return -1 * direction;
            }
            if (first > second) {
                return direction;
            }
            return 0;
        },
          addable: false,
          editable: false,
        },
        nombre:{
          title: 'Nombre',
          addable: false,
          editable: false,
        },
        apellido:{
          title: 'Apellido',
          addable: false,
          editable: false,
        },
        nota1:{
          title: 'Nota 1',
          addable: false,
        },
        porcentaje1:{
          title: '%',
          addable: false,
        },
        nota2:{
          title: 'Nota 2',
          addable: false,
        },
        porcentaje2:{
          title: '%',
          addable: false,
        },
        nota3:{
          title: 'Nota 3',
          addable: false,
        },
        porcentaje3:{
          title: '%',
          addable: false,
        },
        nota4:{
          title: 'Nota 4',
          addable: false,
        },
        porcentaje4:{
          title: '%',
          addable: false,
        },
        nota5:{
          title: 'Nota 5',
          addable: false,
        },
        porcentaje5:{
          title: '%',
          addable: false,
        },
        nota6:{
          title: 'Nota 6',
          addable: false,
        },
        porcentaje6:{
          title: '%',
          addable: false,
        },
        laboratorio:{
          title: 'Laboratorio',
          addable: false,
        },
        porcentaje_lab:{
          title: '%',
          addable: false,
          editable: false
        },
        examen_final:{
          title: 'Examen Final',
          addable: false,
        },
        porcentaje_ex:{
          title: '%',
          addable: false,
          editable: false
        },
        habilitacion:{
          title: 'Habilitación',
          addable: false,
        },
        porcentaje_hab:{
          title: '%',
          addable: false,
          editable: false
        },
        definitiva:{
          title: 'Definitiva',
          addable: false,
          editable: false,
        }
      }
    };
  }
  onClick(){
    this.uid;
    this.route.navigateByUrl(`/pages_docente/docente/list-docente-asignatura`);
  }
  onEditConfirm(event) {
    var datos;
    var definitiva;
    if(parseInt(event.newData.habilitacion)===0){
      definitiva=Math.round((parseInt(event.newData.nota1)*(parseInt(event.newData.porcentaje1)/100))+
      (parseInt(event.newData.nota2)*(parseInt(event.newData.porcentaje2)/100))+
      (parseInt(event.newData.nota3)*(parseInt(event.newData.porcentaje3)/100))+
      (parseInt(event.newData.nota4)*(parseInt(event.newData.porcentaje4)/100))+
      (parseInt(event.newData.nota5)*(parseInt(event.newData.porcentaje5)/100))+
      (parseInt(event.newData.nota6)*(parseInt(event.newData.porcentaje6)/100))+
      (parseInt(event.newData.laboratorio)*(parseInt(event.newData.porcentaje_lab)/100))+
      (parseInt(event.newData.examen_final)*(parseInt(event.newData.porcentaje_ex)/100)));
      datos = {"nota1": event.newData.nota1,
      "porcentaje1": event.newData.porcentaje1,
      "nota2": event.newData.nota2,
      "porcentaje2": event.newData.porcentaje2,
      "nota3": event.newData.nota3,
      "porcentaje3":event.newData.porcentaje3,
      "nota4":event.newData.nota4,
      "porcentaje4":event.newData.porcentaje4,
      "nota5":event.newData.nota5,
      "porcentaje5": event.newData.porcentaje5,
      "nota6":event.newData.nota6,
      "porcentaje6":event.newData.porcentaje6,
      "laboratorio":event.newData.laboratorio,
      "porcentaje_lab":20,
      "examen_final":event.newData.examen_final,
      "porcentaje_ex":30,
      "habilitacion":event.newData.habilitacion,
      "porcentaje_hab":70,
      "definitiva":definitiva
      };
    }else{
      definitiva =Math.round((parseInt(event.newData.examen_final)*(parseInt(event.newData.porcentaje_ex)/100))+
      (parseInt(event.newData.habilitacion)*(parseInt(event.newData.porcentaje_hab)/100)));
      if(definitiva )
      datos = {"nota1": event.newData.nota1,
      "porcentaje1": event.newData.porcentaje1,
      "nota2": event.newData.nota2,
      "porcentaje2": event.newData.porcentaje2,
      "nota3": event.newData.nota3,
      "porcentaje3":event.newData.porcentaje3,
      "nota4":event.newData.nota4,
      "porcentaje4":event.newData.porcentaje4,
      "nota5":event.newData.nota5,
      "porcentaje5": event.newData.porcentaje5,
      "nota6":event.newData.nota6,
      "porcentaje6":event.newData.porcentaje6,
      "laboratorio":event.newData.laboratorio,
      "porcentaje_lab":20,
      "examen_final":event.newData.examen_final,
      "porcentaje_ex": 30,
      "habilitacion":event.newData.habilitacion,
      "porcentaje_hab":70,
      "definitiva":definitiva
      };
    }
      console.log(datos);
  this.profesorasignaturanotaService.putAsignaturaNota(event.data.codigo, datos).subscribe(
        res => {
          console.log(res);
          event.newData.definitiva=definitiva;
          event.confirm.resolve(event.newData);
      },
      (err: any) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
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