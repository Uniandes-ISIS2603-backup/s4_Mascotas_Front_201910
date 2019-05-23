import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';

import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  constructor( private toastrService: ToastrService,private usuarioService: UsuarioService) { }

  usuario:String;
  contrasenha:String;

     /**
    * Logs the user in with the selected role
    */
   login(): void {
     try {
      this.usuarioService.login(this.usuario,this.contrasenha);
      if(localStorage.usrId!=null)
      {
        this.toastrService.error('Inicio de Sesion exitoso') 
      }
       
     } catch (error) {
      this.toastrService.error(error)
     }
    
}

  ngOnInit() {
    
  }

}
