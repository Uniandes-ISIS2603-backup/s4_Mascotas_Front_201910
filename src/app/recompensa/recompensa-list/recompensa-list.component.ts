import { Component, OnInit } from '@angular/core';
import { RecompensaService } from '../recompensa.service';
import { Recompensa } from '../recompensa';

@Component({
  selector: 'app-recompensa-list',
  templateUrl: './recompensa-list.component.html',
  styleUrls: ['./recompensa-list.component.css']
})
export class RecompensaListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param mascotaExtraviadaService The Mascota Extraviada services provider
   */
  constructor(private recompensaService: RecompensaService) { }

  /**
   * Lista de recompensas
   */
  recompensas: Recompensa[]

  /**
   * Pobla la lista de recompensas con el resultado
   * del API request
   */
  getRecompensas(): void{
    this.recompensaService.getRecompensas()
        .subscribe(rs => this.recompensas = rs)
  }

  ngOnInit() {
    this.getRecompensas()
  }

}
