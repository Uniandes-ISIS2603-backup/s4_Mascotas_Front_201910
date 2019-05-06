import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clasificado } from './clasificado';

const API_URL = "http://localhost:8080/s4_mascotas-api/api/clasificados";

/**
 * Proveedor de servicios HTTP para operaciones de Clasificados
 */
@Injectable({
  providedIn: 'root'
})
export class ClasificadoService {

  /**
  * Constructor del servicio
  * @param http - HttpClient necesario para ejecutar los pedidos
  */
  constructor(private http: HttpClient) { }

  /**
   * Retorna la lista con todos los clasificados en el sistema
   */
  getClasificados(): Observable<Clasificado[]> {
    return this.http.get<Clasificado[]>(API_URL);
  }

  /**
   * Retorna el detalle de los datos del clasificado
   * @param clasificadoId - El id del clasificado
   */
  getClasificadoDetail(clasificadoId: number): Observable<Clasificado> {
    return this.http.get<Clasificado>(`${API_URL}/${clasificadoId}`)
  }

  /**
   * Crea un clasificado en el sistema
   */
  crearClasificado(clasificado: Clasificado): Observable<Clasificado> {
    console.log("Clasificado: ---> ", clasificado);
    return this.http.post<Clasificado>(API_URL, clasificado)
  }

}
