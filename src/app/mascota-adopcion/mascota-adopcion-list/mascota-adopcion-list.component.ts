import { Component, OnInit } from '@angular/core';

import{ MascotaAdopcionService } from '../mascota-adopcion-service.service';
import { MascotaEnAdopcion } from '../mascota-adopcion';
import {Calificacion} from '../../calificacion/calificacion';
import { Mascota} from '../../mascota/mascota';

@Component({
  selector: 'app-mascota-adopcion-list',
  templateUrl: './mascota-adopcion-list.component.html',
  styleUrls: ['./mascota-adopcion-list.component.css']
})
export class MascotaAdopcionListComponent implements OnInit {

  /**
   * lista de las mascotas en adopción
   */
  mascotasEnAdopcion : MascotaEnAdopcion[];

  /**
   * lista de buenas calificaciones
   */
  calificaciones : Calificacion[];

  /**
   * constructor del componente
   * @param service el servicio proveedor
   */
  constructor(private service : MascotaAdopcionService) {
    this.mascotasEnAdopcion = [];
    this.calificaciones = [];
    
   }

  /**
   * inicializa el componente
   */
  ngOnInit() {
    this.getMascotasSinAdoptar();
    this.getCalificaciones();
  }

  /**
   * mete a la lista todos los procesos de mascota en adopción
   */
  getMascotasEnAdopcion() : void {
 
    this.service.getMascotasEnAdopcion().subscribe(mascota => {
      this.mascotasEnAdopcion = mascota;
      console.log(this.mascotasEnAdopcion);
    });
  }
  
  /**
   * mete a la lista todos los proceso de mascota en adopción que no se hayan terminado
   */
  getMascotasSinAdoptar() : void {

    
    this.service.getMascotasSinAdoptar().subscribe(mascota => {
      this.mascotasEnAdopcion = mascota;
      console.log(this.mascotasEnAdopcion);
    });
  }

   
  /**
   * mete a la lista las calificaciones buenas de los procesos en adopción
   */
  getCalificaciones() : void {

    this.service.getCalificacionesProcesosEnAdopcion().subscribe(actual => {
      this.calificaciones = actual;

    });
  }

  filtrarPorTipo(tipo:String) : void {
    this.service.getProcesosPorTipo(tipo).subscribe(mascota => {
      this.mascotasEnAdopcion = mascota;
      console.log(this.mascotasEnAdopcion);
    });
  }
}
