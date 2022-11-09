import { Component, OnInit } from '@angular/core';
import { Objeto } from 'src/app/model/objeto';
import { ObjetoService } from 'src/app/service/objeto.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ObjetoDialogoComponent } from './objeto-dialogo/objeto-dialogo.component';

@Component({
  selector: 'app-objeto-listar',
  templateUrl: './objeto-listar.component.html',
  styleUrls: ['./objeto-listar.component.css']
})
export class ObjetoListarComponent implements OnInit {
  lista: Objeto[] = [];
  dataSource: MatTableDataSource<Objeto> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','distancia','distanciaLimite','ubicacion','fecha','cuenta','recordatorio','categoria','estado','acciones'];
  private idMayor: number = 0;
  constructor(private objetoService: ObjetoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.objetoService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    })
    this.objetoService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.objetoService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ObjetoDialogoComponent);
  }


  eliminar(id: number) {
    this.objetoService.eliminar(id).subscribe(() => {
      this.objetoService.listar().subscribe(data => {
        this.objetoService.setLista(data);
      });
    });
  }

}
