import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecompensaListComponent } from './recompensa-list/recompensa-list.component';
import { RecompensaDetailComponent } from './recompensa-detail/recompensa-detail.component';
import { RecompensaService } from './recompensa.service';
import { RecompensaCreateComponent } from './recompensa-create/recompensa-create.component';
import { RecompensaEditComponent } from './recompensa-edit/recompensa-edit.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, AppRoutingModule
  ],
  declarations: [RecompensaListComponent, RecompensaDetailComponent, RecompensaCreateComponent, RecompensaEditComponent],
  bootstrap: [RecompensaListComponent],
  providers: [RecompensaService]
})
export class RecompensaModule { }
