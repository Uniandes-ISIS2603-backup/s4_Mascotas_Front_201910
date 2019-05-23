import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MascotaExtraviada } from './mascota-extraviada';
import { Recompensa } from '../recompensa/recompensa';
import { Mascota } from '../mascota/mascota';

const API_URL = "http://localhost:8080/s4_mascotas-api/api/procesosMascotaExtraviada"

const MASCOTA_URL = "/mascota"

const RECOMPENSA_URL = "/recompensa"

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
    return this.http.get<MascotaExtraviada[]>(API_URL)

  }

  /**
   * Retorna el detalle de los datos del proceso
   * @param procesoId - El id del proceso
   */
  getMascotaExtraviadaDetail(procesoId: number): Observable<MascotaExtraviada>{
    return this.http.get<MascotaExtraviada>(`${API_URL}/${procesoId}`)
  }

  /**
   * Retorna el Observable con los datos del proceso de 
   * mascota extraviada recuperados del API
   * @param proceso - El proceso de mascota extraviada
   */
  createMascotaExtraviada(proceso): Observable<MascotaExtraviada>{
    return this.http.post<MascotaExtraviada>(API_URL, proceso)
  }

  /**
   * Actualiza los datos de un proceso
   * @param proceso - Los nuevos datos del proceso a actualizar
   */
  updateMascotaExtraviada(proceso): Observable<MascotaExtraviada>{
    return this.http.put<MascotaExtraviada>(`${API_URL}/${proceso.id}`, proceso)
  }

  /**
   * Elimina el proceso de mascota extraviada
   * @param procesoId - El id del proceso a eliminar
   */
  deleteMascotaExtraviada(procesoId): Observable<boolean>{
    return this.http.delete<boolean>(`${API_URL}/${procesoId}`)
  }

  /**
   * Crea y asocia una recompensa al proceso de mascota extraviada
   * @param procesoId - El id del proceso
   * @param recompensa - La recompensa creada
   */
  createRecompensa(procesoId, recompensa): Observable<Recompensa>{
    return this.http.put<Recompensa>(`${API_URL}/${procesoId}/${RECOMPENSA_URL}`, recompensa)
  }

  /**
   * Crea y asocia una mascota al proceso de mascota extraviada
   * @param procesoId - El id del proceso
   * @param mascota - La mascota creada
   */
  createMascota(procesoId, mascota): Observable<Mascota>{
    return this.http.put<Mascota>(`${API_URL}/${procesoId}/${MASCOTA_URL}`, mascota)
  }

  /**
   * Retorna el Observable que contiene la lista de procesos de mascota
   * extraviada
   */
  getProcesosConRecompensaMenorA(precio): Observable<MascotaExtraviada[]>{
    return this.http.get<MascotaExtraviada[]>(`${API_URL}/${precio}`)
  }

  /**
   * Retorna el Observable que contiene la lista de procesos de mascota
   * extraviada
   */
  getProcesosExtraviadaConNombreDeMascotaIgualA(nombre): Observable<MascotaExtraviada[]>{
    return this.http.get<MascotaExtraviada[]>(`${API_URL}/${nombre}`)
  }

  /**
   * Retorna el Observable que contiene la lista de procesos de mascota
   * extraviada
   */
  getProcesosExtraviadaConRazaIgualA(raza): Observable<MascotaExtraviada[]>{
    return this.http.get<MascotaExtraviada[]>(`${API_URL}/${raza}`)
  }

  /**
   * Retorna el Observable que contiene la lista de procesos de mascota
   * extraviada
   */
  getProcesosExtraviadaConTipoIgualA(tipo): Observable<MascotaExtraviada[]>{
    return this.http.get<MascotaExtraviada[]>(`${API_URL}/${tipo}`)
  }

}
