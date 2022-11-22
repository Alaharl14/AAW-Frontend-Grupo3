import { Respuesta } from './../../../model/respuesta';
import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/service/cuenta.service';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-cuenta-reporte',
  templateUrl: './cuenta-reporte.component.html',
  styleUrls: ['./cuenta-reporte.component.css']
})
export class CuentaReporteComponent implements OnInit {
  lista: Respuesta[] = [];
  dataSource: MatTableDataSource<Respuesta> = new MatTableDataSource();
  displayedColumns:string[]=['nombre_cuenta','cantidad'];
  private idMayor: number = 0;
  constructor(private cuentaService: CuentaService) { }

  ngOnInit(): void {
    {
      this.cuentaService.reporteMas().subscribe(data => {
        this.lista = data;
        this.dataSource=new MatTableDataSource(data);
      });
       }
  }
}
