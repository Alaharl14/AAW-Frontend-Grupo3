import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { EstadoReporte } from '../model/estadoReporte';

@Injectable({
  providedIn: 'root'
})
export class EstadoReporteService {
  private url: string = "http://localhost:8080/estadoreporte"
  private listaCambio = new Subject<EstadoReporte[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<EstadoReporte[]>(this.url);
  }

  insertar(estadoreporte: EstadoReporte) {

    return this.http.post(this.url, estadoreporte);
  }

  modificar(estadoreporte: EstadoReporte) {

    return this.http.put(this.url, estadoreporte);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto:string) {
    console.log("algo")
  if (texto.length != 0) {
   return this.http.post<EstadoReporte[]>(`${this.url}/buscar`, texto.toLowerCase());
  }
    return EMPTY;
  }

  listarId(id: number) {
    return this.http.get<EstadoReporte>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: EstadoReporte[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
