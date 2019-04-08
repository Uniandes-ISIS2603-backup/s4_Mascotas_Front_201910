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

  getMascotas():void{
  this.mascotaService.getMascotas().subscribe(ms =>{this.mascotas = ms});
  }

  ngOnInit()
  {
      this.getMascotas();
  }

}