import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaEncontradaListComponent } from './mascota-encontrada-list/mascota-encontrada-list.component';
import { MascotaEncontradaDetailComponent } from './mascota-encontrada-detail/mascota-encontrada-detail.component';
import { MascotaEncontradaService } from './mascota-encontrada.service';
import {MascotaEncontradaCreateComponent} from './mascota-encontrada-create/mascota-encontrada-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [MascotaEncontradaListComponent, MascotaEncontradaDetailComponent, MascotaEncontradaCreateComponent],
  bootstrap: [MascotaEncontradaListComponent],
  providers: [MascotaEncontradaService],
  exports : [MascotaEncontradaDetailComponent, MascotaEncontradaListComponent, MascotaEncontradaCreateComponent]
})
export class MascotaEncontradaModule { }