import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MascotaAdopcionListComponent } from './mascota-adopcion-list/mascota-adopcion-list.component';
import { MascotaAdopcionService } from './mascota-adopcion-service.service';
import { MascotaAdopcionDetailComponent } from './mascota-adopcion-detail/mascota-adopcion-detail.component';
import { MascotaAdopcionCreateComponent } from './mascota-adopcion-create/mascota-adopcion-create.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [MascotaAdopcionListComponent, MascotaAdopcionDetailComponent, MascotaAdopcionCreateComponent],
  providers: [MascotaAdopcionService],
  exports: [MascotaAdopcionListComponent, MascotaAdopcionDetailComponent, MascotaAdopcionCreateComponent]
})
export class MascotaAdopcionModule { }
