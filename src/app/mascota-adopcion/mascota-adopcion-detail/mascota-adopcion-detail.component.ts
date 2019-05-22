import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MascotaAdopcionService } from '../mascota-adopcion-service.service';
import { MascotaEnAdopcion } from '../mascota-adopcion';
import { MascotaEnAdopcionDetail } from '../mascota-en-adopcion-detail';



@Component({
  selector: 'app-mascota-adopcion-detail',
  templateUrl: './mascota-adopcion-detail.component.html',
  styleUrls: ['./mascota-adopcion-detail.component.css']
})
export class MascotaAdopcionDetailComponent implements OnInit {

  /**
   * constructor del componente
   * @param route 
   * @param service 
   */
  constructor(private route: ActivatedRoute , private service :MascotaAdopcionService) { }

  /**
   * iniciliza el componente
   */
  ngOnInit() {
    const procesoId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getMascotaEnAdopcion(procesoId);
  }

  /**
   * el proceso de mascota en adopción
   */
  mascotaEnAdopcion : MascotaEnAdopcion;

  /**
   * obtiene el proceso con el id dado
   * @param id 
   */
  getMascotaEnAdopcion(id : number) : void{
    this.service.getMascotaEnAdopcionDetail(id).subscribe(mascota => this.mascotaEnAdopcion = mascota);
  }



}
