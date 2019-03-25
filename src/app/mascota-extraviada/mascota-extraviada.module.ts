import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaExtraviadaListComponent } from './mascota-extraviada-list/mascota-extraviada-list.component';
import { MascotaExtraviadaDetailComponent } from './mascota-extraviada-detail/mascota-extraviada-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MascotaExtraviadaListComponent, MascotaExtraviadaDetailComponent]
})
export class MascotaExtraviadaModule { }
