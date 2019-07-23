import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ProfesorAsignaturaNotaService } from '../../@core/data/Profesor_Asignatura_Nota.service';
import { Observable } from 'rxjs/Rx';
@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    userGroup: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    uid: string;
    error = '';
    docente: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private profesorAsignaturaNotaService: ProfesorAsignaturaNotaService) {
            this.userGroup = new FormGroup({
                User: new FormControl() 
              });
        }

    ngOnInit() {
    }

    onSubmit() {
        var val= this.userGroup.value;
        this.uid=val.User;
        console.log(this.uid);
        var data: any;
        this.submitted = true;
        this.loading = true;
        this.profesorAsignaturaNotaService.getInfoDocente(val.User)
            .subscribe(
                 data => {
                    localStorage.setItem('currentUserId', this.uid);
                    this.router.navigateByUrl(`/pages_docente/dashboard`);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}
