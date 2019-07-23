import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudianteComponent } from './estudiante.component';
import { ListEstudianteComponent } from './list-estudiante/list-estudiante.component';

const routes: Routes = [{
  path: '',
  component: EstudianteComponent,
  children: [{
    path: 'list-estudiante',
    component: ListEstudianteComponent,
  },],
}];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
  ],
  exports: [
      RouterModule,
  ],
})

export class EstudianteRoutingModule { }

export const routedComponents = [
  EstudianteComponent,
  ListEstudianteComponent,
];
