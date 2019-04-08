import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {MascotaService} from '../mascota.service';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import { Mascota } from '../mascota';
import {MascotaDetail} from '../mascota-detail/mascota-detail';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-mascota-create',
    templateUrl: './mascota-create.component.html',
    styleUrls: ['./mascota-create.component.css']
})
export class MascotaCreateComponent implements OnInit 
{
    constructor(private route:ActivatedRoute, private mascotaService:MascotaService, private toastrService: ToastrService)
    { }

    /**
     * Nueva mascota a crear
     */
    mascota : MascotaDetail;

    /**
    * The output which tells the parent component
    * that the user created a new author
    */
    @Output() create = new EventEmitter();

    crearMascota() : MascotaDetail
    {
        this.mascotaService.crearMascota(this.mascota).subscribe((m)=>{
            this.mascota = m;
            this.create.emit();
            this.toastrService.success("La mascota ha sido creada", "Mascota Creada");
        });
        return this.mascota;
    }

    ngOnInit(): void 
    { 
        this.mascota = new MascotaDetail();
    }
}
