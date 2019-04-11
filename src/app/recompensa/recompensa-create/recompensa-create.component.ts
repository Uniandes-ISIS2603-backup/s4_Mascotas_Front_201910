import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recompensa } from '../recompensa';
import { RecompensaService } from '../recompensa.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recompensa-create',
  templateUrl: './recompensa-create.component.html',
  styleUrls: ['./recompensa-create.component.css']
})
export class RecompensaCreateComponent implements OnInit {

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
   * La recompensa nueva
   */
  procesoMascotaExtraviada: Recompensa

  /**
   * Output que informa al componente padre
   * que el usuario ya no quiere crear una recompensa
   */
  @Output() cancel = new EventEmitter()

  /**
   * Output que informa al componente padre
   * que el usuario creó una nueva recompensa
   */
  @Output() create = new EventEmitter()

  /**
   * Emite una señal para informar al componente padre
   * que el usuario ya no quiere crear un proceso
   */
  cancelCreation(): void{
    this.cancel.emit()
  }

  /**
   * Función que crea un nuevo proceso
   * de mascota extraviada
   */
  createMascotaExtraviada(): Recompensa{
    console.log(this.procesoMascotaExtraviada)
    this.recompensaService.createMascotaExtraviada(this.procesoMascotaExtraviada)
        .subscribe((p) => {
          this.procesoMascotaExtraviada = p
          this.create.emit()
          this.troastrService.success("El proceso de mascota extraviada fue creado", "Creación del Proceso")
        })
    return this.procesoMascotaExtraviada
  }

  /**
   * Función de inicialización
   */
  ngOnInit() {
    this.procesoMascotaExtraviada = new Recompensa()
  }

}
