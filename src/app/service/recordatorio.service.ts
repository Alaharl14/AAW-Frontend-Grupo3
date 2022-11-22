import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { Recordatorio } from '../model/recordatorio';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {
  private url: string = "http://localhost:8080/recordatorio"
  private listaCambio = new Subject<Recordatorio[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Recordatorio[]>(this.url);
  }

  insertar(recordatorio: Recordatorio) {

    return this.http.post(this.url, recordatorio);
  }

  modificar(recordatorio: Recordatorio) {

    return this.http.put(this.url, recordatorio);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto:string) {
    return this.http.post<Recordatorio[]>(`${this.url}/buscar`, texto);
  }

  listarId(id: number) {
    return this.http.get<Recordatorio>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Recordatorio[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
