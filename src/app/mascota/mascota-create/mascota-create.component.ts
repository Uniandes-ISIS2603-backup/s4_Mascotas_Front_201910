import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MascotaService} from '../mascota.service';

@Component({
    selector: 'app-mascota-create',
    templateUrl: './mascota-create.component.html',
    styleUrls: ['./mascota-create.component.css']
})
export class MascotaCreateComponent implements OnInit 
{
    constructor(private route:ActivatedRoute, private mascotaService:MascotaService)
    {

    }

    ngOnInit(): void { }
}
