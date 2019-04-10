import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Mascota} from './mascota';

const API_URL = "http://localhost:8080/s4_mascotas-api/api/mascotas";

/**
 * Proveedor de servicios HTTP para las operaciones de la clase Mascota
 */
@Injectable({providedIn: 'root'})
export class MascotaService
{
   /**
   * Constructor del servicio
   * @param http - HttpClient necesario para ejecutar los pedidos
   */
  constructor(private http: HttpClient) { }

  /**
   * Retorna la lista con todas las mascotas en el sistema
   */
  getMascotas() : Observable<Mascota[]>
  {
    return this.http.get<Mascota[]>(API_URL);
  }
  
  /**
   * Retorna una mascota dado su id
   * @param id 
   */
  getMascotaDetail(id:number) : Observable<Mascota>
  {
    return this.http.get<Mascota>(`${API_URL}/${id}`);
  }

  /**
   * Crea una nueva mascota
   * @param mascota 
   */
  crearMascota(mascota:Mascota) : Observable<Mascota>
  {
    return this.http.post<Mascota>(API_URL, mascota);
  }

  /**
   * Filtra las mascotas del sistema por su estado
   */
  filtrarPorEstado(estado:string):Observable<Mascota[]>
  {
    return this.http.get<Mascota[]>(`${API_URL}/estado/${estado}`);
  }

  /**
   * Filtra las mascotas del sistema por su tipo
   */
  filtrarPorTipo(tipo:string):Observable<Mascota[]>
  {
    console.log('Tipo ='+  tipo);
    return this.http.get<Mascota[]>(`${API_URL}/tipo/${tipo}`);
  }
}