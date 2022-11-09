import { Component, OnInit } from '@angular/core';
import { EstadoObjeto } from 'src/app/model/estadoObjeto';
import { EstadoObjetoService } from 'src/app/service/estado-objeto.service';

@Component({
  selector: 'app-estadoobjeto-buscar',
  templateUrl: './estadoobjeto-buscar.component.html',
  styleUrls: ['./estadoobjeto-buscar.component.css']
})
export class EstadoobjetoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private estadoobjetoService: EstadoObjetoService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: EstadoObjeto[] = [];
    this.estadoobjetoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreEstadoObjeto.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.estadoobjetoService.setLista(array);
    })
  }

}
