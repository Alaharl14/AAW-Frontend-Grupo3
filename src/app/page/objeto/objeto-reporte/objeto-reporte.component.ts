import { Component, OnInit } from '@angular/core';
import { Objeto } from 'src/app/model/objeto';
import { ObjetoService } from 'src/app/service/objeto.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-objeto-reporte',
  templateUrl: './objeto-reporte.component.html',
  styleUrls: ['./objeto-reporte.component.css']
})
export class ObjetoReporteComponent implements OnInit {
  lista: Objeto[] = [];
  dataSource: MatTableDataSource<Objeto> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','distancia','distanciaLimite','ubicacion','fecha','cuenta','recordatorio','categoria','estado'];
  private idMayor: number = 0;
  constructor(private objetoService: ObjetoService) { }

  ngOnInit(): void {
    this.objetoService.reporte().subscribe(data => {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    })
    
  }

}
