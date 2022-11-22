import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { Ciudad } from '../model/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private url: string = "http://localhost:8080/ciudad"
  private listaCambio = new Subject<Ciudad[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Ciudad[]>(this.url);
  }

  insertar(ciudad: Ciudad) {

    return this.http.post(this.url, ciudad);
  }

  modificar(ciudad: Ciudad) {

    return this.http.put(this.url, ciudad);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }

  buscar_ciudad(texto:string) {
    console.log("algo")
  if (texto.length != 0) {
   return this.http.post<Ciudad[]>(`${this.url}/buscar`, texto.toLowerCase());
  }
    return EMPTY;
  }

  listarId(id: number) {
    return this.http.get<Ciudad>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Ciudad[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
