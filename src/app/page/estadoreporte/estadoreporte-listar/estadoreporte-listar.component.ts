import { Component, OnInit } from '@angular/core';
import { EstadoReporte } from 'src/app/model/estadoReporte';
import { EstadoReporteService } from 'src/app/service/estado-reporte.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EstadoreporteDialogoComponent } from './estadoreporte-dialogo/estadoreporte-dialogo.component';

@Component({
  selector: 'app-estadoreporte-listar',
  templateUrl: './estadoreporte-listar.component.html',
  styleUrls: ['./estadoreporte-listar.component.css']
})
export class EstadoreporteListarComponent implements OnInit {
  lista: EstadoReporte[] = [];
  dataSource: MatTableDataSource<EstadoReporte> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','acciones'];
  private idMayor: number = 0;
  constructor(private estadoreporteService: EstadoReporteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.estadoreporteService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    })
    this.estadoreporteService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.estadoreporteService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(EstadoreporteDialogoComponent);
  }


  eliminar(id: number) {
    this.estadoreporteService.eliminar(id).subscribe(() => {
      this.estadoreporteService.listar().subscribe(data => {
        this.estadoreporteService.setLista(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
