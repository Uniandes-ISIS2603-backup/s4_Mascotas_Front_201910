import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecompensaService } from '../recompensa.service';
import { ToastrService } from 'ngx-toastr';
import { Recompensa } from '../recompensa';

@Component({
  selector: 'app-recompensa-edit',
  templateUrl: './recompensa-edit.component.html',
  styleUrls: ['./recompensa-edit.component.css']
})
export class RecompensaEditComponent implements OnInit {

  /**
   * Constructor del componente
   * @param recompensaService - El proveedor de servicios para los proceso de mascota extraviada
   * @param troastrService - Elemento para mostrar mensajes al usuario
   */
  constructor(
    private recompensaService: RecompensaService,
    private troastrService: ToastrService
  ) { }

  /**
   * La recompensa a actualizar
   */
  @Input() recompensa: Recompensa

    /**
   * Output que informa al componente padre
   * que el usuario ya no quiere actualizar una recompensa
   */
  @Output() cancel = new EventEmitter()

  /**
   * Output que informa al componente padre
   * que el usuario actualizó una nueva recompensa
   */
  @Output() update = new EventEmitter()

  /**
   * Emite una señal para informar al componente padre
   * que el usuario ya no quiere actualizar una recompensa
   */
  cancelEdition(): void{
    this.cancel.emit()
  }

  /**
   * Función que actualiza la información 
   * de una recompensa
   */
  editRecompensa(): void{
    this.recompensaService.updateMascotaExtraviada(this.recompensa)
        .subscribe(() => {
          this.troastrService.success("La recompensa ha sido actualizada", "Edición de Recompensa")
        })
  }

  ngOnInit() {
  }

}
