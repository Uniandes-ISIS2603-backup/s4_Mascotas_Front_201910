import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../usuario';


@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  /**
   * Constructor de la clase usuario lista
   * @param usuarioService - parametro que tiene los servicios del back
   */
  constructor(private usuarioService: UsuarioService) { }


  /**
   * 
   */
  usuarios:Usuario[]; 
   
  getUsuarios(): void{
    this.usuarioService.getUsuarios().subscribe(
      usr =>{ this.usuarios=usr}

    );
  }



  ngOnInit() {
    this.getUsuarios();
  }

}
