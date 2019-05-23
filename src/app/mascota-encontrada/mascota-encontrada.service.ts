import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MascotaEncontrada } from './mascota-encontrada';

const API_URL = "http://localhost:8080/s4_mascotas-api/api/procesosMascotaEncontrada"

/**
 * El proveedor de servicios de todo lo relacionado
 * con los procesos de mascota encontrada
 */
@Injectable()
export class MascotaEncontradaService 
{

/**
   * Constructor del servicio
   * @param http - HttpClient necesario para ejecutar los pedidos
   */
  constructor(private http: HttpClient) { }

  /**
   * Retorna la lista con todos los procesos de mascotas encontradas
   */
  getMascotasEncontradas():Observable<MascotaEncontrada[]>
  {
      return this.http.get<MascotaEncontrada[]>(API_URL);
  }

  getDetail(id:number):Observable<MascotaEncontrada>
  {
      return this.http.get<MascotaEncontrada>(`${API_URL}/${id}`)
  }

  crearMascota(mascotaEncontrada:MascotaEncontrada):Observable<MascotaEncontrada>
  {
      return this.http.post<MascotaEncontrada>(API_URL, mascotaEncontrada);
  }

}