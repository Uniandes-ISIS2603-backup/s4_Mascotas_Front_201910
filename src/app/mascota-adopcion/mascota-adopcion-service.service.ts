import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

import { environment } from '../../environments/environment';
import {MascotaEnAdopcion} from './mascota-adopcion';
import {Calificacion} from '../calificacion/calificacion';

/**
 * constantes para definir la ruta
 */
const API_URL = environment.apiURL;
const procesos = '/procesosMascotaEnAdopcion';
const calificaciones = '/calificaciones';

@Injectable(//{ providedIn: 'root'}
)
export class MascotaAdopcionService {

  /**
   * Constructor del servicio
   * @param http - HttpClient necesario para ejecutar los procesos
   */
  constructor(private httpClient : HttpClient) { }

  /**
   * Retorna el Observable que contiene la lista de procesos de mascota
   * en adopción
   */
  getMascotasEnAdopcion () : Observable<MascotaEnAdopcion[]>{
    
    return this.httpClient.get<any[]>(API_URL + procesos);
  }

  /**
   * retorna el observable que contiene la lista 
   * de calificaciones de los buenos procesos de mascotas en adopcion
   */
  getCalificacionesProcesosEnAdopcion () : Observable<Calificacion[]>{
    return this.httpClient.get<any[]>(API_URL + calificaciones);
  }

  /**
   * retorna el observable de la mascota en adopcion con el id dado
   * @param id del proceso
   */
  getMascotaEnAdopcionDetail (id : number) : Observable<MascotaEnAdopcion>{
    return this.httpClient.get<MascotaEnAdopcion>(API_URL + procesos + '/' + id);
  }

  /**
   * retorna el observable de la mascota creada
   * @param proceso 
   */
  createProcesoAdopcion(proceso : MascotaEnAdopcion ) : Observable<MascotaEnAdopcion>{
    return this.httpClient.post<MascotaEnAdopcion>(API_URL + procesos, proceso);
  }

  /**
   * retorna las mascotas que están sin adoptar
   */
  getMascotasSinAdoptar() : Observable<MascotaEnAdopcion[]>{
    return this.httpClient.get<MascotaEnAdopcion[]>(API_URL + procesos + "/sinAdoptar");
  }

  /**
   * retorna las mascotas filtradas por tipo- perro o gato
   * @param tipo 
   */
  getProcesosPorTipo(tipo: String) : Observable<MascotaEnAdopcion[]>{
    return this.httpClient.get<MascotaEnAdopcion[]>(API_URL + procesos + "/filtrar/" + tipo);
  }
  
}
