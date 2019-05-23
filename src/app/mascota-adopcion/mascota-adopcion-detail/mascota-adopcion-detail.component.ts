import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MascotaAdopcionService } from '../mascota-adopcion-service.service';
import { MascotaEnAdopcion } from '../mascota-adopcion';
import { MascotaEnAdopcionDetail } from '../mascota-en-adopcion-detail';
import { Usuario } from '../../usuario/usuario';
//import { create } from 'domain';



@Component({
  selector: 'app-mascota-adopcion-detail',
  templateUrl: './mascota-adopcion-detail.component.html',
  styleUrls: ['./mascota-adopcion-detail.component.css']
})
export class MascotaAdopcionDetailComponent implements OnInit {
  toastrService: any;

  /**
   * constructor del componente
   * @param route 
   * @param service 
   */
  constructor(private route: ActivatedRoute , private service :MascotaAdopcionService) { }

    /**
  * Output que le dice al componente que el usuario ha creado un nuevo articulo
  */
 @Output() create = new EventEmitter();
  /**
   * iniciliza el componente
   */
  ngOnInit() {
    const procesoId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getMascotaEnAdopcion(procesoId);
    this.getPostuladosByProceso(procesoId);
  }

  /**
   * el proceso de mascota en adopción
   */
  mascotaEnAdopcion : MascotaEnAdopcion;

  /**
   * lista de usuarios postulados
   */
  postulados: Usuario[];
  /**
   * obtiene el proceso con el id dado
   * @param id 
   */
  getMascotaEnAdopcion(id : number) : void{
    this.service.getMascotaEnAdopcionDetail(id).subscribe(mascota => this.mascotaEnAdopcion = mascota);
  }

  success(): void{
    this.create.emit();
    this.toastrService.success("postulado", "exitosamente");
  }

  /**
   * devuelve la lista de los usuarios postulados
   * @param id 
   */
  getPostuladosByProceso(id : number) : void{
    this.service.getPostuladosByProceso(id).subscribe(p => this.postulados = p);
  }



}
