import { MascotaExtraviada } from "../mascota-extraviada/mascota-extraviada";

/**
 * Los estados que puede tener el atributo estado
 */
export enum estado{
    PENDIENTE = 'PENDIENTE',
    PAGADO = 'PAGADO'
}

/**
 * Interface que representa una recompensa.
 * Contiene la información relevante a la recompensa del proceso.
 * @author Sebastián Lemus Cadena
 */
export class Recompensa{

    /**
     * El identificador de la recompensa
     */
    id: number

    /**
     * Representa el medio de pago por el cuál se pagará la
     * recompensa a una mascota extraviada
     */
    medioDePago: string

    /**
     * Representa el pago de la recompensa que ha ofrecido
     * aquel usuario que haya iniciado un proceso de MascotaExtraviada
     */
    valor: number

    /**
     * Representa el estado de la recompensa, este puede asumir dos 
     * valores únicamente: 'PENDIENTE' o 'PAGADO'
     */
    estado: estado

    /**
     * Representa el proceso de mascota extraviada asociado a la recompensa
     */
    procesoMascotaExtraviada: MascotaExtraviada
}