import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CalificacionCreateComponent } from './calificacion-create/calificacion-create.component';
import { CalificacionDetailComponent } from './calificacion-detail/calificacion-detail.component';
import {CalificacionService} from'./calificacion.service';

@NgModule({
  imports: [
    CommonModule,HttpClientModule, AppRoutingModule, FormsModule, CarouselModule.forRoot(), NgbModule, FormsModule
  ],
  declarations: [CalificacionCreateComponent, CalificacionDetailComponent],
  providers:[CalificacionService],
  exports: [CalificacionCreateComponent, CalificacionDetailComponent]
})
export class CalificacionModule { }
