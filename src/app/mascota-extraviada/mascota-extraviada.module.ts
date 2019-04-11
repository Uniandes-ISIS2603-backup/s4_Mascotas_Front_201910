import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaExtraviadaListComponent } from './mascota-extraviada-list/mascota-extraviada-list.component';
import { MascotaExtraviadaDetailComponent } from './mascota-extraviada-detail/mascota-extraviada-detail.component';
import { MascotaExtraviadaService } from './mascota-extraviada.service';
import { MascotaExtraviadaCreateComponent } from './mascota-extraviada-create/mascota-extraviada-create.component';
import { MascotaExtraviadaEditComponent } from './mascota-extraviada-edit/mascota-extraviada-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MascotaExtraviadaListComponent, MascotaExtraviadaDetailComponent, MascotaExtraviadaCreateComponent, MascotaExtraviadaEditComponent],
  bootstrap: [MascotaExtraviadaListComponent],
  providers: [MascotaExtraviadaService],
  exports: [MascotaExtraviadaListComponent, MascotaExtraviadaDetailComponent, MascotaExtraviadaCreateComponent]
})
export class MascotaExtraviadaModule { }
