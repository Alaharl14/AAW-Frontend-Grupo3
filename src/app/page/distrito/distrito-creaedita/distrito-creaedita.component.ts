import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Distrito } from 'src/app/model/distrito';
import { DistritoService } from 'src/app/service/distrito.service';
import { Ciudad } from 'src/app/model/ciudad';
import { CiudadService } from 'src/app/service/ciudad.service';
import * as moment from 'moment';

@Component({
  selector: 'app-distrito-creaedita',
  templateUrl: './distrito-creaedita.component.html',
  styleUrls: ['./distrito-creaedita.component.css']
})
export class DistritoCreaeditaComponent implements OnInit {
  distrito : Distrito = new Distrito();
  mensaje: string = "";
  edicion: boolean = false;
  listaCiudades: Ciudad[] = [];
  idCiudadSeleccionado: number = 0;
  id: number = 0;
  mensaje1: string = "";

  constructor(private distritoService: DistritoService,private router: Router,
    private route: ActivatedRoute,private ciudadService: CiudadService) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
      this.ciudadService.listar().subscribe(data => { this.listaCiudades = data });
    }

    aceptar(): void {
      if (this.distrito.nombreDistrito.length > 0 && 
        this.idCiudadSeleccionado>0 ) {
        let c = new Ciudad();
        c.idCiudad = this.idCiudadSeleccionado;
        this.distrito.ciudad = c;   
        if (this.edicion) {
          this.distritoService.modificar(this.distrito).subscribe(() => {
            this.distritoService.listar().subscribe(data => {
              this.distritoService.setLista(data);
          });
        });
      } else {
        this.distritoService.insertar(this.distrito).subscribe(() => {
          this.distritoService.listar().subscribe(data => {
            this.distritoService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });      
      }
        this.router.navigate(['distrito']);
      } else {
        this.mensaje1 = "Complete los valores requeridos";
      }
    }

    init() {
      if (this.edicion) {
        this.distritoService.listarId(this.id).subscribe(data => {
          this.distrito = data;
          console.log(data);
          this.idCiudadSeleccionado = data.ciudad.idCiudad;
        })
      }
  
    }

}
