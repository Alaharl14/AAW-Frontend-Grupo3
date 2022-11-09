import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/service/ciudad.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ciudad-dialogo',
  templateUrl: './ciudad-dialogo.component.html',
  styleUrls: ['./ciudad-dialogo.component.css']
})
export class CiudadDialogoComponent implements OnInit {

  constructor(private ciudadService: CiudadService,
    private dialogRef:MatDialogRef<CiudadDialogoComponent>
    ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.ciudadService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
