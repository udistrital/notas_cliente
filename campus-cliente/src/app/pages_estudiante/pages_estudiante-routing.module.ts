import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Pages_EstudianteComponent } from './pages_estudiante.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login';
const routes: Routes = [{
  path: '',
  component: Pages_EstudianteComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'estudiante',
      loadChildren: './estudiante/estudiante.module#EstudianteModule',
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
},
{ path: 'user', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pages_EstudianteRoutingModule {
}

