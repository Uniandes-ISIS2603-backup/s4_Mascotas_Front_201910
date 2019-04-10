import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

import { environment } from '../../environments/environment';

import { Calificacion } from './calificacion';

/**
 * constantes para definir la ruta
 */
const API_URL = environment.apiURL;
const calificacion = '/calificaciones';

@Injectable()
export class CalificacionService {

  /**
   * Constructor del servicio
   * @param http - HttpClient necesario para ejecutar los procesos
   */
  constructor(private httpClient : HttpClient) { }
  /**
   * retorna el observable de la mascota en adopcion con el id dado
   * @param id del proceso
   */
  getCalificacionDetail (id : number) : Observable<Calificacion>{
    return this.httpClient.get<Calificacion>(API_URL + calificacion + '/' + id);
  }
}
