import { Component, OnInit } from '@angular/core';
import { EstadoObjetoService } from 'src/app/service/estado-objeto.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-estadoobjeto-dialogo',
  templateUrl: './estadoobjeto-dialogo.component.html',
  styleUrls: ['./estadoobjeto-dialogo.component.css']
})
export class EstadoobjetoDialogoComponent implements OnInit {

  constructor(private estadoobjetoService: EstadoObjetoService,
    private dialogRef: MatDialogRef<EstadoobjetoDialogoComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.estadoobjetoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
