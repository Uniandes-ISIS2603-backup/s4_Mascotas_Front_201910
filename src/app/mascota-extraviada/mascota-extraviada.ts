/**
 * Los estados que puede tener el atributo estado
 */
enum estado {
    PENDIENTE = 'PENDIENTE',
    ENCONTRADO = 'ENCONTRADO'
}

/**
 * Clase que representa un proceso de mascota extraviada.
 * Contiene la información relevante al proceso
 * @author Sebastián Lemus Cadena
 */
export interface MascotaExtraviada{

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

}