import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Pages_DocenteComponent } from './pages_docente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login';
const routes: Routes = [{
  path: '',
  component: Pages_DocenteComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'docente',
      loadChildren: './docente/docente.module#DocenteModule',
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ]},
  { path: 'user', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pages_DocenteRoutingModule {
}

