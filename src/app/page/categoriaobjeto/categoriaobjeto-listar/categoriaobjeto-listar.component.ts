import { Component, OnInit } from '@angular/core';
import { CategoriaObjeto } from 'src/app/model/categoriaObjeto';
import { CategoriaObjetoService } from 'src/app/service/categoria-objeto.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaobjetoDialogoComponent } from './categoriaobjeto-dialogo/categoriaobjeto-dialogo.component';

@Component({
  selector: 'app-categoriaobjeto-listar',
  templateUrl: './categoriaobjeto-listar.component.html',
  styleUrls: ['./categoriaobjeto-listar.component.css']
})
export class CategoriaobjetoListarComponent implements OnInit {
  lista: CategoriaObjeto[] = [];
  dataSource: MatTableDataSource<CategoriaObjeto> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','acciones'];
  private idMayor: number = 0;
  constructor(private categoriaobjetoService: CategoriaObjetoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.categoriaobjetoService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    })
    this.categoriaobjetoService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.categoriaobjetoService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(CategoriaobjetoDialogoComponent);
  }


  eliminar(id: number) {
    this.categoriaobjetoService.eliminar(id).subscribe(() => {
      this.categoriaobjetoService.listar().subscribe(data => {
        this.categoriaobjetoService.setLista(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
