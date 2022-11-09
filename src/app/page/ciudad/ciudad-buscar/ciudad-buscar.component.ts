import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/model/ciudad';
import { CiudadService } from 'src/app/service/ciudad.service';

@Component({
  selector: 'app-ciudad-buscar',
  templateUrl: './ciudad-buscar.component.html',
  styleUrls: ['./ciudad-buscar.component.css']
})
export class CiudadBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private ciudadService: CiudadService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Ciudad[] = [];
    this.ciudadService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreCiudad.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.ciudadService.setLista(array);
    })
  }

}
