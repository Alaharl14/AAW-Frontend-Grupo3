import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaComponent } from './page/cuenta/cuenta.component';
import { CuentaCreaeditaComponent } from './page/cuenta/cuenta-creaedita/cuenta-creaedita.component';
import { CiudadComponent } from './page/ciudad/ciudad.component';
import { CiudadCreaeditaComponent } from './page/ciudad/ciudad-creaedita/ciudad-creaedita.component';
import { CategoriaobjetoComponent } from './page/categoriaobjeto/categoriaobjeto.component';
import { CategoriaobjetoCreaeditaComponent } from './page/categoriaobjeto/categoriaobjeto-creaedita/categoriaobjeto-creaedita.component';
import { RecordatorioComponent } from './page/recordatorio/recordatorio.component';
import { RecordatorioCreaeditaComponent } from './page/recordatorio/recordatorio-creaedita/recordatorio-creaedita.component';
import { EstadoobjetoComponent } from './page/estadoobjeto/estadoobjeto.component';
import { EstadoobjetoCreaeditaComponent } from './page/estadoobjeto/estadoobjeto-creaedita/estadoobjeto-creaedita.component';
import { EstadoreporteComponent } from './page/estadoreporte/estadoreporte.component';
import { EstadoreporteCreaeditaComponent } from './page/estadoreporte/estadoreporte-creaedita/estadoreporte-creaedita.component';
import { DistritoComponent } from './page/distrito/distrito.component';
import { DistritoCreaeditaComponent } from './page/distrito/distrito-creaedita/distrito-creaedita.component';
import { ReporteComponent } from './page/reporte/reporte.component';
import { ReporteCreaeditaComponent } from './page/reporte/reporte-creaedita/reporte-creaedita.component';
import { ObjetoComponent } from './page/objeto/objeto.component';
import { ObjetoCreaeditaComponent } from './page/objeto/objeto-creaedita/objeto-creaedita.component';

const routes: Routes = [

  {
    path: 'cuenta', component: CuentaComponent, children:[
      { path: 'agregar', component: CuentaCreaeditaComponent },
      { path: 'edicion/:id', component: CuentaCreaeditaComponent }
    ]
  },
  {
    path: 'ciudad', component: CiudadComponent, children:[
      { path: 'agregar', component: CiudadCreaeditaComponent },
      { path: 'edicion/:id', component: CiudadCreaeditaComponent }
    ]
  },
  {
    path: 'distrito', component: DistritoComponent, children:[
      { path: 'agregar', component: DistritoCreaeditaComponent },
      { path: 'edicion/:id', component: DistritoCreaeditaComponent }
    ]
  },
  {
    path: 'categoriaobjeto', component: CategoriaobjetoComponent, children:[
      { path: 'agregar', component: CategoriaobjetoCreaeditaComponent },
      { path: 'edicion/:id', component: CategoriaobjetoCreaeditaComponent }
    ]
  },
  {
    path: 'recordatorio', component: RecordatorioComponent, children:[
      { path: 'agregar', component: RecordatorioCreaeditaComponent },
      { path: 'edicion/:id', component: RecordatorioCreaeditaComponent }
    ]
  },
  {
    path: 'estadoobjeto', component: EstadoobjetoComponent, children:[
      { path: 'agregar', component: EstadoobjetoCreaeditaComponent },
      { path: 'edicion/:id', component: EstadoobjetoCreaeditaComponent }
    ]
  },
  {
    path: 'estadoreporte', component: EstadoreporteComponent, children:[
      { path: 'agregar', component: EstadoreporteCreaeditaComponent },
      { path: 'edicion/:id', component: EstadoreporteCreaeditaComponent }
    ]
  },
  {
    path: 'reporte', component: ReporteComponent, children:[
      { path: 'agregar', component: ReporteCreaeditaComponent },
      { path: 'edicion/:id', component: ReporteCreaeditaComponent }
    ]
  },
  {
    path: 'objeto', component: ObjetoComponent, children:[
      { path: 'agregar', component: ObjetoCreaeditaComponent },
      { path: 'edicion/:id', component: ObjetoCreaeditaComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
