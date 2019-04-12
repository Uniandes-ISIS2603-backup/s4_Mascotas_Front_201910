import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalificacionService } from '../calificacion.service';
import { ToastrService } from 'ngx-toastr';
import { Calificacion } from '../calificacion';

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css']
})
export class CalificacionCreateComponent implements OnInit {
/**
 * la calificación del proceso de adopción
 */
  calificacion : Calificacion;
   /**
    * Output que le dice al componente que el usuario ha creado una nueva calificacion
    */
   @Output() create = new EventEmitter();


    /**
     * Output que le dice al componente que el usuario no desea continuar creando una nueva calificacion
     */
    @Output() cancel = new EventEmitter();

  /**
   * constructor de la clase
   * @param route 
   * @param service 
   * @param toastrService 
   */
  constructor(private route: ActivatedRoute, private service:CalificacionService, private toastrService: ToastrService)
  { }

  /**
   * inicializar el componente crear calificación
   */
  ngOnInit() {
    this.calificacion = new Calificacion;
    this.createCalificacion();
  }

  /**
   * crear una calificación nueva
   */
  createCalificacion() : Calificacion{
     this.service.createCalificacion(this.calificacion).subscribe( c => {
       this.calificacion = c;
       this.create.emit();
       this.toastrService.success("La calificacion ha sido creada", "Calificacion creada");
     });

     return this.calificacion;
  }
  /**
   * cancelar la creación de una calificacion
   */
  cancelCreation() : void
  {
      this.cancel.emit();
  }

}
