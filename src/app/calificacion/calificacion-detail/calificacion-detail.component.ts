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
    const calificacionId = parseInt(this.route.snapshot.paramMap.get('id'));
    if(calificacionId != null){
      this.getCalificacionDetail(calificacionId);
     
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
  getCalificacionDetail(id:number): void {
    
    this.service.getCalificacionDetail(id).subscribe(c => {
      this.calificacion = c
    });
  }

}
