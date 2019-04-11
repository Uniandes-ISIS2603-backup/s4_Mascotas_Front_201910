import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import { MascotaEnAdopcion } from '../mascota-adopcion';
import { MascotaAdopcionService } from '../mascota-adopcion-service.service';

@Component({
  selector: 'app-mascota-adopcion-create',
  templateUrl: './mascota-adopcion-create.component.html',
  styleUrls: ['./mascota-adopcion-create.component.css']
})
export class MascotaAdopcionCreateComponent implements OnInit {

  proceso: MascotaEnAdopcion;
  /**
    * Output que le dice al componente que el usuario ha creado una nueva mascota
    */
   @Output() create = new EventEmitter();


    /**
     * Output que le dice al componente que el usuario no desea continuar creando una mascota nueva
     */
    @Output() cancel = new EventEmitter();
  constructor(private route:ActivatedRoute, private service:MascotaAdopcionService, private toastrService: ToastrService) { }

  /**
   * inicializa el componente
   */
  ngOnInit() {
    this.proceso = new MascotaEnAdopcion();
  }

  /**
   * crea un nuevo proceso de adopción
   */
  crearProceso() : MascotaEnAdopcion{

    this.service.createProcesoAdopcion(this.proceso).subscribe(p => {
      this.proceso = p;
      this.create.emit();
      this.toastrService.success("El proceso se creó", "Proceso Creado");
    });
    return this.proceso;
  }

  /**
   * cancela la creación del proceso
   */
  cancelCreation() : void
    {
        this.cancel.emit();
    }

    //changeListener($event) : void 
    //{this.readThis($event.target);}

}
