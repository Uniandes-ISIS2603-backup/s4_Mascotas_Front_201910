import { Usuario } from "../usuario/usuario";

export class Evento {

  /**
   * Id del evento
   */
  id: number;

  /**
   * Nombre del evento
   */
  nombre: string;

  /**
   * Descripcion del evento
   */
  descripcion: string;

  /**
   * Imagen del evento
   */
  imagen: string;

  /**
   * FechaInicio del evento
   */
  fechaInicio: any;

  /**
   * FechaFin del evento
   */
  fechaFin: any;

  /**
   * Organizador del evento
   */
  organizador: Usuario;

} 