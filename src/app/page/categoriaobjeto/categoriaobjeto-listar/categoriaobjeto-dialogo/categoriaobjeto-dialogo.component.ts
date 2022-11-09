import { Component, OnInit } from '@angular/core';
import { CategoriaObjetoService } from 'src/app/service/categoria-objeto.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-categoriaobjeto-dialogo',
  templateUrl: './categoriaobjeto-dialogo.component.html',
  styleUrls: ['./categoriaobjeto-dialogo.component.css']
})
export class CategoriaobjetoDialogoComponent implements OnInit {

  constructor(private categoriaobjetoService: CategoriaObjetoService,
    private dialogRef: MatDialogRef<CategoriaobjetoDialogoComponent>
  ) { }


  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.categoriaobjetoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
