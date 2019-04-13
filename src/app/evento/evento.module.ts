import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoService } from './evento.service';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, AppRoutingModule, FormsModule, NgbModule
  ],
  declarations: [EventoDetailComponent, ListarEventoComponent, CrearEventoComponent, EditarEventoComponent],
  bootstrap: [ListarEventoComponent],
  providers: [EventoService],
  exports: [ListarEventoComponent, EventoDetailComponent, CrearEventoComponent, EditarEventoComponent]
})
export class EventoModule { }
