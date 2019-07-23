import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocenteComponent } from './docente.component';
import { DocenteAsignaturaComponent } from './docente-asignatura/docente-asignatura.component';
import { AsignaturaNotaComponent} from './asignatura-nota/asignatura-nota.component';
const routes: Routes = [{
    path: '',
    component: DocenteComponent,
    children: [{
      path: 'list-docente-asignatura',
      component: DocenteAsignaturaComponent,
    },
    {
      path: 'list-asignatura-nota/:id',
      component: AsignaturaNotaComponent,
    }],
  }];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})

export class DocenteRoutingModule{}
export const routedComponents = [
    DocenteComponent,
    DocenteAsignaturaComponent,
    AsignaturaNotaComponent,
];