import { Component, OnInit } from '@angular/core';
import { DistritoService } from 'src/app/service/distrito.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-distrito-dialogo',
  templateUrl: './distrito-dialogo.component.html',
  styleUrls: ['./distrito-dialogo.component.css']
})
export class DistritoDialogoComponent implements OnInit {

  constructor(private distritoService: DistritoService,
    private dialogRef:MatDialogRef<DistritoDialogoComponent>
    ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.distritoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
