import { Respuesta } from './../model/respuesta';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { Cuenta } from './../model/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private url: string = "http://localhost:8080/cuenta"
  private listaCambio = new Subject<Cuenta[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Cuenta[]>(this.url);
  }

  insertar(cuenta: Cuenta) {

    return this.http.post(this.url, cuenta);
  }

  modificar(cuenta: Cuenta) {

    return this.http.put(this.url, cuenta);
  }

  eliminar(id: number) {

    return this.http.delete(this.url + "/" + id);
  }

  buscar(texto:string) {
    console.log("algo")
  if (texto.length != 0) {
   return this.http.post<Cuenta[]>(`${this.url}/buscar`, texto.toLowerCase());
  }
    return EMPTY;
  }

  reporteMas(){
    return this.http.get<Respuesta[]>(`${this.url}/reportes`);
  }

  listarId(id: number) {
    return this.http.get<Cuenta>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Cuenta[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
