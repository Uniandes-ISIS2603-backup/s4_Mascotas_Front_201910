import { Usuario } from "../usuario/usuario";

export class Articulo {

    /**
     * Id del articulo
     */
    id: number;
  
    /**
     * Titulo del articulo
     */
    titulo:string;
  
    /**
     * Tema del articulo
     */
    tema:string;

    /**
     * Resumen del articulo
     */
    resumen:string;
  
    /**
     * Contenido del articulo
     */
    contenido:string;

     /**
     * Autor del articulo
     */
     autor:Usuario;
  }