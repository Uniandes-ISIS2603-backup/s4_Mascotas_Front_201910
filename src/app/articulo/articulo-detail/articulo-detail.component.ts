import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from '../articulo.service';
import { Articulo} from '../articulo';

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.css']
})
export class ArticuloDetailComponent implements OnInit {

  /**
   * Constructor del componente
   * @param route 
   * @param articuloService 
   */
  constructor(
    private route: ActivatedRoute,
    private articuloService: ArticuloService
  ) { }

  /**
   * El articulo
   */
  articulo: Articulo

  /**
   * Obtiene el articulo asociado al id
   * @param articuloId - Id del articulo
   */
  getArticuloDetail(articuloId: number): void{
    this.articuloService.getArticuloDetail(articuloId)
        .subscribe(m => {
          this.articulo = m
        });
  }

  /**
* Método que inicializa el componente
*/
  ngOnInit() {
    const articuloId = parseInt(this.route.snapshot.paramMap.get('id'))
    if(articuloId){
      this.getArticuloDetail(articuloId)
    }
  }

}
