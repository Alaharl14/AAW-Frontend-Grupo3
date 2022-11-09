import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/service/ciudad.service';
import { Ciudad } from 'src/app/model/ciudad';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';
import { CiudadDialogoComponent } from './ciudad-dialogo/ciudad-dialogo.component';

@Component({
  selector: 'app-ciudad-listar',
  templateUrl: './ciudad-listar.component.html',
  styleUrls: ['./ciudad-listar.component.css']
})
export class CiudadListarComponent implements OnInit {
  lista: Ciudad[] = [];
  dataSource: MatTableDataSource<Ciudad> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','acciones'];
  private idMayor: number = 0;
  constructor(private ciudadService: CiudadService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ciudadService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    });

    this.ciudadService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.ciudadService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(CiudadDialogoComponent);
  }


  eliminar(id: number) {
    this.ciudadService.eliminar(id).subscribe(() => {
      this.ciudadService.listar().subscribe(data => {
        this.ciudadService.setLista(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
