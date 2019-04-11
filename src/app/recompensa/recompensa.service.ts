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
   * @param recompensaId - El id del proceso
   */
  getRecompensaDetail(recompensaId: number): Observable<Recompensa>{
    return this.http.get<Recompensa>(`${API_URL}/${recompensaId}`)
  }


    /**
   * Retorna el Observable con los datos de la recompensa de un proceso de 
   * mascota extraviada recuperados del API
   * @param recompensa 
   */
  createRecompensa(recompensa): Observable<Recompensa>{
    return this.http.post<Recompensa>(API_URL, recompensa)
  }

  /**
   * Actualiza los datos de una recompensa
   * @param proceso - Los nuevos datos de la recompensa a actualizar
   */
  updateMascotaExtraviada(recompensa): Observable<Recompensa>{
    return this.http.put<Recompensa>(`${API_URL}/${recompensa.id}`, recompensa)
  }

  /**
   * Elimina la recompensa de un proceso de mascota extraviada
   * @param recompensaId - El id de la recompensa a eliminar
   */
  deleteMascotaExtraviada(recompensaId): Observable<boolean>{
    return this.http.delete<boolean>(`${API_URL}/${recompensaId}`)
  }


}
