import { Component, OnInit } from '@angular/core';
import { MascotaExtraviadaService } from '../mascota-extraviada.service';
import { MascotaExtraviada } from '../mascota-extraviada';

@Component({
  selector: 'app-mascota-extraviada-list',
  templateUrl: './mascota-extraviada-list.component.html',
  styleUrls: ['./mascota-extraviada-list.component.css']
})
export class MascotaExtraviadaListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param mascotaExtraviadaService The Mascota Extraviada services provider
   */
  constructor(private mascotaExtraviadaService: MascotaExtraviadaService) { }

  /**
   * Lista de procesos de mascota extraviada
   */
  mascotasExtraviadas: MascotaExtraviada[]

  /**
   * Pobla la lista de procesos de mascota extraviada con el resultado
   * del API request
   */
  getMascotasExtraviadas(): void{
    this.mascotaExtraviadaService.getMascotasExtraviadas()
        .subscribe(ms => this.mascotasExtraviadas = ms)

  }

  ngOnInit() {
    this.getMascotasExtraviadas()
  }

}
