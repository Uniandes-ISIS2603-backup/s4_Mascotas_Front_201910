import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CrearClasificadoComponent } from './crear-clasificado/crear-clasificado.component';
import { ClasificadoDetailComponent } from './clasificado-detail/clasificado-detail.component';
import { ListarClasificadoComponent } from './listar-clasificado/listar-clasificado.component';
import { ClasificadoService } from './clasificado.service';
import  {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, AppRoutingModule, FormsModule, NgbModule,
    NgxPermissionsModule.forRoot()
  ],
  declarations: [CrearClasificadoComponent, ClasificadoDetailComponent, ListarClasificadoComponent],
  bootstrap: [ListarClasificadoComponent],
  providers: [ClasificadoService],
  exports: [ListarClasificadoComponent, ClasificadoDetailComponent, CrearClasificadoComponent]
})
export class ClasificadoModule { }
