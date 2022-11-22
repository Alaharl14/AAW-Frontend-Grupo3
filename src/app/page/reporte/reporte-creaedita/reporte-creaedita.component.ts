import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReporteService } from 'src/app/service/reporte.service';
import { Reporte } from 'src/app/model/reporte';
import { Objeto } from 'src/app/model/objeto';
import { ObjetoService } from 'src/app/service/objeto.service';
import { EstadoReporte } from 'src/app/model/estadoReporte';
import { EstadoReporteService } from 'src/app/service/estado-reporte.service';
import * as moment from 'moment';

@Component({
  selector: 'app-reporte-creaedita',
  templateUrl: './reporte-creaedita.component.html',
  styleUrls: ['./reporte-creaedita.component.css']
})
export class ReporteCreaeditaComponent implements OnInit {
  reporte : Reporte = new Reporte();
  mensaje: string = "";
  edicion: boolean = false;
  listaObjetos: Objeto[] = [];
  idObjetoSeleccionado: number = 0;
  listaEstadoReporte: EstadoReporte[] = [];
  idEstadoReporteSeleccionado: number = 0;
  id: number = 0;
  mensaje1: string = "";
  fechaSeleccionada: Date = moment().add(-0, 'days').toDate();
  maxFecha: Date = moment().add(-0, 'days').toDate();
  minFecha: Date = moment().subtract(-0, 'days').toDate();

  constructor(private reporteService: ReporteService,private router: Router,
    private route: ActivatedRoute,
    private objetoService: ObjetoService,
    private estadoreporteService: EstadoReporteService) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
      this.objetoService.listar().subscribe(data => { this.listaObjetos = data });
      this.estadoreporteService.listar().subscribe(data => { this.listaEstadoReporte = data });
    }

    aceptar(): void {
      if (this.reporte.nombreReporte.length > 0 && 
        this.reporte.descripcionReporte.length>0 &&  
        this.idObjetoSeleccionado>0 && 
        this.idEstadoReporteSeleccionado>0 ) { 
          let ob = new Objeto();
          ob.idObjeto = this.idObjetoSeleccionado;
         this.reporte.objeto = ob; 
        
         let est = new EstadoReporte();
         est.idEstadoReporte = this.idEstadoReporteSeleccionado;
         this.reporte.estadoreporte = est; 
         this.reporte.fechaReporte = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
        if (this.edicion) {
          this.reporteService.modificar(this.reporte).subscribe(() => {
            this.reporteService.listar().subscribe(data => {
              this.reporteService.setLista(data);
          })
        })
      } else {

        this.reporteService.insertar(this.reporte).subscribe(() => {
          this.reporteService.listar().subscribe(data => {
            this.reporteService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
        this.router.navigate(['reporte']);
      } else {
        this.mensaje1 = "Complete los valores requeridos";
      }
    }

    init() {
      if (this.edicion) {
        this.reporteService.listarId(this.id).subscribe(data => {
          this.reporte = data;
          console.log(data);
          this.idObjetoSeleccionado = data.objeto.idObjeto;
          this.idEstadoReporteSeleccionado = data.estadoreporte.idEstadoReporte;
        })
      }
  
    }

}
