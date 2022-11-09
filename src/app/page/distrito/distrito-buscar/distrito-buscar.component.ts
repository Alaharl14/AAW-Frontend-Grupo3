import { Component, OnInit } from '@angular/core';
import { Distrito } from 'src/app/model/distrito';
import { DistritoService } from 'src/app/service/distrito.service';

@Component({
  selector: 'app-distrito-buscar',
  templateUrl: './distrito-buscar.component.html',
  styleUrls: ['./distrito-buscar.component.css']
})
export class DistritoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private distritoService: DistritoService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: Distrito[] = [];
    this.distritoService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreDistrito.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.distritoService.setLista(array);
    })
  }

}
