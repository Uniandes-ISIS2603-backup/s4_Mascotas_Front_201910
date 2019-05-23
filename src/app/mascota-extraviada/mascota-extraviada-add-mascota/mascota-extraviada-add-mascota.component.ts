import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { MascotaExtraviadaService } from '../mascota-extraviada.service';
import { MascotaExtraviada } from '../mascota-extraviada';
import { Mascota } from '../../mascota/mascota';

/**
 * @author Sebastián Lemus Cadena (s.lemus)
 */
@Component({
  selector: 'app-mascota-extraviada-add-mascota',
  templateUrl: './mascota-extraviada-add-mascota.component.html',
  styleUrls: ['./mascota-extraviada-add-mascota.component.css']
})
export class MascotaExtraviadaAddMascotaComponent implements OnInit {

  constructor(
    private procesoService: MascotaExtraviadaService,
    private troastrService: ToastrService
  ) { }

  public isCollapsed = true

  /**
   * El proceso de mascota extraviada
   */
  @Input() proceso: MascotaExtraviada

  /**
   * Emite una señal que notifica que la mascota fue creada
   * de tal forma que se refresque la lista de mascotas
   */
  @Output() updateMascotas = new EventEmitter

  /**
   * La mascota a asociar
   */
  mascota: Mascota

  postMascota(mascotaForm: NgForm): Mascota{
    this.mascota.procesoMascotaExtraviada = this.proceso
    this.procesoService.createMascota(this.proceso.id, this.mascota)
        .subscribe(
          () => {
            mascotaForm.resetForm()
            this.updateMascotas.emit()
            this.troastrService.success("La mascota del proceso fue creada exitosamente")
          },
          err => {
            this.troastrService.error(err, "Error")
          }
        )
    return this.mascota
  }
  
  /**
   * Función que inicializa el componente
   */
  ngOnInit() {
    this.mascota = new Mascota()
  }

  /**
   * Función que está pendiente de los cambios para 
   * notificar y actualizar a las mascotas
   */
  ngOnChanges(){
    this.ngOnInit()
  }

}
