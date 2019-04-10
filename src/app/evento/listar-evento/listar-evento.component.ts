import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Evento } from '../evento';

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent implements OnInit {

   /**
   * Constructor for the component
   * @param eventoService The Evento services provider
   */
  constructor(private eventoService: EventoService) { }

  /**
   * Lista de eventos
   */
  eventos: Evento[]

  /**
   * Pobla la lista de eventos con el resultado
   * del API request
   */
  getEventos(): void{
    this.eventoService.getEventos()
        .subscribe(e => this.eventos = e)

  }

  ngOnInit() {
    this.getEventos()
  }

}
