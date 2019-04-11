import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ToastrService} from 'ngx-toastr'
import { MascotaExtraviadaService } from '../mascota-extraviada.service';
import { MascotaExtraviada } from '../mascota-extraviada';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-mascota-extraviada-create',
  templateUrl: './mascota-extraviada-create.component.html',
  styleUrls: ['./mascota-extraviada-create.component.css']
})
export class MascotaExtraviadaCreateComponent implements OnInit {

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
   * El proceso nuevo
   */
  procesoMascotaExtraviada: MascotaExtraviada

  /**
   * Output que informa al componente padre
   * que el usuario ya no quiere crear un proceso
   */
  @Output() cancel = new EventEmitter()

  /**
   * Output que informa al componente padre
   * que el usuario creó un nuevo proceso
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
  createMascotaExtraviada(): MascotaExtraviada{
    
    this.procesoService.createMascotaExtraviada(this.procesoMascotaExtraviada)
        .subscribe((p) => {
          this.procesoMascotaExtraviada = p
          this.create.emit()
          this.troastrService.success("El proceso de mascota extraviada fue creado", "Creación del Proceso")
        })
    console.log(this.procesoMascotaExtraviada)
    return this.procesoMascotaExtraviada
  }

  /**
   * Función de inicialización
   */
  ngOnInit() {
    this.procesoMascotaExtraviada = new MascotaExtraviada()
  }

}
