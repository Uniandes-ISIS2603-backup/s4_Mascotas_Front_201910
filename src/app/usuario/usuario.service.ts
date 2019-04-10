import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  {Usuario} from './usuario'

/**
 * Constante de la ruta para los requerimientos
 */
const API_URL = "http://localhost:8080/s4_mascotas-api/api/usuario";
/**
 * Proveedor de servicios HTTP para las operaciones de la clase Usuario
 */
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  /**
   * Constructor de la clase de servicio Usuario
   * @param http - HttpClient necesario para ejecutar los pedidos
   */
  constructor(private http: HttpClient) { }

  /**
   * Metodo que retorna la lista de usuarios
   */
  getUsuarios(): Observable<Usuario[]>
   {
      return this.http.get<Usuario[]>(API_URL);
   } 

   /**
    * Metodo que retorna el detalle del usuario
    * @param id - id del usuario para el detalle
    */
  getUsuarioDetail(id:number):Observable<Usuario>
  {
    return this.http.get<Usuario>(`${API_URL}/${id}`);
  }

  /**
   * Crear el usuario en la persistencia
   * @param usuario - objeto de tipo usuario que recibe la peristencia
   */
  crearUsuario(usuario:Usuario): Observable<Usuario>
  {
      return this.http.post<Usuario>(API_URL,usuario);
  }

  
  
}

