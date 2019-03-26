import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecompensaListComponent } from './recompensa-list/recompensa-list.component';
import { RecompensaDetailComponent } from './recompensa-detail/recompensa-detail.component';
import { RecompensaService } from './recompensa.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecompensaListComponent, RecompensaDetailComponent],
  bootstrap: [RecompensaListComponent],
  providers: [RecompensaService]
})
export class RecompensaModule { }
