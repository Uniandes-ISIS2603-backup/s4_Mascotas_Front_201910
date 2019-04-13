import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import {UsuarioService} from './usuario.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule

  ],
  declarations: [UsuarioListaComponent, UsuarioDetalleComponent, CrearUsuarioComponent],
  providers:[UsuarioService],
  exports:[UsuarioListaComponent,UsuarioDetalleComponent,CrearUsuarioComponent],
  bootstrap: [UsuarioDetalleComponent]
  
})
export class UsuarioModule { }
