import { Component, OnInit } from '@angular/core';
import { Recordatorio } from 'src/app/model/recordatorio';
import { RecordatorioService } from 'src/app/service/recordatorio.service';

@Component({
  selector: 'app-recordatorio-buscar',
  templateUrl: './recordatorio-buscar.component.html',
  styleUrls: ['./recordatorio-buscar.component.css']
})
export class RecordatorioBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private recordatorioService: RecordatorioService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Recordatorio[] = [];
    this.recordatorioService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.estadoRecordatorio.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.recordatorioService.setLista(array);
    })
  }

}
