import { Cuenta } from "./cuenta";
import { Recordatorio } from 'src/app/model/recordatorio';
import { CategoriaObjeto } from 'src/app/model/categoriaObjeto';
import { EstadoObjeto } from 'src/app/model/estadoObjeto';

export class Objeto{
    idObjeto:number=0;
    nombreObjeto:string="";
    distancia:string="";
    distanciaLimite:string="";
    ubicacion:string="";
    fechaRegistrado:string="";
    cuenta:Cuenta = new Cuenta();
    recordatorio:Recordatorio = new Recordatorio();
    categoriaObjeto:CategoriaObjeto = new CategoriaObjeto();
    estadoObjeto:EstadoObjeto = new EstadoObjeto();
}