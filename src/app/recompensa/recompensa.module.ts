import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecompensaListComponent } from './recompensa-list/recompensa-list.component';
import { RecompensaDetailComponent } from './recompensa-detail/recompensa-detail.component';
import { RecompensaService } from './recompensa.service';
import { RecompensaCreateComponent } from './recompensa-create/recompensa-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecompensaListComponent, RecompensaDetailComponent, RecompensaCreateComponent],
  bootstrap: [RecompensaListComponent],
  providers: [RecompensaService]
})
export class RecompensaModule { }
