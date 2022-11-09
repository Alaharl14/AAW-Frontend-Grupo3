import { Component, OnInit } from '@angular/core';
import { CategoriaObjeto } from 'src/app/model/categoriaObjeto';
import { CategoriaObjetoService } from 'src/app/service/categoria-objeto.service';

@Component({
  selector: 'app-categoriaobjeto-buscar',
  templateUrl: './categoriaobjeto-buscar.component.html',
  styleUrls: ['./categoriaobjeto-buscar.component.css']
})
export class CategoriaobjetoBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private categoriaobjetoService: CategoriaObjetoService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {/* buscar a BD */
    this.categoriaobjetoService.buscar(e.target.value).subscribe(data=>{
      this.categoriaobjetoService.setLista(data);
    });
  }

}
