import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import {UsuarioService} from './usuario.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import {FormsModule} from '@angular/forms';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import  {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule,
    NgxPermissionsModule.forRoot()

  ],
  declarations: [UsuarioListaComponent, UsuarioDetalleComponent, CrearUsuarioComponent, UsuarioLoginComponent],
  providers:[UsuarioService],
  exports:[UsuarioListaComponent,UsuarioDetalleComponent,CrearUsuarioComponent],
  bootstrap: [UsuarioDetalleComponent,UsuarioLoginComponent]
  
})
export class UsuarioModule { }
