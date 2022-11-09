import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recordatorio } from 'src/app/model/recordatorio';
import { RecordatorioService } from './../../../service/recordatorio.service';

@Component({
  selector: 'app-recordatorio-creaedita',
  templateUrl: './recordatorio-creaedita.component.html',
  styleUrls: ['./recordatorio-creaedita.component.css']
})
export class RecordatorioCreaeditaComponent implements OnInit {
  recordatorio : Recordatorio = new Recordatorio();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private recordatorioService: RecordatorioService,private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
    }

    aceptar(): void {
      if (this.recordatorio.estadoRecordatorio.length > 0 ) {   
        if (this.edicion) {
          this.recordatorioService.modificar(this.recordatorio).subscribe(() => {
            this.recordatorioService.listar().subscribe(data => {
              this.recordatorioService.setLista(data);
          })
        })
      } else {

        this.recordatorioService.insertar(this.recordatorio).subscribe(() => {
          this.recordatorioService.listar().subscribe(data => {
            this.recordatorioService.setLista(data);
          });
        });
        
      }
        this.router.navigate(['recordatorio']);
      } else {
        this.mensaje = "Complete los valores requeridos";
      }
    }

    init() {
      if (this.edicion) {
        this.recordatorioService.listarId(this.id).subscribe(data => {
          this.recordatorio = data;
          console.log(data);
        })
      }
  
    }

}
