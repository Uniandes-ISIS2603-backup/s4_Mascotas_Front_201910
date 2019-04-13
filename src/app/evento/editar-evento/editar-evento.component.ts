import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DatePipe} from '@angular/common';

import {EventoService} from '../evento.service';
import {UsuarioService} from '../../usuario/usuario.service';
import {Evento} from '../evento';
import {Usuario} from '../../usuario/usuario';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css'],
  providers: [DatePipe]
})
export class EditarEventoComponent implements OnInit {

  constructor(
    private dp: DatePipe,
    private eventoService: EventoService,
    private usuarioService: UsuarioService,
    private router: Router,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) { }

   /**
    * El evento que se va a actualizar
    */
   evento: Evento


   /**
     * Lista de todos los usuarios
     */
    usuarios: Usuario[];

    /**
    * Id para editar evento
    * This is passed as a parameter by the parent component
    */
   @Input() evento_id: number;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create an editorial
   */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new editorial
  */
  @Output() update = new EventEmitter();

  /**
    * Informacion del evento que se va a actualizar
    */
   getEvento(): void {
    this.eventoService.getEventoDetail(this.evento_id)
    .subscribe(evento => {
      evento.fechaInicio  = evento.fechaInicio.substring(0, 10);
      var fechaI = {
        day: +evento.fechaInicio.split('-')[2],
        month: +evento.fechaInicio.split('-')[1],
        year: +evento.fechaInicio.split('-')[0]
    };
    evento.fechaFin  = evento.fechaFin.substring(0, 10);
      var fechaF = {
        day: +evento.fechaFin.split('-')[2],
        month: +evento.fechaFin.split('-')[1],
        year: +evento.fechaFin.split('-')[0]
    };
        this.evento = evento;
        this.evento.fechaInicio = fechaI;
        this.evento.fechaFin = fechaF;
    });
}

 /**
    * Recupera la lista de todos los usuarios
    */
   getUsuarios(): void {
    this.usuarioService.getUsuarios()
        .subscribe(u => {
            this.usuarios = u;
        });
}

 /**
    * Cancela edicion del evento
    */
   cancelEdition(): void {
    this.cancel.emit();
    this.toastrService.warning('El evento no se edito', 'Edicion de evento');
    this.router.navigate(['/evento/list']);
}

/**
    * Actualizar el evento
    */
   updateArticulo(): void {
    let fechaI: Date = new Date(this.evento.fechaInicio.year, this.evento.fechaInicio.month - 1, this.evento.fechaInicio.day);
    let fechaF: Date = new Date(this.evento.fechaFin.year, this.evento.fechaFin.month - 1, this.evento.fechaFin.day);

    this.evento.fechaInicio = this.dp.transform(fechaI, 'yyyy-MM-dd');
    this.evento.fechaFin = this.dp.transform(fechaF, 'yyyy-MM-dd');
    
    this.eventoService.updateEvento(this.evento)
        .subscribe(() => {
            this.update.emit();
            this.router.navigate(['/eventos/' + this.evento.id]);
            this.toastrService.success("Se actualizo satisfactoriamente el evento", 'Evento actualizado');
        });
}
 
  ngOnInit() {
    this.evento_id = +this.route.snapshot.paramMap.get('id');
    this.getEvento();
    this.getUsuarios();
  }

   /**
    * The function which is called every time the user chooses to edit
    */
   ngOnChanges() {
    this.ngOnInit();
}

}
