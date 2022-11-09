import { Objeto } from "./objeto";
import { EstadoReporte } from "./estadoReporte";

export class Reporte{
    idReporte:number=0;
    nombreReporte:string="";
    descripcionReporte:string="";
    fechaReporte:string="";
    objeto:Objeto = new Objeto();
    estadoreporte:EstadoReporte = new EstadoReporte();
}