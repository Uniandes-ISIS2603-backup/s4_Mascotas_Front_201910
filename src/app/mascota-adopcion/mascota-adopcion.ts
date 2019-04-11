import { Calificacion } from "../calificacion/calificacion";
import { Mascota } from "../mascota/mascota";
import { Usuario } from "../usuario/usuario";

export class MascotaEnAdopcion {
     /**
     * el estado de la mascota
     */
     adoptada : boolean;
    /**
     * el pasado de la mascota
     */
     pasado : String;
    /**
     * la razón por la cual se quiere poner en adopción la mascota
     */
     razonAdopcion : String;
     /**
      * fechas inicio y final del proceso
      */
     fechaInicio: any;
     fechaFinal: any;

     /**
      * la calificacion asociada al proceso
      */
     calificacion: Calificacion;

     /**
      * la mascota del proceso
      */
     mascota : Mascota;
     /**
      * el dueño de la adopción
      */
     dueño : Usuario;

     /**
      * los usuarios postulados
      */
     postulados: Usuario[];
     
}
