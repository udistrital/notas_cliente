import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturaComponent } from './asignatura.component';
import { ListAsignaturaComponent } from './list-asignatura/list-asignatura.component';
import { CrudAsignaturaComponent } from './crud-asignatura/crud-asignatura.component';



const routes: Routes = [{
  path: '',
  component: AsignaturaComponent,
  children: [{
    path: 'list-asignatura',
    component: ListAsignaturaComponent,
  }, {
    path: 'crud-asignatura',
    component: CrudAsignaturaComponent,
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

export class AsignaturaRoutingModule { }

export const routedComponents = [
  AsignaturaComponent,
  ListAsignaturaComponent,
  CrudAsignaturaComponent,
];
