import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasificadoService } from '../clasificado.service';
import { Clasificado} from '../clasificado';

@Component({
  selector: 'app-clasificado-detail',
  templateUrl: './clasificado-detail.component.html',
  styleUrls: ['./clasificado-detail.component.css']
})
export class ClasificadoDetailComponent implements OnInit {

  /**
   * Constructor del componente
   * @param route 
   * @param clasificadoService 
   */
  constructor(
    private route: ActivatedRoute,
    private clasificadoService: ClasificadoService
  ) { }

   /**
   * El clasificado
   */
  clasificado: Clasificado

  /**
   * Obtiene el clasificado asociado al id
   * @param clasificadoId - Id del clasificado
   */
  getClasificadoDetail(clasificadoId: number): void{
    this.clasificadoService.getClasificadoDetail(clasificadoId)
        .subscribe(m => {
          this.clasificado = m
        });
  }

  ngOnInit() {
    const clasificadoId = parseInt(this.route.snapshot.paramMap.get('id'))
    if(clasificadoId){
      this.getClasificadoDetail(clasificadoId)
    }
  }
}


