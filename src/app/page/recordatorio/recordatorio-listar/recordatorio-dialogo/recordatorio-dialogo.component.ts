import { Component, OnInit } from '@angular/core';
import { RecordatorioService } from 'src/app/service/recordatorio.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-recordatorio-dialogo',
  templateUrl: './recordatorio-dialogo.component.html',
  styleUrls: ['./recordatorio-dialogo.component.css']
})
export class RecordatorioDialogoComponent implements OnInit {

  constructor(private recordatorioService: RecordatorioService,
    private dialogRef: MatDialogRef<RecordatorioDialogoComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.recordatorioService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
