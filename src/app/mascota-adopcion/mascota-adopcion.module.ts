import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MascotaAdopcionListComponent } from './mascota-adopcion-list/mascota-adopcion-list.component';
import { MascotaAdopcionService } from './mascota-adopcion-service.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [MascotaAdopcionListComponent],
  providers: [MascotaAdopcionService],
  exports: [MascotaAdopcionListComponent]
})
export class MascotaAdopcionModule { }
