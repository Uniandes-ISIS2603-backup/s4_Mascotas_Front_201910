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

  path:number;

  getMascotas():void
  {
    this.mascotaService.getMascotas().subscribe(ms =>{this.mascotas = ms});
  }

  ngOnInit()
  {
      this.getMascotas();
  }

  get activeSlideIndex(): number {
    return this.activeSlide;
  };
  
  set activeSlideIndex(newIndex: number) {
    if(this.activeSlide !== newIndex) {
      console.log('Active slider index would be changed!');
      // here's the place for your "slide.bs.carousel" logic
    }
    this.activeSlide = newIndex;
  };

}