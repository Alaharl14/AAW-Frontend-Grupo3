import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CuentaComponent } from './page/cuenta/cuenta.component';
import { CuentaCreaeditaComponent } from './page/cuenta/cuenta-creaedita/cuenta-creaedita.component';
import { CuentaListarComponent } from './page/cuenta/cuenta-listar/cuenta-listar.component';
import { CuentaBuscarComponent } from './page/cuenta/cuenta-buscar/cuenta-buscar.component';
import { CuentaDialogoComponent } from './page/cuenta/cuenta-listar/cuenta-dialogo/cuenta-dialogo.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { CiudadComponent } from './page/ciudad/ciudad.component';
import { CiudadListarComponent } from './page/ciudad/ciudad-listar/ciudad-listar.component';
import { CiudadCreaeditaComponent } from './page/ciudad/ciudad-creaedita/ciudad-creaedita.component';
import { CiudadBuscarComponent } from './page/ciudad/ciudad-buscar/ciudad-buscar.component';
import { CiudadDialogoComponent } from './page/ciudad/ciudad-listar/ciudad-dialogo/ciudad-dialogo.component';
import { CategoriaobjetoComponent } from './page/categoriaobjeto/categoriaobjeto.component';
import { CategoriaobjetoListarComponent } from './page/categoriaobjeto/categoriaobjeto-listar/categoriaobjeto-listar.component';
import { CategoriaobjetoDialogoComponent } from './page/categoriaobjeto/categoriaobjeto-listar/categoriaobjeto-dialogo/categoriaobjeto-dialogo.component';
import { CategoriaobjetoCreaeditaComponent } from './page/categoriaobjeto/categoriaobjeto-creaedita/categoriaobjeto-creaedita.component';
import { CategoriaobjetoBuscarComponent } from './page/categoriaobjeto/categoriaobjeto-buscar/categoriaobjeto-buscar.component';
import { RecordatorioComponent } from './page/recordatorio/recordatorio.component';
import { RecordatorioListarComponent } from './page/recordatorio/recordatorio-listar/recordatorio-listar.component';
import { RecordatorioDialogoComponent } from './page/recordatorio/recordatorio-listar/recordatorio-dialogo/recordatorio-dialogo.component';
import { RecordatorioCreaeditaComponent } from './page/recordatorio/recordatorio-creaedita/recordatorio-creaedita.component';
import { RecordatorioBuscarComponent } from './page/recordatorio/recordatorio-buscar/recordatorio-buscar.component';
import { EstadoobjetoComponent } from './page/estadoobjeto/estadoobjeto.component';
import { EstadoobjetoListarComponent } from './page/estadoobjeto/estadoobjeto-listar/estadoobjeto-listar.component';
import { EstadoobjetoDialogoComponent } from './page/estadoobjeto/estadoobjeto-listar/estadoobjeto-dialogo/estadoobjeto-dialogo.component';
import { EstadoobjetoCreaeditaComponent } from './page/estadoobjeto/estadoobjeto-creaedita/estadoobjeto-creaedita.component';
import { EstadoobjetoBuscarComponent } from './page/estadoobjeto/estadoobjeto-buscar/estadoobjeto-buscar.component';
import { EstadoreporteComponent } from './page/estadoreporte/estadoreporte.component';
import { EstadoreporteListarComponent } from './page/estadoreporte/estadoreporte-listar/estadoreporte-listar.component';
import { EstadoreporteDialogoComponent } from './page/estadoreporte/estadoreporte-listar/estadoreporte-dialogo/estadoreporte-dialogo.component';
import { EstadoreporteCreaeditaComponent } from './page/estadoreporte/estadoreporte-creaedita/estadoreporte-creaedita.component';
import { EstadoreporteBuscarComponent } from './page/estadoreporte/estadoreporte-buscar/estadoreporte-buscar.component';
import { DistritoComponent } from './page/distrito/distrito.component';
import { DistritoListarComponent } from './page/distrito/distrito-listar/distrito-listar.component';
import { DistritoDialogoComponent } from './page/distrito/distrito-listar/distrito-dialogo/distrito-dialogo.component';
import { DistritoCreaeditaComponent } from './page/distrito/distrito-creaedita/distrito-creaedita.component';
import { DistritoBuscarComponent } from './page/distrito/distrito-buscar/distrito-buscar.component';
import { ReporteComponent } from './page/reporte/reporte.component';
import { ReporteListarComponent } from './page/reporte/reporte-listar/reporte-listar.component';
import { ReporteDialogoComponent } from './page/reporte/reporte-listar/reporte-dialogo/reporte-dialogo.component';
import { ReporteCreaeditaComponent } from './page/reporte/reporte-creaedita/reporte-creaedita.component';
import { ReporteBuscarComponent } from './page/reporte/reporte-buscar/reporte-buscar.component';
import { ObjetoComponent } from './page/objeto/objeto.component';
import { ObjetoListarComponent } from './page/objeto/objeto-listar/objeto-listar.component';
import { ObjetoDialogoComponent } from './page/objeto/objeto-listar/objeto-dialogo/objeto-dialogo.component';
import { ObjetoCreaeditaComponent } from './page/objeto/objeto-creaedita/objeto-creaedita.component';
import { ObjetoBuscarComponent } from './page/objeto/objeto-buscar/objeto-buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    CuentaComponent,
    CuentaCreaeditaComponent,
    CuentaListarComponent,
    CuentaBuscarComponent,
    CuentaDialogoComponent,
    CiudadComponent,
    CiudadListarComponent,
    CiudadCreaeditaComponent,
    CiudadBuscarComponent,
    CiudadDialogoComponent,
    CategoriaobjetoComponent,
    CategoriaobjetoListarComponent,
    CategoriaobjetoDialogoComponent,
    CategoriaobjetoCreaeditaComponent,
    CategoriaobjetoBuscarComponent,
    RecordatorioComponent,
    RecordatorioListarComponent,
    RecordatorioDialogoComponent,
    RecordatorioCreaeditaComponent,
    RecordatorioBuscarComponent,
    EstadoobjetoComponent,
    EstadoobjetoListarComponent,
    EstadoobjetoDialogoComponent,
    EstadoobjetoCreaeditaComponent,
    EstadoobjetoBuscarComponent,
    EstadoreporteComponent,
    EstadoreporteListarComponent,
    EstadoreporteDialogoComponent,
    EstadoreporteCreaeditaComponent,
    EstadoreporteBuscarComponent,
    DistritoComponent,
    DistritoListarComponent,
    DistritoDialogoComponent,
    DistritoCreaeditaComponent,
    DistritoBuscarComponent,
    ReporteComponent,
    ReporteListarComponent,
    ReporteDialogoComponent,
    ReporteCreaeditaComponent,
    ReporteBuscarComponent,
    ObjetoComponent,
    ObjetoListarComponent,
    ObjetoDialogoComponent,
    ObjetoCreaeditaComponent,
    ObjetoBuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    HttpClientModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
