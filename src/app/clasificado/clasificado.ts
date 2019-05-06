import { Usuario } from "../usuario/usuario";

export class Clasificado {

   /**
    * Id del clasificado
    */
   id: number;

   /**
    * Nombre del clasificado
    */
   nombre: string;

   /**
    * Contenido del clasificado
    */
   contenido: string;

   /**
    * Enlace del clasificado
    */
   enlace: string;

   /**
       * Autor del clasificado
       */
   autor: Usuario;

}
