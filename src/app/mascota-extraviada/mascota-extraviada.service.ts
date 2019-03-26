import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MascotaExtraviada } from './mascota-extraviada';

const API_URL = "http://localhost:8080/s4_mascotas-api/api/procesosMascotaExtraviada"

/**
 * El proveedor de servicios de todo lo relacionado
 * con los procesos de mascota extraviada
 */
@Injectable({
  providedIn: 'root'
})
export class MascotaExtraviadaService {

  /**
   * Constructor del servicio
   * @param http - HttpClient necesario para ejecutar los pedidos
   */
  constructor(private http: HttpClient) { }

  /**
   * Retorna el Observable que contiene la lista de procesos de mascota
   * extraviada
   */
  getMascotasExtraviadas(): Observable<MascotaExtraviada[]>{
    return this.http.get<MascotaExtraviada[]>(API_URL);

  }

  /**
   * Retorna el detalle de los datos del proceso
   * @param procesoId - El id del proceso
   */
  getMascotaExtraviadaDetail(procesoId: number): Observable<MascotaExtraviada>{
    return this.http.get<MascotaExtraviada>(`${API_URL}/${procesoId}`)
  }
}
