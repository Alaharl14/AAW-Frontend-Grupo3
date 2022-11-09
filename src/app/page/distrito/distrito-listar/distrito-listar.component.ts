import { Component, OnInit } from '@angular/core';
import { DistritoService } from 'src/app/service/distrito.service';
import { Distrito } from 'src/app/model/distrito';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DistritoDialogoComponent } from './distrito-dialogo/distrito-dialogo.component';

@Component({
  selector: 'app-distrito-listar',
  templateUrl: './distrito-listar.component.html',
  styleUrls: ['./distrito-listar.component.css']
})
export class DistritoListarComponent implements OnInit {
  lista: Distrito[] = [];
  dataSource: MatTableDataSource<Distrito> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','ciudad','acciones'];
  private idMayor: number = 0;
  constructor(private distritoService: DistritoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.distritoService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    });

    this.distritoService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });

    this.distritoService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DistritoDialogoComponent);
  }


  eliminar(id: number) {
    this.distritoService.eliminar(id).subscribe(() => {
      this.distritoService.listar().subscribe(data => {
        this.distritoService.setLista(data);
      });
    });
  }

}
