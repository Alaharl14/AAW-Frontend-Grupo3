import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ciudad } from 'src/app/model/ciudad';
import { CiudadService } from 'src/app/service/ciudad.service';

@Component({
  selector: 'app-ciudad-creaedita',
  templateUrl: './ciudad-creaedita.component.html',
  styleUrls: ['./ciudad-creaedita.component.css']
})
export class CiudadCreaeditaComponent implements OnInit {
  ciudad : Ciudad = new Ciudad();
  id: number = 0;
  edicion: boolean = false;
  mensaje: string = "";

  constructor(private ciudadService: CiudadService,private router: Router,
    private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
      
    }

    aceptar(): void {
      if (this.ciudad.nombreCiudad.length > 0 ) {   
        if (this.edicion) {
          this.ciudadService.modificar(this.ciudad).subscribe(() => {
            this.ciudadService.listar().subscribe(data => {
              this.ciudadService.setLista(data);
          })
        })
      } else {

        this.ciudadService.insertar(this.ciudad).subscribe(() => {
          this.ciudadService.listar().subscribe(data => {
            this.ciudadService.setLista(data);
          });
        });
      }
        this.router.navigate(['ciudad']);
      } else {
        this.mensaje = "Complete los valores requeridos";
      }
    }

    init() {  
      if (this.edicion) {
        this.ciudadService.listarId(this.id).subscribe(data => {
          this.ciudad = data;
          console.log(data);
        })
      }
  
    }

}
