import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/model/reporte';
import { ReporteService } from 'src/app/service/reporte.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reporte-reporte',
  templateUrl: './reporte-reporte.component.html',
  styleUrls: ['./reporte-reporte.component.css']
})
export class ReporteReporteComponent implements OnInit {
  lista: Reporte[] = [];
  dataSource: MatTableDataSource<Reporte> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','descripcion','fecha','objeto','estado'];
  private idMayor: number = 0;
  constructor(private ps: ReporteService) { }

  ngOnInit(): void {
    this.ps.reporte().subscribe(data => {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
