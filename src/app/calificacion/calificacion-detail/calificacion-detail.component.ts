import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalificacionService } from '../calificacion.service';
import { Calificacion } from '../calificacion';



@Component({
  selector: 'app-calificacion-detail',
  templateUrl: './calificacion-detail.component.html',
  styleUrls: ['./calificacion-detail.component.css']
})
export class CalificacionDetailComponent implements OnInit {

  /**
   * constructor of the class
   * @param route 
   * @param servicio 
   */
  constructor(private route : ActivatedRoute , private service: CalificacionService ) { }

  /**
   * inicializes the component
   */
  ngOnInit() {
    const procesoId = parseInt(this.route.snapshot.paramMap.get('id'));
    if(procesoId != null){
      this.getCalificacionByProceso(procesoId);
     
    }

    
  }

  /**
   * la calificación del proceso en adopción
   */
  calificacion : Calificacion;

  /**
   * 
   * @param id 
   */
  getCalificacionByProceso(id:number): void {
    
    this.service.getCalificacionByProceso(id).subscribe(c => {
      this.calificacion = c
    });
  }

}
