import{Mascota} from "../mascota/mascota";
import{Usuario} from "../usuario/usuario";

export class MascotaEncontrada
{
    id:number;

    fechaInicio:Date;

    fechaFin:Date;

    estado:string;

    ubicacion:string;

    mascota:Mascota;

    usuario:Usuario;

}