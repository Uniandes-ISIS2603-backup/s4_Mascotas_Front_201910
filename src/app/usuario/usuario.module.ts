import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import {UsuarioService} from './usuario.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule

  ],
  declarations: [UsuarioListaComponent, UsuarioDetalleComponent],
  providers:[UsuarioService],
  exports:[UsuarioListaComponent,UsuarioDetalleComponent],
  bootstrap: [UsuarioDetalleComponent]
  
})
export class UsuarioModule { }
