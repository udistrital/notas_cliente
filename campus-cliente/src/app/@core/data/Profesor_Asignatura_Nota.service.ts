import{Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {} from '../../pages_docente/models/Asignatura'
@Injectable({
    providedIn:'root'
})
export class ProfesorAsignaturaNotaService{
    constructor(private http: HttpClient){}
    API_URI = 'http://localhost:3000/profesor/materias';
    getDocenteAsignaturasNota(id: string){
        return this.http.get(`${this.API_URI}/nota/${id}`);
    }
    putAsignaturaNota(id: string, body: any){
        return this.http.put(`${this.API_URI}/nota/${id}`,body);
    }
    getInfoDocente(id:string){
        return this.http.get(`${this.API_URI}/${id}`);
    }
}