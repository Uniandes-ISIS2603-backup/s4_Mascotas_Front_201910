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
   * retorna el observable de la calificacion con el id dado
   * @param id del proceso
   */
  getCalificacionDetail (id : number) : Observable<Calificacion>{
    return this.httpClient.get<Calificacion>(API_URL + calificacion + '/' + id);
  }
  /**
   * returna el observable de la calificacion creada
   * @param c
   */
  createCalificacion(c : Calificacion) : Observable<Calificacion>{
    return this.httpClient.post<Calificacion>(API_URL + calificacion, c);
  }
  getCalificacionByProceso(id:number) : Observable<Calificacion>{
    return this.httpClient.get<Calificacion>(API_URL + calificacion + "/proceso/" + id);
  }
}
