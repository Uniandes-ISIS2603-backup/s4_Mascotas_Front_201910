import { Component, OnInit } from '@angular/core';

import{ MascotaAdopcionService } from '../mascota-adopcion-service.service';
import { MascotaEnAdopcion } from '../mascota-adopcion';

@Component({
  selector: 'app-mascota-adopcion-list',
  templateUrl: './mascota-adopcion-list.component.html',
  styleUrls: ['./mascota-adopcion-list.component.css']
})
export class MascotaAdopcionListComponent implements OnInit {

  /**
   * constructor del componente
   * @param service el servicio proveedor
   */
  constructor(private service : MascotaAdopcionService) { }

  /**
   * lista de las mascotas en adopción
   */
  mascotasEnAdopcion : MascotaEnAdopcion[];

  /**
   * inicializa el componente
   */
  ngOnInit() {
    this.getMascotasEnAdopcion();
  }

  /**
   * mete a la lista todos los procesos de mascota en adopción
   */
  getMascotasEnAdopcion() : void {

    this.service.getMascotasEnAdopcion().subscribe(mascota => this.mascotasEnAdopcion = mascota);
  }

}
