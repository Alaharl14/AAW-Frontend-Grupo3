import { Component, OnInit } from '@angular/core';
import { Recordatorio } from 'src/app/model/recordatorio';
import { RecordatorioService } from 'src/app/service/recordatorio.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RecordatorioDialogoComponent } from './recordatorio-dialogo/recordatorio-dialogo.component';

@Component({
  selector: 'app-recordatorio-listar',
  templateUrl: './recordatorio-listar.component.html',
  styleUrls: ['./recordatorio-listar.component.css']
})
export class RecordatorioListarComponent implements OnInit {
  lista: Recordatorio[] = [];
  dataSource: MatTableDataSource<Recordatorio> = new MatTableDataSource();
  displayedColumns:string[]=['id','estado','acciones'];
  private idMayor: number = 0;
  constructor(private ps: RecordatorioService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(RecordatorioDialogoComponent);
  }


  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
