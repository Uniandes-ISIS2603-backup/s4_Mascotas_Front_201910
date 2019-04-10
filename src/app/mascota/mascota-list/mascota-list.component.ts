import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../mascota.service';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit 
{

  /**
   * Constructor
   * @param mascotaService 
   */
  constructor(private mascotaService:MascotaService){}
  /**
   * Lista de mascotas a desplegar
   */
  mascotas:Mascota[];
  /**
   * Slide activo del carrusel
   */
  activeSlide:number;
  /**
   * Tipo para realizar la búsqueda
   */
  tipo:string;
  /**
   * Contador para la verificación del tipo
   */
  contador:number = 0;

  /**
   * Despliega todas las mascotas del sistema en el carrusel
   */
  getMascotas():void
  {
    this.mascotaService.getMascotas().subscribe(ms =>{this.mascotas = ms});
  }

  /**
   * Método que inicializa el componente
   */
  ngOnInit()
  {
      this.getMascotas();
  }

  /**
   * Retorna el slide activo del carrusel
   */
  get activeSlideIndex(): number {
    return this.activeSlide;
  };
  
  /**
   * Cambia el slide activo del carrusel
   */
  set activeSlideIndex(newIndex: number) 
  {
    if(this.activeSlide !== newIndex) {
      console.log('Active slider index would be changed!');
      // here's the place for your "slide.bs.carousel" logic
    }
    this.activeSlide = newIndex;
  };

  /**
   * Despliega las mascotas del sistema cuyo estado coincida con el criterio de búsqueda
   * @param estado 
   */
  filtrarPorEstado(estado:string):void
  {
    this.mascotaService.filtrarPorEstado(estado).subscribe(ms=>{this.mascotas=ms});
  }

  /**
   * Despliega las mascotas del sistema cuyo tipo coincida con el criterio de búsqueda
   * @param tipo 
   */
  filtrarPorTipo(tipo:string):void
  {
    this.mascotaService.filtrarPorTipo(tipo).subscribe(ms=>{this.mascotas=ms});
  }

}