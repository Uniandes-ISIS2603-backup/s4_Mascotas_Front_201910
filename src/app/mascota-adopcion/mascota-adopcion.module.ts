import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MascotaAdopcionListComponent } from './mascota-adopcion-list/mascota-adopcion-list.component';
import { MascotaAdopcionService } from './mascota-adopcion-service.service';
import { MascotaAdopcionDetailComponent } from './mascota-adopcion-detail/mascota-adopcion-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [MascotaAdopcionListComponent, MascotaAdopcionDetailComponent],
  providers: [MascotaAdopcionService],
  exports: [MascotaAdopcionListComponent, MascotaAdopcionDetailComponent]
})
export class MascotaAdopcionModule { }
