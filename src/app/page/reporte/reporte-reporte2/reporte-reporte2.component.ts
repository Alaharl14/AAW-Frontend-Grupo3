import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/model/reporte';
import { ReporteService } from 'src/app/service/reporte.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reporte-reporte2',
  templateUrl: './reporte-reporte2.component.html',
  styleUrls: ['./reporte-reporte2.component.css']
})
export class ReporteReporte2Component implements OnInit {
  lista: Reporte[] = [];
  dataSource: MatTableDataSource<Reporte> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','descripcion','fecha','objeto','estado'];
  private idMayor: number = 0;
  constructor(private ps: ReporteService) { }

  ngOnInit(): void {
    this.ps.reporte2().subscribe(data => {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
