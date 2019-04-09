import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Mascota} from '../mascota';
import {MascotaService } from '../mascota.service';

@Component({
    selector: 'app-mascota-detail',
    templateUrl: './mascota-detail.component.html',
    styleUrls: ['./mascota-detail.component.css']
  })
  export class MascotaDetailComponent implements OnInit 
  {
    constructor(private route:ActivatedRoute, private mascotaService:MascotaService)
    {

    }

    /**
     * Detalle de la mascota
     */
    mascotaDetail : Mascota;

    /**
     * Id de la mascota
     */
    idMascota : number;

    /**
     * Ruta al proceso de la mascota
     */
    rutaProceso :string;

    /**
   * Obtiene el proceso de mascota extraviada asociado al id
   * @param id - Id de la mascota
   */
    getMascotaDetail(id: number): void{
      this.mascotaService.getMascotaDetail(id)
          .subscribe(m => {
            this.mascotaDetail = m
          });
    }

    getPath():void
    {
      if(this.mascotaDetail.estado=='EN_ADOPCION')
      {
        this.rutaProceso = "/mascotas-en-adopcion/"+this.mascotaDetail.procesoId;
      }
      else if(this.mascotaDetail.estado == 'EXTRAVIADO')
      {
        this.rutaProceso = "/mascotas-extraviadas/"+this.mascotaDetail.procesoId;
      }
      else if(this.mascotaDetail.estado=='ENCONTRADO')
      {
        this.rutaProceso = "/mascotas-encontradas/"+this.mascotaDetail.procesoId;
      }
    }

    ngOnInit()
    {
      const procesoId = parseInt(this.route.snapshot.paramMap.get('id'))
      if(procesoId)
      {
        this.getMascotaDetail(procesoId);
        this.getPath();
      }
    }
  }