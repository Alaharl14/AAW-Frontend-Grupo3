import { Component, OnInit } from '@angular/core';
import { EstadoReporteService } from 'src/app/service/estado-reporte.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-estadoreporte-dialogo',
  templateUrl: './estadoreporte-dialogo.component.html',
  styleUrls: ['./estadoreporte-dialogo.component.css']
})
export class EstadoreporteDialogoComponent implements OnInit {

  constructor(private estadoreporteService: EstadoReporteService,
    private dialogRef: MatDialogRef<EstadoreporteDialogoComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.estadoreporteService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
