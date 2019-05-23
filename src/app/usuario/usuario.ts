import {Evento} from '../evento/evento';
import {Articulo} from '../articulo/articulo';
import {MascotaEnAdopcion} from '../mascota-adopcion/mascota-adopcion';
import {MascotaExtraviada} from '../mascota-extraviada/mascota-extraviada';
export class Usuario {
    /**
     * Id del usuario
     */
    id:number

    /**
     * Username del usuario
     */
    usuario: string;

    /**
     * ruta de imagen
     */
    rutaImagen: string;

    /**
     * Contrasenha del usuario
     */
    contrasenha: string;

    /**
     * Nombre del usuario
     */
    nombre:string;

    /**
     * Correo del usuario
     */
    correo: string;

    /**
     * Telefono del usuario
     */
    telefono:number;

    /**
     * Recibe Notificaciones
     */
    recibeNotificaciones: boolean;

    /**
     * Rol del usuario
     */
    rol:string;



    /**
     * Dia de nacimiento
     */
    daybirth:string;

    /**
     * Mes de nacimiento
     */
    monthbirth:string;

    /**
     * Año de naciiento
     */
    yearbirth:string;

    /**
     * lista de eventos
     */
    eventos?:Evento[];

    /**
     * Lista Articulos
     */
    aticulos?:Articulo[];


    /**
     * Lista procesos de mascota en Adopcion
     */
    procesosMascotaAdopcion?: MascotaEnAdopcion[];


    /**
     * Lista procesos mascotas extraviadas
     */
    procesosMascotaExtraviada?:MascotaExtraviada[];

    /**
     * 
     */
}   






