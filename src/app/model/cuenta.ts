import { Distrito } from "./distrito";

export class Cuenta{
    idCuenta:number=0;
    nombreCuenta:string="";
    contrasenaCuenta:string="";
    correoCuenta:string="";
    numeroCuenta:string="";
    direccionCuenta:string="";
    distrito:Distrito = new Distrito();
}