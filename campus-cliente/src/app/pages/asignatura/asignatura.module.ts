import { AsignaturaRoutingModule, routedComponents } from './asignatura-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { UbicacionesService } from '../../@core/data/ubicaciones.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudAsignaturaComponent } from './crud-asignatura/crud-asignatura.component';

@NgModule({
  imports: [
    ThemeModule,
    AsignaturaRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    UbicacionesService,
  ],
  exports: [
    CrudAsignaturaComponent,
  ],
})
export class AsignaturaModule { }
