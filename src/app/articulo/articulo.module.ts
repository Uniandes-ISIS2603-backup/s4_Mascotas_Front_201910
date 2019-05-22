import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarArticuloComponent } from './listar-articulo/listar-articulo.component';
import { ArticuloDetailComponent } from './articulo-detail/articulo-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ArticuloService } from '../articulo/articulo.service';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioModule } from '../usuario/usuario.module';
import  {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,  
    HttpClientModule, 
    AppRoutingModule, 
    FormsModule, 
    UsuarioModule,
    NgxPermissionsModule.forRoot()
  ],
  bootstrap: [ListarArticuloComponent],
  declarations: [ListarArticuloComponent, 
                 ArticuloDetailComponent, 
                 CrearArticuloComponent,
                EditarArticuloComponent],
  providers: [ArticuloService, UsuarioService],
  exports: [ListarArticuloComponent, 
            ArticuloDetailComponent, 
            CrearArticuloComponent,
            EditarArticuloComponent]

})

export class ArticuloModule {

 }
