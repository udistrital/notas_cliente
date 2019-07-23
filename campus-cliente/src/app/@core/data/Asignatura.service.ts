import{Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {} from '../../pages_docente/models/Asignatura'
@Injectable({
    providedIn:'root'
})
export class AsignaturaService{
    constructor(private http: HttpClient){}
    API_URI = 'http://localhost:3000/profesor';
    getAsignaturasDocente(id: string){
        return this.http.get(`${this.API_URI}/materias/${id}`);
    }
}
