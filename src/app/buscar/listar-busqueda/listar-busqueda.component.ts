import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscarService } from '../buscar.service';
import { Evento } from '../../evento/evento';
import { Articulo } from '../../articulo/articulo';

@Component({
  selector: 'app-listar-busqueda',
  templateUrl: './listar-busqueda.component.html',
  styleUrls: ['./listar-busqueda.component.css']
})
export class ListarBusquedaComponent implements OnInit {

   /**
   * Constructor del componente
   * @param route 
   * @param buscarService 
   */
  constructor(
    private route: ActivatedRoute,
    private buscarService: BuscarService
  ) { }

 /**
   * Lista de articulos
   */
  articulos: Articulo[]

   /**
   * Lista de eventos
   */
  eventos: Evento[]

   /**
   * Pobla la lista de eventos con el resultado
   * del API request
   */
  buscarEventosNombre(nombre: string): void{
    this.buscarService.buscarEventosNombre(nombre)
        .subscribe(e => this.eventos = e)
  }

    /**
   * Pobla la lista de articulos con el resultado
   * del API request
   */
  buscarArticulosTitulo(titulo: string): void{
    this.buscarService.buscarArticulosTitulo(titulo)
    .subscribe(a => {this.articulos = a});
  }

  ngOnInit() {
    const buscar = this.route.snapshot.paramMap.get('busq')
    if(buscar){
      this.buscarArticulosTitulo(buscar)
      this.buscarEventosNombre(buscar)
    }
  }

}
