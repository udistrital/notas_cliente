import{Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {} from '../../pages_docente/models/Asignatura'
@Injectable({
    providedIn:'root'
})
export class EstudianteAsignaturaService{
    constructor(private http: HttpClient){}
    API_URI = 'http://localhost:3000/estudiante';
    getEstudianteAsignaturasNota(id: string){
        return this.http.get(`${this.API_URI}/materias/${id}`);
    }
    getInfoEstudiante(id: string){
        return this.http.get(`${this.API_URI}/${id}`);
    }
}