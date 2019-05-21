import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarBusquedaComponent } from './listar-busqueda/listar-busqueda.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuscarService } from './buscar.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, AppRoutingModule, FormsModule, NgbModule
  ],
  declarations: [ListarBusquedaComponent],
  bootstrap: [ListarBusquedaComponent],
  providers: [BuscarService],
  exports: [ListarBusquedaComponent]
})
export class BuscarModule { }
