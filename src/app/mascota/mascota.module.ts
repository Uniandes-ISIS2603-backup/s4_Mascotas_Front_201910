import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Mascota} from './mascota';
import {MascotaDetailComponent} from './mascota-detail/mascota-detail.component';
import {MascotaService} from './mascota.service';
import {MascotaListComponent} from './mascota-list/mascota-list.component';
import {MascotaCreateComponent} from './mascota-create/mascota-create.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    imports: [
      CommonModule, HttpClientModule, AppRoutingModule, FormsModule, CarouselModule.forRoot()
    ],
    declarations: [MascotaDetailComponent, MascotaCreateComponent, MascotaListComponent],
    bootstrap: [MascotaListComponent],
    providers: [MascotaService],
    exports: [MascotaListComponent, MascotaDetailComponent, MascotaCreateComponent]
  })
  export class MascotaModule { }
  {

  }