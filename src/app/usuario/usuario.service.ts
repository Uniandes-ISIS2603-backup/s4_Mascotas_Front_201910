import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario'
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions'
import 'rxjs/add/operator/catch';

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
  constructor(private http: HttpClient, private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

  role: String;
  idAC: number;
  /**
   * Metodo que retorna la lista de usuarios
   */
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_URL);
  }

  /**
   * Metodo que retorna el detalle del usuario
   * @param id - id del usuario para el detalle
   */
  getUsuarioDetail(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${API_URL}/${id}`);
  }

  /**
   * Crear el usuario en la persistencia
   * @param usuario - objeto de tipo usuario que recibe la peristencia
   */
  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(API_URL, usuario);
  }

  /**
   * Eliminar Usuario
   */
  eliminarUsuario(id:number): void{
      this.http.delete(`${API_URL}/${id}`);
  }
  start(): void {
    this.permissionsService.flushPermissions();
    this.roleService.flushRoles();
    this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review']);
    const role = localStorage.getItem('role');
    if (!role) {
      this.setGuestRole();
    } else if (role === 'ADMIN') {
      this.setAdministratorRole();
    } else {
      this.setClientRole();
    }
  }

  setGuestRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('GUEST', ['']);
  }

  setClientRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('NORMAL', ['leave_review']);
    localStorage.setItem('role', 'NORMAL');
  }

  setAdministratorRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('ADMIN', ['edit_author_permission', 'delete_author_permission']);
    localStorage.setItem('role', 'ADMIN');
  }

  printRole(): void {
    console.log(this.roleService.getRoles());
  }

  /**
   * Logs the user in with the desired role
   * @param role The desired role to set to the user
   */
  login(usuario: String, contrasenha: String): void {

    this.http.get<Usuario>(`${API_URL}/verificar/${usuario}/${contrasenha}`).subscribe(
      usr => {
      this.role = usr.rol;
       localStorage.setItem('idUsr',`${usr.id}`)
        console.log(usr.id);
        console.log(this.role);
        this.idAC=usr.id;

        if (this.role === 'ADMIN') {
          this.setAdministratorRole();
        } else {
          this.setClientRole()
        }
        this.router.navigateByUrl(`/usuario/${usr.id}`);
      console.log(localStorage.getItem('idUsr'));
      }

    )
    

  }

  /**
    * Logs the user out
    */
  logout(): void {
    this.roleService.flushRoles();
    this.setGuestRole();
    localStorage.removeItem('role');
    localStorage.removeItem('idUsr')
    this.router.navigateByUrl('/');
  }


}

