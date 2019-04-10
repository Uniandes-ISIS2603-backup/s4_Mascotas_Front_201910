import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaEncontradaListComponent } from './mascota-encontrada-list/mascota-encontrada-list.component';
import { MascotaEncontradaDetailComponent } from './mascota-encontrada-detail/mascota-encontrada-detail.component';
import { MascotaEncontradaService } from './mascota-encontrada.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MascotaEncontradaListComponent, MascotaEncontradaDetailComponent],
  bootstrap: [MascotaEncontradaListComponent],
  providers: [MascotaEncontradaService],
  exports : [MascotaEncontradaDetailComponent, MascotaEncontradaListComponent]
})
export class MascotaEncontradaModule { }