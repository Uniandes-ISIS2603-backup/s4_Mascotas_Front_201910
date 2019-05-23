import { Recompensa } from "../recompensa/recompensa";
import { Mascota } from "../mascota/mascota";

/**
 * Los estados que puede tener el atributo estado
 */
export enum estado {
    PENDIENTE = 'PENDIENTE',
    ENCONTRADO = 'ENCONTRADO'
}

/**
 * Interface que representa un proceso de mascota extraviada.
 * Contiene la información relevante al proceso
 * @author Sebastián Lemus Cadena
 */
export class MascotaExtraviada{

    /**
     * El identificador del proceso
     */
    id: Number

    /**
     * La dirección donde se extravió la mascota
     */
    direccion: string

    /**
     * La ciudad donde se extravió la mascota
     */
    ciudad: string

    /**
     * Representa el estado del proceso de mascota extraviada;
     * este puede ser 'PENDIENTE' o 'ENCONTRADO'
     */
    estado: estado
    
    /**
     * Representa la recompensa opcional que le puede añadir el creador del proceso
     */
    recompensa: Recompensa

    /**
     * La mascota asociada al proceso
     */
    mascota: Mascota

}