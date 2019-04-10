import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaEncontradaService } from '../mascota-encontrada.service';
import { MascotaEncontrada} from '../mascota-encontrada';

@Component({
  selector: 'app-mascota-extraviada-detail',
  templateUrl: './mascota-extraviada-detail.component.html',
  styleUrls: ['./mascota-extraviada-detail.component.css']
})
export class MascotaEncontradaDetailComponent implements OnInit 
{
    ngOnInit(){
        
    }
}