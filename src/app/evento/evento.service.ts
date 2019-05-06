import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from './evento';

const API_URL = "http://localhost:8080/s4_mascotas-api/api/eventos";

/**
 * Proveedor de servicios HTTP para operaciones de Eventos
 */
@Injectable({
  providedIn: 'root'
})
export class EventoService {

  /**
  * Constructor del servicio
  * @param http - HttpClient necesario para ejecutar los pedidos
  */
  constructor(private http: HttpClient) { }

  /**
   * Retorna la lista con todos los eventos en el sistema
   */
  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(API_URL);
  }

  /**
   * Retorna el detalle de los datos del evento
   * @param eventoId - El id del evento
   */
  getEventoDetail(eventoId: number): Observable<Evento> {
    return this.http.get<Evento>(`${API_URL}/${eventoId}`)
  }

  /**
   * Crea un evento en el sistema
   */
  crearEvento(evento: Evento): Observable<Evento> {
    console.log("Evento: ---> ", evento);
    return this.http.post<Evento>(API_URL, evento)
  }

  /**
   * Actualiza un evento
   * @param evento El evento actualizado
   * @returns El evento actualizado
   */
  updateEvento(evento: Evento): Observable<Evento> {
    return this.http.put<Evento>(API_URL + '/' + evento.id, evento);
  }

  /**
    * Elimina un evento
    * @param eventoId 
    * @returns True si se elimino, false de lo contrario
    */
  deleteArticulo(eventoId: number): Observable<Evento> {
    return this.http.delete<Evento>(API_URL + '/' + eventoId);
  }

}