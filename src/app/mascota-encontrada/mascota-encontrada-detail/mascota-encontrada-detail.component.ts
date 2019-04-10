import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaEncontradaService } from '../mascota-encontrada.service';
import { MascotaEncontrada} from '../mascota-encontrada';

@Component({
  selector: 'app-mascota-extraviada-detail',
  templateUrl: './mascota-extraviada-detail.component.html',
  styleUrls: ['./mascota-extraviada-detail.component.css']
})
export class MascotaEncontradaDetailComponent implements OnInit 
{
    /**
   * Constructor del componente
   * @param route 
   * @param mascotaExtraviadaService 
   */
  constructor(
    private route: ActivatedRoute,
    private mascotaExtraviadaService: MascotaEncontradaService
  ) { }

  /**
   * Proceso cuyo detalle se va a desplegar
   */
  mascotaEncontrada : MascotaEncontrada;

    ngOnInit()
    {
        this.mascotaEncontrada = new MascotaEncontrada( );
    }
}