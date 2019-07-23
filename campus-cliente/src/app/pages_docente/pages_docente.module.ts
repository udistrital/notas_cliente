import { NgModule } from '@angular/core';
import { Pages_DocenteComponent } from './pages_docente.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { Pages_DocenteRoutingModule } from './pages_docente-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { SharedModule } from '../shared/shared.module';
import { ConfiguracionService } from '../@core/data/configuracion.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login';
const PAGES_COMPONENTS = [
  Pages_DocenteComponent,
];

@NgModule({
  imports: [
    Pages_DocenteRoutingModule,
    ThemeModule,
    DashboardModule,
    SharedModule,
    HttpClientModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    LoginComponent,
  ],
  providers: [
    ConfiguracionService,

  ],
})
export class Pages_DocenteModule {
}
