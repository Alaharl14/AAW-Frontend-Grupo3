import { Component, OnInit } from '@angular/core';
import { EstadoObjetoService } from 'src/app/service/estado-objeto.service';
import { EstadoObjeto } from 'src/app/model/estadoObjeto';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EstadoobjetoDialogoComponent } from './estadoobjeto-dialogo/estadoobjeto-dialogo.component';

@Component({
  selector: 'app-estadoobjeto-listar',
  templateUrl: './estadoobjeto-listar.component.html',
  styleUrls: ['./estadoobjeto-listar.component.css']
})
export class EstadoobjetoListarComponent implements OnInit {
  lista: EstadoObjeto[] = [];
  dataSource: MatTableDataSource<EstadoObjeto> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','acciones'];
  private idMayor: number = 0;
  constructor(private estadoobjetoService: EstadoObjetoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.estadoobjetoService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    })
    this.estadoobjetoService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.estadoobjetoService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(EstadoobjetoDialogoComponent);
  }


  eliminar(id: number) {
    this.estadoobjetoService.eliminar(id).subscribe(() => {
      this.estadoobjetoService.listar().subscribe(data => {
        this.estadoobjetoService.setLista(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
