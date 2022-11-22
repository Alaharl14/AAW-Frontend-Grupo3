import { DateAdapter } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ObjetoService } from 'src/app/service/objeto.service';
import { Objeto } from 'src/app/model/objeto';
import { Cuenta } from 'src/app/model/cuenta';
import { CuentaService } from 'src/app/service/cuenta.service';
import { Recordatorio } from 'src/app/model/recordatorio';
import { RecordatorioService } from 'src/app/service/recordatorio.service';
import { CategoriaObjeto } from 'src/app/model/categoriaObjeto';
import { CategoriaObjetoService } from 'src/app/service/categoria-objeto.service';
import { EstadoObjeto } from 'src/app/model/estadoObjeto';
import { EstadoObjetoService } from 'src/app/service/estado-objeto.service';
import * as moment from 'moment';

@Component({
  selector: 'app-objeto-creaedita',
  templateUrl: './objeto-creaedita.component.html',
  styleUrls: ['./objeto-creaedita.component.css']
})
export class ObjetoCreaeditaComponent implements OnInit {
  objeto : Objeto = new Objeto();
  mensaje: string = "";
  edicion: boolean = false;
  listaCuentas: Cuenta[] = [];
  idCuentaSeleccionado: number = 0;
  listaRecordatorios: Recordatorio[] = [];
  idRecordatorioSeleccionado: number = 0;
  listaCategoriaObjeto: CategoriaObjeto[] = [];
  idCategoriaObjetoSeleccionado: number = 0;
  listaEstadoObjeto: EstadoObjeto[] = [];
  idEstadoObjetoSeleccionado: number = 0;
  id: number = 0;
  mensaje1: string = "";
  fechaSeleccionada: Date = moment().add(-0, 'days').toDate();
  maxFecha: Date = moment().add(-0, 'days').toDate();
  minFecha: Date = moment().subtract(-0, 'days').toDate();

  constructor(private objetoService: ObjetoService,private router: Router,
    private route: ActivatedRoute,private cuentaService: CuentaService,
    private recordatorioService: RecordatorioService,
    private categoriaobjetoService: CategoriaObjetoService,
    private estadoobjetoService: EstadoObjetoService) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
      this.cuentaService.listar().subscribe(data => { this.listaCuentas = data });
      this.recordatorioService.listar().subscribe(data => { this.listaRecordatorios = data });
      this.categoriaobjetoService.listar().subscribe(data => { this.listaCategoriaObjeto = data });
      this.estadoobjetoService.listar().subscribe(data => { this.listaEstadoObjeto = data });
      
    }

    aceptar(): void {
      if (this.objeto.nombreObjeto.length > 0 &&
        this.objeto.distancia.length>0 &&
        this.objeto.distanciaLimite.length>0 &&
        this.objeto.ubicacion.length>0 &&
        this.idCuentaSeleccionado>0 && 
        this.idRecordatorioSeleccionado>0 && 
        this.idCategoriaObjetoSeleccionado>0 && 
        this.idEstadoObjetoSeleccionado>0 ) {   

          let cu = new Cuenta();
        cu.idCuenta = this.idCuentaSeleccionado;
        this.objeto.cuenta = cu;  

        let re = new Recordatorio();
        re.idRecordatorio = this.idRecordatorioSeleccionado;
        this.objeto.recordatorio = re;  

        let ca = new CategoriaObjeto();
        ca.idCategoriaObjeto = this.idCategoriaObjetoSeleccionado;
        this.objeto.categoriaObjeto = ca;  

        let es = new EstadoObjeto();
        es.idEstadoObjeto = this.idEstadoObjetoSeleccionado;
        this.objeto.estadoObjeto = es;  
        this.objeto.fechaRegistrado = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
;
        if (this.edicion) {
          this.objetoService.modificar(this.objeto).subscribe(() => {
            this.objetoService.listar().subscribe(data => {
              this.objetoService.setLista(data);
          })
        })
      } else {

        this.objetoService.insertar(this.objeto).subscribe(() => {
          this.objetoService.listar().subscribe(data => {
            this.objetoService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
        this.router.navigate(['objeto']);
      } else {
        this.mensaje1 = "Complete los valores requeridos";
      }
    }

    init() {
      if (this.edicion) {
        this.objetoService.listarId(this.id).subscribe(data => {
          this.objeto = data;
          console.log(data);
          this.idCuentaSeleccionado = data.cuenta.idCuenta;
          this.idRecordatorioSeleccionado = data.recordatorio.idRecordatorio;
          this.idCategoriaObjetoSeleccionado = data.categoriaObjeto.idCategoriaObjeto;
          this.idEstadoObjetoSeleccionado = data.estadoObjeto.idEstadoObjeto;
        })
      }
  
    }

}
