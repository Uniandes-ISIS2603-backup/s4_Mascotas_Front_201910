import {Mascota} from  '../mascota';

export class MascotaDetail extends Mascota
{
    /**
     * Descripción de la mascota
     */
    descripcion:string;

    /**
     * Fotos de la mascota
     */
    fotos:Array<string>;
}