import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MascotaExtraviadaService } from '../mascota-extraviada.service';
import { ToastrService } from 'ngx-toastr';
import { MascotaExtraviada } from '../mascota-extraviada';

@Component({
  selector: 'app-mascota-extraviada-edit',
  templateUrl: './mascota-extraviada-edit.component.html',
  styleUrls: ['./mascota-extraviada-edit.component.css']
})
export class MascotaExtraviadaEditComponent implements OnInit {

  /**
   * Constructor del componente
   * @param procesoService - El proveedor de servicios para los proceso de mascota extraviada
   * @param troastrService - Elemento para mostrar mensajes al usuario
   */
  constructor(
    private procesoService: MascotaExtraviadaService,
    private troastrService: ToastrService
  ) { }

  /**
   * El proceso a actualizar
   */
  @Input() procesoMascotaExtraviada: MascotaExtraviada

  /**
   * Output que informa al componente padre
   * que el usuario ya no quiere actualizar un proceso
   */
  @Output() cancel = new EventEmitter()

  /**
   * Output que informa al componente padre
   * que el usuario actualizó un nuevo proceso
   */
  @Output() update = new EventEmitter()

  /**
   * Emite una señal para informar al componente padre
   * que el usuario ya no quiere actualizar un proceso
   */
  cancelEdition(): void{
    this.cancel.emit()
  }

  /**
   * Función que actualiza la información de un proceso de 
   * mascota extraviada
   */
  editMascotaExtraviada(): void{
    this.procesoService.updateMascotaExtraviada(this.procesoMascotaExtraviada)
        .subscribe(() => {
          this.troastrService.success("El proceso de mascota extraviada ha sido actualizado", "Edición de Proceso")
        })
    this.update.emit()
  }


  ngOnInit() {
  }

}
