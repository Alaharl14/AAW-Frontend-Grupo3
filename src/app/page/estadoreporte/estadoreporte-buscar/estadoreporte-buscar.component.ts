import { Component, OnInit } from '@angular/core';
import { EstadoReporte } from 'src/app/model/estadoReporte';
import { EstadoReporteService } from 'src/app/service/estado-reporte.service';

@Component({
  selector: 'app-estadoreporte-buscar',
  templateUrl: './estadoreporte-buscar.component.html',
  styleUrls: ['./estadoreporte-buscar.component.css']
})
export class EstadoreporteBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private estadoreporteService: EstadoReporteService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: EstadoReporte[] = [];
    this.estadoreporteService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreEstadoReporte.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.estadoreporteService.setLista(array);
    })
  }

}
