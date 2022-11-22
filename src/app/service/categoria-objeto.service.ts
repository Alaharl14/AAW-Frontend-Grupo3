import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { CategoriaObjeto } from '../model/categoriaObjeto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaObjetoService {
  private url: string = "http://localhost:8080/categoriaobjeto"
  private listaCambio = new Subject<CategoriaObjeto[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<CategoriaObjeto[]>(this.url);
  }

  insertar(categoriaobjeto: CategoriaObjeto) {

    return this.http.post(this.url, categoriaobjeto);
  }

  modificar(categoriaobjeto: CategoriaObjeto) {

    return this.http.put(this.url, categoriaobjeto);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto:string) {
    console.log("algo")
  if (texto.length != 0) {
   return this.http.post<CategoriaObjeto[]>(`${this.url}/buscar`, texto.toLowerCase());
  }
    return EMPTY;
  }

  listarId(id: number) {
    return this.http.get<CategoriaObjeto>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: CategoriaObjeto[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
