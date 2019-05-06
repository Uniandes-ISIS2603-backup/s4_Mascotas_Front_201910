import { Component, OnInit } from '@angular/core';
import { ClasificadoService } from '../clasificado.service';
import { Clasificado } from '../clasificado';

@Component({
  selector: 'app-listar-clasificado',
  templateUrl: './listar-clasificado.component.html',
  styleUrls: ['./listar-clasificado.component.css']
})
export class ListarClasificadoComponent implements OnInit {

   /**
   * Constructor for the component
   * @param clasificadoService The Clasificado services provider
   */
  constructor(private clasificadoService: ClasificadoService) { }

  /**
   * Lista de clasificados
   */
  clasificados: Clasificado[]

  /**
   * Pobla la lista de clasificados con el resultado
   * del API request
   */
  getClasificados(): void{
    this.clasificadoService.getClasificados()
        .subscribe(e => this.clasificados = e)

  }

  ngOnInit() {
    this.getClasificados()
  }

}
