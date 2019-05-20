import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Evento } from '../evento';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css'],
  providers: [DatePipe]
})
export class ListarEventoComponent implements OnInit {

   /**
   * Constructor for the component
   * @param eventoService The Evento services provider
   */
  constructor(private eventoService: EventoService, private dp: DatePipe) { }

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

  /**
   * Filtra los eventos por fecha
   * @param fecha 
   */
  filtrarPorFecha(fecha):void
  {
    let fechaI: Date = new Date(fecha.year, fecha.month - 1, fecha.day);

    fecha = this.dp.transform(fechaI, 'yyyy-MM-dd');

    this.eventoService.filtrarPorFecha(fecha).subscribe(ms=>{this.eventos=ms});
  }

}
