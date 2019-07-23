import { NgModule } from '@angular/core';
import { Pages_EstudianteComponent } from './pages_estudiante.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { Pages_EstudianteRoutingModule } from './pages_estudiante-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { SharedModule } from '../shared/shared.module';
import { ConfiguracionService } from '../@core/data/configuracion.service';
import { LoginComponent } from './login';
const PAGES_COMPONENTS = [
  Pages_EstudianteComponent,
];

@NgModule({
  imports: [
    Pages_EstudianteRoutingModule,
    ThemeModule,
    DashboardModule,
    SharedModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    LoginComponent,
  ],
  providers: [
    ConfiguracionService,
  ],
})
export class Pages_EstudianteModule {
}
