import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

import { environment } from '../../environments/environment';
import {MascotaEnAdopcion} from './mascota-adopcion';

/**
 * constantes para definir la ruta
 */
const API_URL = environment.apiURL;
const procesos = '/procesosMascotaEnAdopcion';

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
    return this.httpClient.get<MascotaEnAdopcion[]>(API_URL + procesos);
  }

  /**
   * retorna el observable de la mascota en adopcion con el id dado
   * @param id del proceso
   */
  getMascotaEnAdopcionDetail (id : number) : Observable<MascotaEnAdopcion>{
    return this.httpClient.get<MascotaEnAdopcion>(API_URL + procesos + '/' + id);
  }

  
}
