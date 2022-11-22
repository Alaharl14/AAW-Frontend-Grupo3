import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/model/reporte';
import { ReporteService } from 'src/app/service/reporte.service';

@Component({
  selector: 'app-reporte-buscar',
  templateUrl: './reporte-buscar.component.html',
  styleUrls: ['./reporte-buscar.component.css']
})
export class ReporteBuscarComponent implements OnInit {
  textoBuscar: string = ""

  constructor(private reporteService: ReporteService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: Reporte[] = [];
    this.reporteService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreReporte.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.reporteService.setLista(array);
    })

    /* buscar(e: any)  /* buscar en BD
    this.propietarioService.buscar(e.target.value).subscribe(data=>{
      this.propietarioService.setLista(data);
    });
    */
  }

}
