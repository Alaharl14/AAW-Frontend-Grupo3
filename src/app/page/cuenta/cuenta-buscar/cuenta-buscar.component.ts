import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/model/cuenta';
import { CuentaService } from 'src/app/service/cuenta.service';

@Component({
  selector: 'app-cuenta-buscar',
  templateUrl: './cuenta-buscar.component.html',
  styleUrls: ['./cuenta-buscar.component.css']
})
export class CuentaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private cuentaService: CuentaService) { }

  ngOnInit(): void {
  }

  buscar_cuenta(e: any) {
    let array: Cuenta[] = [];
    this.cuentaService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreCuenta.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.cuentaService.setLista(array);
    })
  }

}
