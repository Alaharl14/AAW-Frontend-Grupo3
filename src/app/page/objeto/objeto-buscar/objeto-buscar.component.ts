import { Component, OnInit } from '@angular/core';
import { Objeto } from 'src/app/model/objeto';
import { ObjetoService } from 'src/app/service/objeto.service';

@Component({
  selector: 'app-objeto-buscar',
  templateUrl: './objeto-buscar.component.html',
  styleUrls: ['./objeto-buscar.component.css']
})
export class ObjetoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private objetoService: ObjetoService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: Objeto[] = [];
    this.objetoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreObjeto.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.objetoService.setLista(array);
    })
  }

}
