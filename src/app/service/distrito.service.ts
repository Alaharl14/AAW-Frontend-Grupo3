import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { Distrito } from '../model/distrito';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {
  private url: string = "http://localhost:8080/distrito"
  private listaCambio = new Subject<Distrito[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Distrito[]>(this.url);
  }

  insertar(distrito: Distrito) {

    return this.http.post(this.url, distrito);
  }

  modificar(distrito: Distrito) {

    return this.http.put(this.url, distrito);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto:string) {

    return this.http.post<Distrito[]>(`${this.url}/buscar`, texto);
  }

  listarId(id: number) {
    return this.http.get<Distrito>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Distrito[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
