import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EstadoReporte } from 'src/app/model/estadoReporte';
import { EstadoReporteService } from 'src/app/service/estado-reporte.service';

@Component({
  selector: 'app-estadoreporte-creaedita',
  templateUrl: './estadoreporte-creaedita.component.html',
  styleUrls: ['./estadoreporte-creaedita.component.css']
})
export class EstadoreporteCreaeditaComponent implements OnInit {
  estadoreporte : EstadoReporte = new EstadoReporte();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private estadoreporteService: EstadoReporteService,private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
    }

    aceptar(): void {
      if (this.estadoreporte.nombreEstadoReporte.length > 0 ) {   
        if (this.edicion) {
          this.estadoreporteService.modificar(this.estadoreporte).subscribe(() => {
            this.estadoreporteService.listar().subscribe(data => {
              this.estadoreporteService.setLista(data);
          });
        });
      } else {

        this.estadoreporteService.insertar(this.estadoreporte).subscribe(() => {
          this.estadoreporteService.listar().subscribe(data => {
            this.estadoreporteService.setLista(data);
          });
        });
      }
        this.router.navigate(['estadoreporte']);
      } else {
        this.mensaje = "Complete los valores requeridos";
      }
    }

    init() {
      if (this.edicion) {
        this.estadoreporteService.listarId(this.id).subscribe(data => {
          this.estadoreporte = data;
          console.log(data);
        })
      }
  
    }

}
