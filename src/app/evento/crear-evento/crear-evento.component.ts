import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evento } from '../evento';
import { EventoService } from '../evento.service';
import {ToastrService} from 'ngx-toastr';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css'],
  providers: [DatePipe]
})
export class CrearEventoComponent implements OnInit {

  constructor(private dp: DatePipe, private eventoService:EventoService, private toastrService: ToastrService)
  { }

  /**
   * Nuevo evento a crear
   */
  evento : Evento;


  /**
  * Output que le dice al componente que el usuario ha creado un nuevo evento
  */
 @Output() create = new EventEmitter();


  /**
   * Output que le dice al componente que el usuario no desea continuar creando un evento
   */
  @Output() cancel = new EventEmitter();

  /**
   * Crear un evento
   */
  crearEvento() : Evento
  {
      let fechaI: Date = new Date(this.evento.fechaInicio.year, this.evento.fechaInicio.month - 1, this.evento.fechaInicio.day);
      let fechaF: Date = new Date(this.evento.fechaFin.year, this.evento.fechaFin.month - 1, this.evento.fechaFin.day);

      this.evento.fechaInicio = this.dp.transform(fechaI, 'yyyy-MM-dd');
      this.evento.fechaFin = this.dp.transform(fechaF, 'yyyy-MM-dd');

      console.log(this.evento);

      this.eventoService.crearEvento(this.evento)
          .subscribe((m)=>{
          this.evento = m;
          this.create.emit();
          this.toastrService.success("El evento ha sido creado", "Evento Creado");
         });
      return this.evento;
  }

  cancelCreation() : void
  {
      this.cancel.emit();
  }

  
  ngOnInit(): void 
  { 
      this.evento = new Evento();
  }

}
