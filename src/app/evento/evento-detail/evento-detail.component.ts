import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../evento.service';
import { Evento} from '../evento';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {

   /**
   * Constructor del componente
   * @param route 
   * @param eventoService 
   */
  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService
  ) { }

  /**
   * El evento
   */
  evento: Evento

  /**
   * Obtiene el evento asociado al id
   * @param eventoId - Id del evento
   */
  getEventoDetail(eventoId: number): void{
    this.eventoService.getEventoDetail(eventoId)
        .subscribe(m => {
          this.evento = m
        });
  }

  /**
* Método que inicializa el componente
*/
  ngOnInit() {
    const eventoId = parseInt(this.route.snapshot.paramMap.get('id'))
    if(eventoId){
      this.getEventoDetail(eventoId)
    }
  }
}
