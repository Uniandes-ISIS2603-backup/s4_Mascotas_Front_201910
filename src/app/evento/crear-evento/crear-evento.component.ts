import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evento } from '../evento';
import { EventoService } from '../evento.service';
import {ToastrService} from 'ngx-toastr';
import {DatePipe} from '@angular/common';
import { UsuarioService } from '../../usuario/usuario.service';
import {Usuario} from '../../usuario/usuario';
import {Router} from '@angular/router'

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css'],
  providers: [DatePipe]
})
export class CrearEventoComponent implements OnInit {

  constructor(private dp: DatePipe, private eventoService:EventoService, private toastrService: ToastrService,
              private usuarioService:UsuarioService, private router: Router)
  { }

  /**
   * Nuevo evento a crear
   */
  evento : Evento;

  /**
   * Imagen del evento 
   */
    imagen;

  /**
   * Todos los usuarios 
   */
  usuarios : Usuario[];

  /**
    * Recupera la lista de todos los usuarios
    */
   getUsuarios(): void {
    this.usuarioService.getUsuarios()
        .subscribe(u => {
            this.usuarios = u;
        }, err => {
            this.toastrService.error(err, 'Error');
        });
}


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
          this.router.navigate(['/eventos/' + this.evento.id]);
          this.toastrService.success("El evento ha sido creado", "Evento Creado");
         });
      return this.evento;
  }

  cancelCreation() : void
  {
      this.cancel.emit();
  }

  changeListener($event) : void 
  {
      this.readThis($event.target);
  }
  
     /**
     * Lee el archivo pasado por parámetro 
     * @param inputValue 
     */
    readThis(inputValue: any): void 
    {
        var file:File = inputValue.files[0];
        var myReader:FileReader = new FileReader();
        
        myReader.onloadend = (e) => 
        {
            this.imagen = myReader.result;
            console.log(myReader.result);
            this.evento.imagen = this.imagen;
        }
    
        myReader.readAsDataURL(file);
    }

  ngOnInit(): void 
  { 
      this.evento = new Evento();
      this.evento.organizador = new Usuario();
      this.getUsuarios();
  }

}
