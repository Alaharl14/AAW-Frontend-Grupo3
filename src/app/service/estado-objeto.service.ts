import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { EstadoObjeto } from '../model/estadoObjeto';

@Injectable({
  providedIn: 'root'
})
export class EstadoObjetoService {
  private url: string = "http://localhost:8080/estadoobjeto"
  private listaCambio = new Subject<EstadoObjeto[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<EstadoObjeto[]>(this.url);
  }

  insertar(estadoObjeto: EstadoObjeto) {

    return this.http.post(this.url, estadoObjeto);
  }

  modificar(estadoObjeto: EstadoObjeto) {

    return this.http.put(this.url, estadoObjeto);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto:string) {
    console.log("algo")
  if (texto.length != 0) {
   return this.http.post<EstadoObjeto[]>(`${this.url}/buscar`, texto.toLowerCase());
  }
    return EMPTY;
  }

  listarId(id: number) {
    return this.http.get<EstadoObjeto>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: EstadoObjeto[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

}
