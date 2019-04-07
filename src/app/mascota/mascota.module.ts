import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Mascota} from './mascota';
import {MascotaDetailComponent} from './mascota-detail/mascota-detail.component';
import {MascotaService} from './mascota.service';
import {MascotaListComponent} from './mascota-list/mascota-list.component';
import {MascotaCreateComponent} from './mascota-create/mascota-create.component';


@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [MascotaDetailComponent],
    bootstrap: [MascotaListComponent],
    providers: [MascotaService],
    exports: [MascotaListComponent, MascotaDetailComponent, MascotaCreateComponent]
  })
  export class MascotaModule { }
  {

  }