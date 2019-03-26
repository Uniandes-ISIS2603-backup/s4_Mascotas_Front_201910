import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecompensaService } from '../recompensa.service';
import { Recompensa } from '../recompensa';

@Component({
  selector: 'app-recompensa-detail',
  templateUrl: './recompensa-detail.component.html',
  styleUrls: ['./recompensa-detail.component.css']
})
export class RecompensaDetailComponent implements OnInit {

  /**
   * Constructor del componente
   * @param route 
   * @param recompensaService 
   */
  constructor(
    private route: ActivatedRoute,
    private recompensaService: RecompensaService
  ) { }

  /**
   * La recompensa del proceso
   */
  recompensa: Recompensa

  /**
   * Obtiene la recompensa asociado al id
   * @param recompensaId 
   */
  getRecompensaDetail(recompensaId: number): void{
    this.recompensaService.getRecompensaDetail(recompensaId)
        .subscribe(r => this.recompensa = r)
  }

  ngOnInit() {
    const recompensaId = parseInt(this.route.snapshot.paramMap.get('id'))
    if(recompensaId){
      this.getRecompensaDetail(recompensaId)
    }
  }

}
