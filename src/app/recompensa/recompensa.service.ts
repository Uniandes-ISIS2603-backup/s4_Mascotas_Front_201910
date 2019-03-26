import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recompensa } from './recompensa';

const API_URL = "http://localhost:8080/s4_mascotas-api/api/recompensas"

/**
 * El proveedor de servicios de todo lo relacionado
 * con las recompensas de los procesos de mascota extraviada
 */
@Injectable({
  providedIn: 'root'
})
export class RecompensaService {

  /**
   * Constructor del servicio
   * @param http - HttpClient necesario para ejecutar los pedidos
   */
  constructor(private http: HttpClient) { }

  /**
   * Retorna el Observable que contiene la lista de recompensas
   */
  getRecompensas(): Observable<Recompensa[]>{
    return this.http.get<Recompensa[]>(API_URL)
  }

  /**
   * Retorna el detalle de los datos de la recompensa
   * @param procesoId - El id del proceso
   */
  getRecompensaDetail(recompensaId: number): Observable<Recompensa>{
    return this.http.get<Recompensa>(`${API_URL}/${recompensaId}`)
  }
}
