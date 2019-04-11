import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MascotaEncontradaService } from '../mascota-encontrada.service';
import { MascotaEncontrada} from '../mascota-encontrada';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-mascota-encontrada-create',
  templateUrl: './mascota-encontrada-create.component.html',
  styleUrls: ['./mascota-encontrada-create.component.css']
})
export class MascotaEncontradaCreateComponent implements OnInit 
{
    /**
   * Constructor del componente
   * @param route 
   * @param mascotaExtraviadaService 
   */
  constructor(
    private route: ActivatedRoute,
    private mascotaEncontradaService: MascotaEncontradaService,
    private toastrService: ToastrService
  ) { }

  /**
   * Proceso a crear
   */
  mascotaEncontrada : MascotaEncontrada;

    ngOnInit()
    {
        this.mascotaEncontrada = new MascotaEncontrada( );
    }

    /**
    * Output que le dice al componente que el usuario ha creado una nueva mascota
    */
   @Output() create = new EventEmitter();


    /**
     * Output que le dice al componente que el usuario no desea continuar creando una mascota nueva
     */
    @Output() cancel = new EventEmitter();

    crearMascota() : MascotaEncontrada
    {
        this.mascotaEncontradaService.crearMascota(this.mascotaEncontrada).subscribe((m)=>{
            this.mascotaEncontrada = m;
            this.create.emit();
            this.toastrService.success("La mascota ha sido creada", "Mascota Creada");
        });
        console.log(this.mascotaEncontrada);
        return this.mascotaEncontrada;
    }

    cancelCreation() : void
    {
        this.cancel.emit();
    }



}