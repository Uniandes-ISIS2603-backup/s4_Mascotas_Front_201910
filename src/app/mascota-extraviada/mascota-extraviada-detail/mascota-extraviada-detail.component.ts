import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaExtraviadaService } from '../mascota-extraviada.service';
import { MascotaExtraviada, estado as mascotaExtraviadaEstado} from '../mascota-extraviada';

@Component({
  selector: 'app-mascota-extraviada-detail',
  templateUrl: './mascota-extraviada-detail.component.html',
  styleUrls: ['./mascota-extraviada-detail.component.css']
})
export class MascotaExtraviadaDetailComponent implements OnInit {

  /**
   * Constructor del componente
   * @param route 
   * @param mascotaExtraviadaService 
   */
  constructor(
    private route: ActivatedRoute,
    private mascotaExtraviadaService: MascotaExtraviadaService,
    private router: Router
  ) { }

  /**
   * El proceso de mascota extraviada
   */
  mascotaExtraviada: MascotaExtraviada


  callCreate(): void{
    this.router.navigate(['/recompensas/nuevo'], { queryParams: {
      mascotaExtraviadaId: this.mascotaExtraviada.id
    }})
  }

  /**
   * Obtiene el proceso de mascota extraviada asociado al id
   * @param procesoId - Id del proceso
   */
  getMascotaExtraviadaDetail(procesoId: number): void{
    this.mascotaExtraviadaService.getMascotaExtraviadaDetail(procesoId)
        .subscribe(m => {
          this.mascotaExtraviada = m
        });
  }

  ngOnInit() {
    const procesoId = parseInt(this.route.snapshot.paramMap.get('id'))
    if(procesoId){
      this.getMascotaExtraviadaDetail(procesoId)
    }
  }

}
