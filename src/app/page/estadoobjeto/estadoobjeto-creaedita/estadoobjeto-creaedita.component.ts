import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EstadoObjeto } from 'src/app/model/estadoObjeto';
import { EstadoObjetoService } from 'src/app/service/estado-objeto.service';

@Component({
  selector: 'app-estadoobjeto-creaedita',
  templateUrl: './estadoobjeto-creaedita.component.html',
  styleUrls: ['./estadoobjeto-creaedita.component.css']
})
export class EstadoobjetoCreaeditaComponent implements OnInit {
  estadoobjeto : EstadoObjeto = new EstadoObjeto();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private estadoobjetoService: EstadoObjetoService,private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
    }

    aceptar(): void {
      if (this.estadoobjeto.nombreEstadoObjeto.length > 0 ) {   
        if (this.edicion) {
          this.estadoobjetoService.modificar(this.estadoobjeto).subscribe(() => {
            this.estadoobjetoService.listar().subscribe(data => {
              this.estadoobjetoService.setLista(data);
          });
        });
      } else {

        this.estadoobjetoService.insertar(this.estadoobjeto).subscribe(() => {
          this.estadoobjetoService.listar().subscribe(data => {
            this.estadoobjetoService.setLista(data);
          });
        });
      }
        this.router.navigate(['estadoobjeto']);
      } else {
        this.mensaje = "Complete los valores requeridos";
      }
    }

    init() {
      if (this.edicion) {
        this.estadoobjetoService.listarId(this.id).subscribe(data => {
          this.estadoobjeto = data;
          console.log(data);
        });
      }
  
    }

}
