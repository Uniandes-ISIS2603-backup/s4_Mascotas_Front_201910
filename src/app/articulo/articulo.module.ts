import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarArticuloComponent } from './listar-articulo/listar-articulo.component';
import { ArticuloDetailComponent } from './articulo-detail/articulo-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ArticuloService } from '../articulo/articulo.service';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';

@NgModule({
  imports: [
    CommonModule,  
    HttpClientModule, 
    AppRoutingModule, 
    FormsModule
  ],
  bootstrap: [ListarArticuloComponent],
  declarations: [ListarArticuloComponent, 
                 ArticuloDetailComponent, 
                 CrearArticuloComponent],
  providers: [ArticuloService],
  exports: [ListarArticuloComponent, 
            ArticuloDetailComponent, 
            CrearArticuloComponent]

})

export class ArticuloModule {

 }
