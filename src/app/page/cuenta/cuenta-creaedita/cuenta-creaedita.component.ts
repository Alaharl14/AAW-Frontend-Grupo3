import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Cuenta } from 'src/app/model/cuenta';
import { CuentaService } from 'src/app/service/cuenta.service';
import { Distrito } from 'src/app/model/distrito';
import { DistritoService } from 'src/app/service/distrito.service';

@Component({
  selector: 'app-cuenta-creaedita',
  templateUrl: './cuenta-creaedita.component.html',
  styleUrls: ['./cuenta-creaedita.component.css']
})
export class CuentaCreaeditaComponent implements OnInit {
  cuenta:Cuenta=new Cuenta();
  mensaje:string="";
  edicion:boolean=false;
  listaDistritos: Distrito[] = [];
  idDistritoSeleccionado: number = 0;
  id:number=0;
  mensaje1: string = "";

  constructor(private CuentaService:CuentaService,
    private router:Router,
    private route:ActivatedRoute,private distritoService: DistritoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.distritoService.listar().subscribe(data => { this.listaDistritos = data });
  }

  aceptar(): void {
    if (this.cuenta.nombreCuenta.length > 0 && 
      this.cuenta.contrasenaCuenta.length > 0 && 
      this.cuenta.correoCuenta.length>0 && 
      this.cuenta.numeroCuenta.length>0 &&  
      this.cuenta.direccionCuenta.length>0 && 
      this.idDistritoSeleccionado>0 ) { 
        let d = new Distrito();
        d.idDistrito = this.idDistritoSeleccionado;
        this.cuenta.distrito = d;
      if (this.edicion) {
        this.CuentaService.modificar(this.cuenta).subscribe(() => {
          this.CuentaService.listar().subscribe(data => {
            this.CuentaService.setLista(data);
        });
      });
      
    } else {
      this.CuentaService.insertar(this.cuenta).subscribe(() => {
        this.CuentaService.listar().subscribe(data => {
          this.CuentaService.setLista(data);
        });
      }, err => {
        //this.mensaje=err
        console.log(err);
      });
    }
      this.router.navigate(['cuenta']);

    } else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.CuentaService.listarId(this.id).subscribe(data => {
        this.cuenta = data;
        console.log(data);
        this.idDistritoSeleccionado = data.distrito.idDistrito;
      })
    }

  }

}
