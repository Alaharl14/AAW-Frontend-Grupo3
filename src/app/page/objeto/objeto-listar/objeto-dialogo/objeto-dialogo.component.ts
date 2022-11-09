import { Component, OnInit } from '@angular/core';
import { ObjetoService } from 'src/app/service/objeto.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-objeto-dialogo',
  templateUrl: './objeto-dialogo.component.html',
  styleUrls: ['./objeto-dialogo.component.css']
})
export class ObjetoDialogoComponent implements OnInit {

  constructor(private objetoService: ObjetoService,
    private dialogRef: MatDialogRef<ObjetoDialogoComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.objetoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
