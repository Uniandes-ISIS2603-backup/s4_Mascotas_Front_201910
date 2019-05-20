import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../articulo.service';
import { Articulo } from '../articulo';

@Component({
  selector: 'app-listar-articulo',
  templateUrl: './listar-articulo.component.html',
  styleUrls: ['./listar-articulo.component.css']
})

export class ListarArticuloComponent implements OnInit {

  /**
   * Constructor for the component
   * @param articuloService The Articulo services provider
   */
  constructor(private articuloService: ArticuloService) { }

  /**
   * Lista de articulos
   */
  articulos: Articulo[]

  /**
   * Pobla la lista de articulos con el resultado
   * del API request
   */
  getArticulos(): void{
    this.articuloService.getArticulos().subscribe(a => {this.articulos = a});
  }

  ngOnInit() {
    this.getArticulos();
  }

   /**
   * Filtra los articulos por tema
   * @param tema 
   */
  filtrarPorTema(tema:string):void
  {
    this.articuloService.filtrarPorTema(tema).subscribe(ms=>{this.articulos=ms});
  }

}
