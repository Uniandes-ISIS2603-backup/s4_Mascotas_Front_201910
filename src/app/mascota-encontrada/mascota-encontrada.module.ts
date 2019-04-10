import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaExtraviadaListComponent } from './mascota-extraviada-list/mascota-extraviada-list.component';
import { MascotaExtraviadaDetailComponent } from './mascota-extraviada-detail/mascota-extraviada-detail.component';
import { MascotaEncontradaService } from './mascota-encontrada.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MascotaEncontradaListComponent, MascotaEncontradaDetailComponent],
  bootstrap: [MascotaEncontradaListComponent],
  providers: [MascotaEncontradaService]
})
export class MascotaEncontradaModule { }