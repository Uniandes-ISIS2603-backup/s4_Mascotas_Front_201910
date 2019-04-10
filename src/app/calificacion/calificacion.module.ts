import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionCreateComponent } from './calificacion-create/calificacion-create.component';
import { CalificacionDetailComponent } from './calificacion-detail/calificacion-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalificacionCreateComponent, CalificacionDetailComponent],
  exports: [CalificacionModule]
})
export class CalificacionModule { }
