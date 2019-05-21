import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../evento/evento';
import { Articulo } from '../articulo/articulo';

const API_URL = "http://localhost:8080/s4_mascotas-api/api";

/**
 * Proveedor de servicios HTTP para operaciones de Eventos
 */
@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  /**
  * Constructor del servicio
  * @param http - HttpClient necesario para ejecutar los pedidos
  */
  constructor(private http: HttpClient) { }

  /**
   * Retorna la lista con todos los eventos en el sistema con un nombre dado
   *  @param nombre - El nombre del evento
   */
  buscarEventosNombre(nombre: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(API_URL + '/eventos/' + nombre);
  }
  
  /**
   * Retorna la lista con todos los articulos en el sistema con un titulo dado
   *  @param titulo - El titulo del articulo
   */
  buscarArticulosTitulo(titulo: string): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(API_URL + '/articulos/' + titulo);
  }

}