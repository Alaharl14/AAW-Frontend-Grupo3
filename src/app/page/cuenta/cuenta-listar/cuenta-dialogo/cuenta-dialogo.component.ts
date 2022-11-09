import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/service/cuenta.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cuenta-dialogo',
  templateUrl: './cuenta-dialogo.component.html',
  styleUrls: ['./cuenta-dialogo.component.css']
})
export class CuentaDialogoComponent implements OnInit {

  constructor(private cuentaService: CuentaService,
    private dialogRef:MatDialogRef<CuentaDialogoComponent>
    ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.cuentaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
