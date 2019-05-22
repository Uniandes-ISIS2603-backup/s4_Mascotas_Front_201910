import { Calificacion } from "../calificacion/calificacion";
import { Mascota } from "../mascota/mascota";
import { Usuario } from "../usuario/usuario";

export class MascotaEnAdopcion {
     /**
      * id del proceso
      */
     id: number;
     /**
     * el estado de la mascota
     */
     adoptada : boolean;
    /**
     * el pasado de la mascota
     */
     pasado : string;
    /**
     * la razón por la cual se quiere poner en adopción la mascota
     */
     razonAdopcion : string;
     /**
      * fechas inicio y final del proceso
      */
     fechaInicio: any;
     fechaFinal?: any;

     /**
      * la calificacion asociada al proceso
      */
     calificacion?: Calificacion;

     /**
      * la mascota del proceso
      */
     mascota : Mascota;
     /**
      * el dueño de la adopción
      */
     duenio : Usuario;

    
     
}
