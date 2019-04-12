import { MascotaEnAdopcion } from "./mascota-adopcion";
import { Usuario } from "../usuario/usuario";

export class MascotaEnAdopcionDetail extends MascotaEnAdopcion {
     /**
      * los usuarios postulados
      */
     postulados: Usuario[];
}
