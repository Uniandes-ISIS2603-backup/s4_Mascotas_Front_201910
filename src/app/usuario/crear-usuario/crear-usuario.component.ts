import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Usuario } from '../usuario';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private usuarioServicio: UsuarioService,
    private toastrService: ToastrService) { }

  usuarioCreate: Usuario;
  roles: String[];

  @Output() create = new EventEmitter();

  @Output() cancel = new EventEmitter();

  crearUsuario(): Usuario {
    this.usuarioServicio.crearUsuario(this.usuarioCreate).subscribe(
      usr => {
        usr.rol = 'NORMAL';
        this.usuarioCreate = usr;
        this.create.emit();
        this.toastrService.success("El usuario fue registrado", "Usuario Creado");
      }
    );
    console.log(this.usuarioCreate);
    return this.usuarioCreate;
  }

  cancelCreation(): void {
    this.cancel.emit();
  }


  ngOnInit() {

    this.usuarioCreate = new Usuario();

  }

}
