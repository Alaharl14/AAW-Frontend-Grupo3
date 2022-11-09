import { Component, OnInit } from '@angular/core';
import { CategoriaObjeto } from 'src/app/model/categoriaObjeto';
import { CategoriaObjetoService } from 'src/app/service/categoria-objeto.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-categoriaobjeto-creaedita',
  templateUrl: './categoriaobjeto-creaedita.component.html',
  styleUrls: ['./categoriaobjeto-creaedita.component.css']
})
export class CategoriaobjetoCreaeditaComponent implements OnInit {
  categoriaobjeto : CategoriaObjeto = new CategoriaObjeto();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private categoriaobjetoService: CategoriaObjetoService,private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
    }

    aceptar(): void {
      if (this.categoriaobjeto.nombreCategoriaObjeto.length > 0 ) {   
        if (this.edicion) {
          this.categoriaobjetoService.modificar(this.categoriaobjeto).subscribe(() => {
            this.categoriaobjetoService.listar().subscribe(data => {
              this.categoriaobjetoService.setLista(data);
          });
        });
      } else {
        this.categoriaobjetoService.insertar(this.categoriaobjeto).subscribe(() => {
          this.categoriaobjetoService.listar().subscribe(data => {
            this.categoriaobjetoService.setLista(data);
          });
        });
      }
        this.router.navigate(['categoriaobjeto']);
      } else {
        this.mensaje = "Complete los valores requeridos";
      }
    }

    init() {
      if (this.edicion) {
        this.categoriaobjetoService.listarId(this.id).subscribe(data => {
          this.categoriaobjeto = data
          console.log(data);
        });
      }
  
    }

}
